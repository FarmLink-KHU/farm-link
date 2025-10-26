package com.farmlink.farm_link_backend.controller;

import com.farmlink.farm_link_backend.dto.AddressValidationRequest;
import com.farmlink.farm_link_backend.dto.AddressValidationResponse;
import com.farmlink.farm_link_backend.service.AddressValidationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/address")
@RequiredArgsConstructor
@Slf4j
@CrossOrigin(origins = "http://localhost:5173")
@Tag(name = "주소 검증", description = "주소 검증 및 지역 정보 조회 API")
public class AddressController {
    
    private final AddressValidationService addressValidationService;
    
    @PostMapping("/validate")
    @Operation(summary = "주소 검증", description = "입력된 주소를 공공데이터포털 API를 통해 검증하고 지역 정보를 반환합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "주소 검증 성공"),
            @ApiResponse(responseCode = "400", description = "잘못된 요청 또는 주소를 찾을 수 없음")
    })
    public ResponseEntity<AddressValidationResponse> validateAddress(@RequestBody AddressValidationRequest request) {
        log.info("주소 검증 요청: {}", request.getKeyword());
        
        AddressValidationResponse response = addressValidationService.validateAddress(request);
        
        if (response.getSuccess()) {
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.badRequest().body(response);
        }
    }
    
    @GetMapping("/validate")
    @Operation(summary = "주소 검증 (GET)", description = "GET 방식으로 주소를 검증합니다.")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "주소 검증 성공"),
            @ApiResponse(responseCode = "400", description = "잘못된 요청 또는 주소를 찾을 수 없음")
    })
    public ResponseEntity<AddressValidationResponse> validateAddressGet(
            @Parameter(description = "검색할 주소 키워드", required = true) @RequestParam String keyword,
            @Parameter(description = "현재 페이지 번호", example = "1") @RequestParam(defaultValue = "1") Integer currentPage,
            @Parameter(description = "페이지당 결과 수", example = "10") @RequestParam(defaultValue = "10") Integer countPerPage) {
        
        AddressValidationRequest request = AddressValidationRequest.builder()
                .keyword(keyword)
                .currentPage(currentPage)
                .countPerPage(countPerPage)
                .build();
        
        return validateAddress(request);
    }
}
