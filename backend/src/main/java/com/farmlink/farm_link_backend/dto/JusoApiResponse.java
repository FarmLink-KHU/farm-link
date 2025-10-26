package com.farmlink.farm_link_backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class JusoApiResponse {
    @JsonProperty("results")
    private Results results;
    
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Results {
        private Common common;
        private List<Juso> juso;
    }
    
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Common {
        private String totalCount;
        private Integer currentPage;
        private Integer countPerPage;
        private String errorCode;
        private String errorMessage;
    }
    
    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Juso {
        private String roadAddr; // 전체 도로명주소
        private String roadAddrPart1; // 도로명주소 (참고항목 제외)
        private String roadAddrPart2; // 도로명주소 참고항목
        private String jibunAddr; // 지번 정보
        private String engAddr; // 도로명주소 (영문)
        private String zipNo; // 우편번호
        private String admCd; // 행정구역코드
        private String rnMgtSn; // 도로명코드
        private String bdMgtSn; // 건물관리번호
        private String detBdNmList; // 상세건물명
        private String bdNm; // 건물명
        private String bdKdcd; // 공동주택여부
        private String siNm; // 시도명
        private String sggNm; // 시군구명
        private String emdNm; // 읍면동명
        private String liNm; // 법정리명
        private String rn; // 도로명
        private String udrtYn; // 지하여부
        private Integer buldMnnm; // 건물본번
        private Integer buldSlno; // 건물부번
    }
}
