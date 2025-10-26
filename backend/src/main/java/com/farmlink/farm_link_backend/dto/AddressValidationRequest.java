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
@Schema(description = "주소 검증 요청")
public class AddressValidationRequest {
    @Schema(description = "검색할 주소 키워드", example = "서울시 강남구 테헤란로 123")
    private String keyword; // 검색할 주소 키워드
    
    @Schema(description = "현재 페이지 번호", example = "1")
    private Integer currentPage; // 현재 페이지 (기본값: 1)
    
    @Schema(description = "페이지당 결과 수", example = "10")
    private Integer countPerPage; // 페이지당 결과 수 (기본값: 10)
}
