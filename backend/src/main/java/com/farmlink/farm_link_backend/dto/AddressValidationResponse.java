package com.farmlink.farm_link_backend.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Schema(description = "주소 검증 응답")
public class AddressValidationResponse {
    @Schema(description = "전체 도로명주소", example = "서울특별시 강남구 테헤란로 123")
    private String roadAddr; // 전체 도로명주소
    
    @Schema(description = "지번 정보", example = "서울특별시 강남구 역삼동 123-45")
    private String jibunAddr; // 지번 정보
    
    @Schema(description = "우편번호", example = "06292")
    private String zipNo; // 우편번호
    
    @Schema(description = "시도명", example = "서울특별시")
    private String siNm; // 시도명
    
    @Schema(description = "시군구명", example = "강남구")
    private String sggNm; // 시군구명
    
    @Schema(description = "읍면동명", example = "역삼동")
    private String emdNm; // 읍면동명
    
    @Schema(description = "지역 타입", example = "일반농지")
    private String regionType; // 지역 타입
    
    @Schema(description = "스마트팜 설치 허용 여부", example = "true")
    private Boolean smartfarmAllowed; // 스마트팜 설치 허용 여부
    
    @Schema(description = "스마트 온실 허용 여부", example = "true")
    private Boolean smartGreenhouseAllowed; // 스마트 온실 허용 여부
    
    @Schema(description = "수직 농장 허용 여부", example = "false")
    private Boolean verticalFarmAllowed; // 수직 농장 허용 여부
    
    @Schema(description = "식물 공장 허용 여부", example = "false")
    private Boolean plantFactoryAllowed; // 식물 공장 허용 여부
    
    @Schema(description = "컨테이너형 스마트팜 허용 여부", example = "true")
    private Boolean containerSmartfarmAllowed; // 컨테이너형 스마트팜 허용 여부
    
    @Schema(description = "결과 메시지", example = "주소 검증이 완료되었습니다.")
    private String message; // 결과 메시지
    
    @Schema(description = "성공 여부", example = "true")
    private Boolean success; // 성공 여부
}
