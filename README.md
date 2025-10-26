<img width="1024" height="1024" alt="cute" src="https://github.com/user-attachments/assets/35e15293-6ef3-4c37-820a-3749e96c99d1" /># Farm Link

<div align="center">

<img width="1024" height="1024" alt="cute" src="https://github.com/user-attachments/assets/82b28ba7-23c2-491f-ada0-a8f1152fa3c8" />


**스마트팜 설치 가능 여부를 실시간으로 확인하는 서비스**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-6DB33F?style=flat-square&logo=spring&logoColor=white)](https://spring.io/projects/spring-boot)
[![H2 Database](https://img.shields.io/badge/H2-Database-1E90FF?style=flat-square&logo=h2&logoColor=white)](https://www.h2database.com/)
[![Swagger](https://img.shields.io/badge/Swagger-OpenAPI-85EA2D?style=flat-square&logo=swagger&logoColor=white)](https://swagger.io/)

</div>

---

## 서비스 소개

**Farm Link**는 농업인과 스마트팜 사업자들이 특정 지역에 스마트팜 시설을 설치할 수 있는지 **실시간으로 확인**할 수 있는 서비스입니다.

### 메인 서비스 화면

<div align="center">

![Farm Link 메인 서비스](docs/main-service-screenshot.png)

*개발제한구역(그린벨트) 지역의 스마트팜 시설별 허용 여부 예시*

</div>

### 주요 기능

- **주소 검증**: 공공데이터포털 API를 통한 정확한 주소 검증
- **시설별 허용 여부**: 지역별 법률 근거에 따른 시설 설치 가능 여부
- **실시간 정보**: 지역 타입별 스마트팜 시설 허용 정책 제공
- **상세 안내**: 각 시설별 설치 조건 및 관할 지자체 정보 제공

### 지원 시설 유형

| 시설 유형 | 설명 | 허용 여부 표시 |
|----------|------|---------------|
| **스마트 온실** | 고정식 온실/비닐하우스 | ✅/❌ |
| **수직 농장** | 다층 구조 재배 시스템 | ✅/❌ |
| **식물 공장** | 완전제어형 재배 시설 | ✅/❌ |
| **컨테이너형 스마트팜** | 이동 가능한 소형 재배 시스템 | ✅/❌ |

> **시각적 구분**: 각 시설 박스는 지역별 허용 정책에 따라 초록색(허용) 또는 빨간색(제한)으로 표시됩니다.

---

## 지역별 허용 정책

### 농업진흥지역 (농업진흥구역)
- ✅ **스마트 온실**: 허용 (농업진흥구역의 허용행위에 명시)
- ✅ **수직 농장**: 조건부 허용 (지정된 지역·지구·구역 안 설치)
- ✅ **식물 공장**: 조건부 허용 (지정된 지역·지구·구역 안 설치)
- ❌ **컨테이너형**: 원칙적 불허 (건축물 취급)

### 일반농지 (진흥지역 밖 농지)
- ✅ **스마트 온실**: 허용 (농지의 통상적 이용행위로 인정)
- ✅ **수직 농장**: 허용 (2024.2.21 정책으로 공식 발표)
- ✅ **식물 공장**: 조건부 허용 (수직농장과 동일 취급)
- ❌ **컨테이너형**: 원칙적 불허 (건축물 취급)

### 개발제한구역 (그린벨트)
- ✅ **스마트 온실**: 조건부 허용 (별표1상 농림시설로 허가받아 설치 가능)
- ❌ **수직 농장**: 원칙적 불허 (공장류 취급, 별표1 열거 대상 미포함)
- ❌ **식물 공장**: 원칙적 불허 (공장류 취급, 별표1 열거 대상 미포함)
- ❌ **컨테이너형**: 원칙적 불허 (건축물 취급)

---

## 기술 스택

### Frontend
- **React 18.2.0** - 사용자 인터페이스
- **Vite** - 빌드 도구 및 개발 서버
- **React Router** - 페이지 라우팅
- **CSS3** - 스타일링

### Backend
- **Spring Boot 3.2.0** - REST API 서버
- **Java 17** - 백엔드 개발 언어
- **Gradle** - 빌드 도구
- **H2 Database** - 인메모리 데이터베이스
- **SpringDoc OpenAPI** - API 문서화 (Swagger UI)

### External APIs
- **공공데이터포털 주소 API** - 주소 검증 및 지역 정보 조회

---

## 시작하기

### 사전 요구사항
- **Node.js** 16.0 이상
- **Java** 17 이상
- **Gradle** 7.0 이상

### 1. 저장소 클론
```bash
git clone https://github.com/your-username/farm-link.git
cd farm-link
```

### 2. 프론트엔드 설정
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

### 3. 백엔드 설정
```bash
# 백엔드 디렉토리로 이동
cd backend

# Gradle 빌드 및 실행
./gradlew bootRun
```

### 4. 서비스 접속
- **프론트엔드**: http://localhost:5173
- **백엔드 API**: http://localhost:8080
- **Swagger UI**: http://localhost:8080/swagger-ui.html
- **H2 Console**: http://localhost:8080/h2-console

---

## API 문서

### 주소 검증 API

#### POST `/api/address/validate`
주소를 검증하고 지역별 스마트팜 시설 허용 여부를 조회합니다.

**요청 예시:**
```json
{
  "keyword": "서울특별시 강남구 테헤란로 123",
  "currentPage": 1,
  "countPerPage": 10
}
```

**응답 예시:**
```json
{
  "roadAddr": "서울특별시 강남구 테헤란로 123 (역삼동)",
  "jibunAddr": "서울특별시 강남구 역삼동 123-45",
  "zipNo": "06292",
  "siNm": "서울특별시",
  "sggNm": "강남구",
  "emdNm": "역삼동",
  "regionType": "개발제한구역(그린벨트)",
  "smartfarmAllowed": true,
  "smartGreenhouseAllowed": true,
  "verticalFarmAllowed": false,
  "plantFactoryAllowed": false,
  "containerSmartfarmAllowed": false,
  "message": "주소 검증이 완료되었습니다.",
  "success": true
}
```

#### GET `/api/address/validate`
GET 방식으로 주소를 검증합니다.

**요청 예시:**
```
GET /api/address/validate?keyword=서울특별시 강남구 테헤란로 123&currentPage=1&countPerPage=10
```

---

## 프로젝트 구조

```
farm-link/
├── src/                          # 프론트엔드 소스코드
│   ├── components/              # React 컴포넌트
│   │   └── ui/                  # UI 컴포넌트
│   ├── utils/                   # 유틸리티 함수
│   ├── *.jsx                    # 페이지 컴포넌트
│   └── *.css                    # 스타일 파일
├── backend/                     # 백엔드 소스코드
│   └── src/main/java/com/farmlink/farm_link_backend/
│       ├── controller/          # REST API 컨트롤러
│       ├── service/             # 비즈니스 로직
│       ├── dto/                 # 데이터 전송 객체
│       ├── domain/              # 엔티티
│       └── common/              # 공통 설정
├── public/                      # 정적 파일
└── README.md                    # 프로젝트 문서
```

---

## 개발 환경 설정

### 환경 변수 설정
백엔드 `application.properties`에서 API 키를 설정하세요:

```properties
# 공공데이터포털 주소 API 설정
api.juso.key=YOUR_API_KEY
api.juso.url=https://business.juso.go.kr/addrlink/addrLinkApi.do

# CORS 설정
cors.allowed-origins=http://localhost:5173
```

### API 키 발급
1. [공공데이터포털](https://data.go.kr/) 회원가입
2. "도로명주소 API" 신청
3. 발급받은 API 키를 `application.properties`에 설정

---

## 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

## 문의

- **프로젝트 관리자**: Farm Link Team
- **이메일**: contact@farmlink.com
- **웹사이트**: https://farmlink.com

---

<div align="center">

**Farm Link - 스마트팜의 새로운 시작**

Made with ❤️ by Farm Link Team

</div>
