# 환경 변수 설정 가이드

## API 키 설정 방법

### 1. 환경 변수 설정 (권장)

#### Windows (PowerShell)
```powershell
$env:API_JUSO_KEY="your_actual_api_key_here"
```

#### Windows (Command Prompt)
```cmd
set API_JUSO_KEY=your_actual_api_key_here
```

#### Linux/Mac (Bash)
```bash
export API_JUSO_KEY="your_actual_api_key_here"
```

### 2. IDE에서 설정

#### IntelliJ IDEA
1. Run Configuration → Environment Variables
2. `API_JUSO_KEY` = `your_actual_api_key_here`

#### VS Code
1. `.vscode/launch.json` 파일 생성
2. 환경 변수 설정:
```json
{
    "env": {
        "API_JUSO_KEY": "your_actual_api_key_here"
    }
}
```

### 3. 로컬 설정 파일 (개발용)

`application-local.properties` 파일을 생성하여 로컬에서만 사용:
```properties
api.juso.key=your_actual_api_key_here
```

**주의**: 이 파일은 `.gitignore`에 포함되어 Git에 커밋되지 않습니다.

## API 키 발급 방법

1. [공공데이터포털](https://data.go.kr/) 회원가입
2. "도로명주소 API" 신청
3. 발급받은 API 키를 위 방법 중 하나로 설정

## 보안 주의사항

- **절대** API 키를 코드에 하드코딩하지 마세요
- **절대** API 키를 Git에 커밋하지 마세요
- 환경 변수나 로컬 설정 파일을 사용하세요
- 프로덕션 환경에서는 더 강력한 보안 방법을 사용하세요
