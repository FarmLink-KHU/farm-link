package com.farmlink.farm_link_backend.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "address_info")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddressInfo {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "road_addr", nullable = false)
    private String roadAddr; // 전체 도로명주소
    
    @Column(name = "road_addr_part1")
    private String roadAddrPart1; // 도로명주소 (참고항목 제외)
    
    @Column(name = "road_addr_part2")
    private String roadAddrPart2; // 도로명주소 참고항목
    
    @Column(name = "jibun_addr")
    private String jibunAddr; // 지번 정보
    
    @Column(name = "eng_addr")
    private String engAddr; // 도로명주소 (영문)
    
    @Column(name = "zip_no")
    private String zipNo; // 우편번호
    
    @Column(name = "adm_cd")
    private String admCd; // 행정구역코드
    
    @Column(name = "rn_mgt_sn")
    private String rnMgtSn; // 도로명코드
    
    @Column(name = "bd_mgt_sn")
    private String bdMgtSn; // 건물관리번호
    
    @Column(name = "si_nm")
    private String siNm; // 시도명
    
    @Column(name = "sgg_nm")
    private String sggNm; // 시군구명
    
    @Column(name = "emd_nm")
    private String emdNm; // 읍면동명
    
    @Column(name = "li_nm")
    private String liNm; // 법정리명
    
    @Column(name = "rn")
    private String rn; // 도로명
    
    @Column(name = "bd_mnnm")
    private Integer bdMnnm; // 건물본번
    
    @Column(name = "bd_sino")
    private Integer bdSino; // 건물부번
    
    @Column(name = "region_type")
    private String regionType; // 지역 타입 (농업진흥지역, 일반농지, 개발제한구역 등)
    
    @Column(name = "smartfarm_allowed")
    private Boolean smartfarmAllowed; // 스마트팜 설치 허용 여부
    
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
        updatedAt = LocalDateTime.now();
    }
    
    @PreUpdate
    protected void onUpdate() {
        updatedAt = LocalDateTime.now();
    }
}
