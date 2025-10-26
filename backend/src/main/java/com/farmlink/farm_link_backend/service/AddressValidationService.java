package com.farmlink.farm_link_backend.service;

import com.farmlink.farm_link_backend.dto.AddressValidationRequest;
import com.farmlink.farm_link_backend.dto.AddressValidationResponse;
import com.farmlink.farm_link_backend.dto.JusoApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;


@Service
@RequiredArgsConstructor
@Slf4j
public class AddressValidationService {
    
    @Value("${api.juso.key}")
    private String apiKey;
    
    @Value("${api.juso.url}")
    private String apiUrl;
    
    private final RestTemplate restTemplate;
    
    public AddressValidationResponse validateAddress(AddressValidationRequest request) {
        log.info("주소 검증 요청 시작: {}", request.getKeyword());
        
        try {
            // 입력 검증
            if (request.getKeyword() == null || request.getKeyword().trim().isEmpty()) {
                return AddressValidationResponse.builder()
                        .success(false)
                        .message("주소 키워드를 입력해주세요.")
                        .build();
            }
            
            // 공공데이터포털 API 호출
            JusoApiResponse apiResponse = callJusoApi(request);
            
            if (apiResponse == null || apiResponse.getResults() == null) {
                return AddressValidationResponse.builder()
                        .success(false)
                        .message("주소 검증 서비스에 일시적인 문제가 발생했습니다.")
                        .build();
            }
            
            if (apiResponse.getResults().getJuso() == null || apiResponse.getResults().getJuso().isEmpty()) {
                return AddressValidationResponse.builder()
                        .success(false)
                        .message("입력하신 주소를 찾을 수 없습니다. 정확한 주소를 입력해주세요.")
                        .build();
            }
            
            // 첫 번째 결과 사용
            JusoApiResponse.Juso juso = apiResponse.getResults().getJuso().get(0);
            
            // 지역 타입 및 스마트팜 허용 여부 판단
            String regionType = determineRegionType(juso);
            SmartfarmPermissions permissions = determineSmartfarmPermissions(regionType);
            
            log.info("주소 검증 성공: {} -> {}", request.getKeyword(), regionType);
            
            return AddressValidationResponse.builder()
                    .roadAddr(juso.getRoadAddr())
                    .jibunAddr(juso.getJibunAddr())
                    .zipNo(juso.getZipNo())
                    .siNm(juso.getSiNm())
                    .sggNm(juso.getSggNm())
                    .emdNm(juso.getEmdNm())
                    .regionType(regionType)
                    .smartfarmAllowed(permissions.smartfarmAllowed)
                    .smartGreenhouseAllowed(permissions.smartGreenhouseAllowed)
                    .verticalFarmAllowed(permissions.verticalFarmAllowed)
                    .plantFactoryAllowed(permissions.plantFactoryAllowed)
                    .containerSmartfarmAllowed(permissions.containerSmartfarmAllowed)
                    .message("주소 검증이 완료되었습니다.")
                    .success(true)
                    .build();
                    
        } catch (Exception e) {
            log.error("주소 검증 중 오류 발생: {}", e.getMessage(), e);
            return AddressValidationResponse.builder()
                    .success(false)
                    .message("주소 검증 중 오류가 발생했습니다: " + e.getMessage())
                    .build();
        }
    }
    
    private JusoApiResponse callJusoApi(AddressValidationRequest request) {
        try {
            log.info("공공데이터포털 API 호출 시작: {}", request.getKeyword());
            
            // 요청 파라미터 설정
            MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
            params.add("confmKey", apiKey);
            params.add("currentPage", String.valueOf(request.getCurrentPage() != null ? request.getCurrentPage() : 1));
            params.add("countPerPage", String.valueOf(request.getCountPerPage() != null ? request.getCountPerPage() : 10));
            params.add("keyword", request.getKeyword());
            params.add("resultType", "json");
            
            log.info("API 요청 파라미터: {}", params);
            
            // 헤더 설정
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
            
            HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(params, headers);
            
            // 먼저 String으로 응답을 받아서 확인
            ResponseEntity<String> stringResponse = restTemplate.postForEntity(apiUrl, entity, String.class);
            
            log.info("API 응답 상태: {}", stringResponse.getStatusCode());
            log.info("API 응답 본문 (String): {}", stringResponse.getBody());
            
            // JSON 파싱 시도
            try {
                ResponseEntity<JusoApiResponse> response = restTemplate.postForEntity(apiUrl, entity, JusoApiResponse.class);
                log.info("API 응답 본문 (Parsed): {}", response.getBody());
                return response.getBody();
            } catch (Exception parseException) {
                log.error("JSON 파싱 오류: {}", parseException.getMessage());
                return null;
            }
            
        } catch (Exception e) {
            log.error("공공데이터포털 API 호출 중 오류 발생: {}", e.getMessage(), e);
            return null;
        }
    }
    
    private String determineRegionType(JusoApiResponse.Juso juso) {
        // 공공데이터포털 API에서 받은 실제 주소 정보를 기반으로 지역 타입 판단
        String siNm = juso.getSiNm();
        String sggNm = juso.getSggNm();
        String emdNm = juso.getEmdNm();
        
        log.info("주소 분석: {} {} {}", siNm, sggNm, emdNm);
        
        // 지역별 스마트팜 시설 허용 정책에 따른 분류
        if (isAgriculturalPromotionArea(siNm, sggNm, emdNm)) {
            return "농업진흥지역";
        }
        else if (isGeneralFarmland(siNm, sggNm, emdNm)) {
            return "일반농지";
        }
        else if (isDevelopmentRestrictedArea(siNm, sggNm, emdNm)) {
            return "개발제한구역(그린벨트)";
        }
        else {
            return "미분류지역";
        }
    }
    
    // 농업진흥지역 판단 로직 (농업진흥구역 지정 지역)
    private boolean isAgriculturalPromotionArea(String siNm, String sggNm, String emdNm) {
        // 농업진흥구역: 농업진흥법에 따라 지정된 지역
        // TODO: 실제 농업진흥구역 데이터베이스 연동 필요
        return (siNm != null && siNm.contains("울산")) ||
               (siNm != null && siNm.contains("전라")) ||
               (siNm != null && siNm.contains("충청"));
    }
    
    // 일반농지 판단 로직 (농업진흥구역 외 농지)
    private boolean isGeneralFarmland(String siNm, String sggNm, String emdNm) {
        // 일반농지: 농업진흥구역 외의 농지 지역
        // TODO: 실제 농지 현황 데이터베이스 연동 필요
        return (siNm != null && siNm.contains("강원")) ||
               (siNm != null && siNm.contains("경상")) ||
               (siNm != null && siNm.contains("전북"));
    }
    
    // 개발제한구역 판단 로직 (그린벨트 등)
    private boolean isDevelopmentRestrictedArea(String siNm, String sggNm, String emdNm) {
        // 개발제한구역: 도시계획법에 따른 개발제한구역, 그린벨트 등
        // TODO: 실제 개발제한구역 데이터베이스 연동 필요
        return (siNm != null && siNm.contains("경기")) ||
               (siNm != null && siNm.contains("서울")) ||
               (siNm != null && siNm.contains("인천"));
    }
    
    /**
     * 스마트팜 시설별 허용 여부를 담는 내부 클래스
     * 각 지역별 법률 근거에 따른 시설 허용/제한 정보를 관리
     */
    private static class SmartfarmPermissions {
        boolean smartfarmAllowed;           // 전체 스마트팜 허용 여부
        boolean smartGreenhouseAllowed;     // 스마트온실(고정식 온실/비닐하우스) 허용 여부
        boolean verticalFarmAllowed;        // 수직농장 허용 여부
        boolean plantFactoryAllowed;        // 식물공장(완전제어형 등) 허용 여부
        boolean containerSmartfarmAllowed;   // 컨테이너형 스마트팜 허용 여부

        SmartfarmPermissions(boolean smartfarmAllowed, boolean smartGreenhouseAllowed,
                           boolean verticalFarmAllowed, boolean plantFactoryAllowed,
                           boolean containerSmartfarmAllowed) {
            this.smartfarmAllowed = smartfarmAllowed;
            this.smartGreenhouseAllowed = smartGreenhouseAllowed;
            this.verticalFarmAllowed = verticalFarmAllowed;
            this.plantFactoryAllowed = plantFactoryAllowed;
            this.containerSmartfarmAllowed = containerSmartfarmAllowed;
        }
    }
    
    /**
     * 지역 타입에 따른 스마트팜 시설별 허용 여부 판단
     * 실제 법률 근거에 기반한 허용/제한 정책 적용
     * 
     * @param regionType 지역 타입 (농업진흥지역, 일반농지, 개발제한구역, 미분류지역)
     * @return SmartfarmPermissions 각 시설별 허용 여부 정보
     */
    private SmartfarmPermissions determineSmartfarmPermissions(String regionType) {
        switch (regionType) {
            case "농업진흥지역":
                // 농업진흥지역: 스마트온실(True), 수직농장(True*), 식물공장(True*), 컨테이너형(False*)
                return new SmartfarmPermissions(
                    true,  // 전체적으로는 허용
                    true,  // 스마트 온실 허용 (농업진흥구역의 허용행위에 명시)
                    true,  // 수직 농장 허용 (조건부 허용 - 지정된 지역·지구·구역 안 설치)
                    true,  // 식물 공장 허용 (조건부 허용 - 지정된 지역·지구·구역 안 설치)
                    false  // 컨테이너형 스마트팜 제한 (원칙적 불허 - 건축물 취급)
                );
            case "일반농지":
                // 일반농지: 스마트온실(True), 수직농장(True), 식물공장(True*), 컨테이너형(False*)
                return new SmartfarmPermissions(
                    true,  // 전체적으로 허용
                    true,  // 스마트 온실 허용 (농지의 통상적 이용행위로 인정)
                    true,  // 수직 농장 허용 (2024.2.21 정책으로 공식 발표)
                    true,  // 식물 공장 허용 (조건부 허용 - 수직농장과 동일 취급)
                    false  // 컨테이너형 스마트팜 제한 (원칙적 불허 - 건축물 취급)
                );
            case "개발제한구역(그린벨트)":
                // 개발제한구역: 스마트온실(True*), 수직농장(False*), 식물공장(False*), 컨테이너형(False*)
                return new SmartfarmPermissions(
                    true,  // 전체적으로 허용
                    true,  // 스마트 온실 허용 (별표1상 농림시설로 허가받아 설치 가능)
                    false, // 수직 농장 제한 (공장류 취급, 별표1 열거 대상 미포함)
                    false, // 식물 공장 제한 (공장류 취급, 별표1 열거 대상 미포함)
                    false  // 컨테이너형 스마트팜 제한 (원칙적 불허 - 건축물 취급)
                );
            default:
                // 미분류 지역: 모든 시설 제한 (안전한 기본값)
                return new SmartfarmPermissions(
                    false, // 전체적으로 제한
                    false, // 스마트 온실 제한
                    false, // 수직 농장 제한
                    false, // 식물 공장 제한
                    false  // 컨테이너형 스마트팜 제한
                );
        }
    }
}
