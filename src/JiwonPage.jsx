import { useState } from "react";
import "./JiwonPage.css";
import HeaderNav from "./components/ui/HeaderNav";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function JiwonPage() {
  const [expanded, setExpanded] = useState(null);
  const navigate = useNavigate();
  const getProgramDescription = (name) => {
    switch (name) {
      case "🌱 청년 스마트팜 창업 보육사업":
        return (
          <div style={boxStyle}>
            <strong>📌 사업 목적</strong><br />
            만 18세 이상 39세 이하 청년에게 스마트팜 영농기술을 <br />
            기초부터 경영까지 실습 중심으로 교육하고, 전문가 컨설팅을 통해 영농 정착 지원<br /><br />
            <strong>👤 대상 및 자격</strong><br />
            - 대한민국 국적의 18~39세 청년<br />
            - 스마트팜 혁신밸리 4개 지역(전북, 전남, 경북, 경남)<br />
            - 기존 교육 수료자는 제외 (단, 승인된 중도 포기자는 예외)<br /><br />
            <strong>💰 지원 내용</strong><br />
            - 국비 100% 지원<br />
            - 교육비, 강사비, 장비 임차, 실습비, 식비, 숙박비 등<br />
            - 2025년 총 예산: 80억 원<br />
            - 일반관리비는 총 교육비의 30% 이내<br /><br />
            <strong>📅 일정</strong><br />
            - 4월: 스마트팜코리아에 모집 공고 예정<br />
            - 7월: 적격심사 및 면접을 통해 선발<br /><br />
            <strong>☎ 문의처</strong><br />
            - 농림축산식품부: 044-201-2425 / 2422<br />
            - 농업기술진흥원: 063-919-1770 / 1772<br />
            - 보육센터(전북·전남·경북·경남): 063-290-6434 외<br /><br />
            <a href="https://uni.agrix.go.kr/guide/lmxsrv/law/lawFullView.do?SEQ=14878" target="_blank" rel="noopener noreferrer">
              <strong>🔗 관련 링크</strong>
            </a>
          </div>
        );
      case "💰 스마트팜 종합자금 대출":
        return (
          <div style={boxStyle}>
            <strong>💡 스마트팜 종합자금 대출이란?</strong><br />
            스마트팜 설치를 희망하는 청년농업인이나, 현재 스마트팜을 운영 중인 농업인(또는 농업법인)에게 제공되는 정책자금입니다.<br /><br />
            <strong>👥 신청 대상</strong><br />
            <u>청년 스마트팜 대상자:</u> 생애 최초 스마트팜 설치 희망자 중 다음 조건에 해당하는 만 40세 미만 개인<br />
            - 농업계 고등학교 또는 대학의 농업관련 학과 졸업자<br />
            - 스마트팜 청년창업 보육센터 교육 이수자<br />
            <u>일반 스마트팜 대상자:</u> 농업인 또는 농업법인<br /><br />
            <strong>⏳ 대출 기간</strong><br />
            - 운전자금: 최대 2년 이내<br />
            - 시설자금: 최대 25년 (5년 거치, 20년 분할상환)<br />
            - 개보수자금: 5~10년<br />
            - 기계장비 구입: 5년<br /><br />
            <strong>💵 대출 한도</strong><br />
            - 청년농업인: 최대 30억<br />
            - 일반: 최대 50억<br /><br />
            <strong>📈 대출 금리</strong><br />
            - 운전자금: 고정 1.5% or 변동<br />
            - 시설자금: 고정 1.0%<br /><br />
            <strong>📞 대출 상담</strong><br />
            - NH농협 지점 또는 고객센터: 1661-3000<br /><br />
            <a href="https://www.smartfarmkorea.net/contents/view.do?menuId=M1102010103" target="_blank" rel="noopener noreferrer">
              <strong>🔗 관련 링크</strong>
            </a>
          </div>
        );
      case "🍎 과수 분야 스마트팜 확산 사업":
        return (
          <div style={boxStyle}>
            <strong>📌 사업 목적</strong><br />
            ICT 시설장비 도입을 통해 노동력을 절감하고 고품질 과수를 생산하여 과수산업 경쟁력 확보<br /><br />

            <strong>🌳 대상 및 자격</strong><br />
            - 사과, 배, 감귤 등을 재배하며 ICT 융복합 시설 적용이 가능한 과수 농업경영체<br />
            - 농업경영체 등록 필수<br />
            - 가온시설 운영 농가, 열대·아열대 과수 재배 농가 등은 제외<br /><br />

            <strong>💡 지원 내용</strong><br />
            - 온습도, 병해충 예찰, 관수·시비 제어 등 ICT 융복합 시설 및 정보시스템<br />
            - 관정, 무인방제시설, 자동개폐기, 환풍기 등 ICT 연계 장비도 조건부 포함<br /><br />

            <strong>💰 지원 조건 및 예산</strong><br />
            - 총 사업비 기준 보조 50%(국고 20%, 지방비 30%), 이차보전 30%, 자부담 20%<br />
            - 이차보전 조건: 고정금리 2.0% 또는 변동금리(시중금리 -2.0%)<br />
            - 대출 상환: 3년 거치 7년 균등분할상환<br />
            - 사업비 상한: 2억 원<br />
            - 2025년 예산: 총 12억 원 (국비 2.4억, 지방비 3.6억, 자부담 6억)<br /><br />

            <strong>📝 신청 방법 및 일정</strong><br />
            - 시·군·구청에 신청서 제출 및 e나라도움 등록<br />
            - 신청기간: 2025년 3~4월<br />
            - 대상자 선정: 서면평가 및 현장평가 후 농식품부 결정<br /><br />

            <strong>📞 문의처</strong><br />
            - 농식품부 원예경영과: 044-201-2254 / 2255<br />
            - 농수산식품유통공사 산지유통부: 044-931-1095
            <br></br>
            <br></br>
            <a href="https://uni.agrix.go.kr/guide/lmxsrv/law/lawFullView.do?SEQ=14782" target="_blank" rel="noopener noreferrer">
                    <strong>🔗 관련 링크</strong>
                  </a>
          </div>
        );
              case "💡 2024년 스마트팜 ICT융복합확산사업":
                return <div
            style={{
              marginTop: '8px',
              padding: '16px',
              backgroundColor: '#f9fbff',
              border: '1px solid #cce0ff',
              borderRadius: '12px',
              color: '#333',
              fontSize: '16px',
              lineHeight: '1.6'
            }}
          >
            <strong>📌 사업 목적</strong><br />
            - 온·습도 자동 제어 등 스마트팜 환경관리 시스템 보급<br />
            - 원예작물 품질 향상과 수출 기반 구축<br />
            - 농자재 가격 상승에 대응한 에너지 절감 자재 지원<br /><br />

            <strong>🌱 사업 내용</strong><br />
            - 스마트팜 ICT 시설 설치 및 컨설팅<br />
            - 원예시설 현대화를 위한 자재·설비(관수관비, 환경관리, 무인방제기 등)<br />
            - 에너지 절감시설(다겹보온커튼, 자동보온덮개 등) 설치<br /><br />

            <strong>👥 신청 대상</strong><br />
            - 고정식 재배시설(온실, 수직농장 등)에서 채소, 화훼, 특용작물(버섯, 인삼 등) 재배 중인 농업인·법인·생산자단체<br /><br />

            <strong>💰 지원 조건 및 예산</strong><br />
            - 시설 설치: 국비 25%, 지방비 30%, 융자 25%(이차보전), 자부담 20%<br />
            - 컨설팅: 국비 100% 지원<br />
            - 2025년 사업비: 약 607억 원 (국비 약 154억, 지방비 약 180억 포함)<br /><br />

            <strong>📝 신청 방법 및 일정</strong><br />
            - 신청 장소: 관할 시·군·구청<br />
            - 신청 시기: 전년도 7~8월 (지자체별 공고)<br />
            - 선정 방법: 시·군·구 선정위원회 심의<br /><br />

            <strong>📞 문의처</strong><br />
            - 농림축산식품부 원예경영과: 044-201-2256 / 2259<br />
            - 한국농어촌공사 스마트팜사업부 (컨설팅): 061-338-5721 / 5729<br />
            - 각 지자체 담당 부서(시·군·구청) 문의
            <br></br>
            <br></br>
            <a href="https://uni.agrix.go.kr/guide/lmxsrv/law/lawFullView.do?SEQ=14939" target="_blank" rel="noopener noreferrer">
                    <strong>🔗 관련 링크</strong>
                  </a>
          </div>

              case "🏡 온실신축 스마트팜 사업":
                return <div
            style={{
              marginTop: '8px',
              padding: '16px',
              backgroundColor: '#f9fbff',
              border: '1px solid #cce0ff',
              borderRadius: '12px',
              color: '#333',
              fontSize: '16px',
              lineHeight: '1.6'
            }}
          >
            <strong>📌 사업 목적</strong><br />
            - 스마트팜 기반의 철골·자동화 온실 신축 및 개보수를 지원하여<br />
            - 안정적 생산기반을 구축하고 FTA 등 시장개방에 대응<br /><br />

            <strong>🌱 지원 대상</strong><br />
            - 채소·화훼류 재배 농업인, 농업법인, 생산자단체 (버섯·인삼 제외)<br />
            - 신축 시설에 대한 3년 이상 재배 또는 온실 운영 경력 필수<br /><br />

            <strong>🏗️ 지원 내용</strong><br />
            - 철골(유리/경질판) 온실 또는 자동화 비닐온실의 신·개축 비용<br />
            - 내부 ICT 융복합 장비 포함 (센서, 영상, 통합제어, 환기, 관수 등)<br />
            - 연계 시설: 양액시설, 자동개폐기, 통신주 등<br /><br />

            <strong>💰 지원 조건 및 예산</strong><br />
            - 보조 50% (국고 20%, 지방비 30%), 융자(이차보전) 30%, 자부담 20%<br />
            - 2025년 사업비: 총 120억 원 (국비 24억, 지방비 36억 포함)<br /><br />

            <strong>📁 신청 방법</strong><br />
            - 신청 장소: 사업예정지 관할 시·군·구청<br />
            - 신청 시기: 전년도 6~7월경 (지자체 공고 참고)<br />
            - 선정 방식: 농식품부 주관 공모 평가<br /><br />

            <strong>📏 부지 및 요건</strong><br />
            - 0.3ha~2.0ha 규모의 연동 또는 인접 단동 온실 가능<br />
            - 12년 이상 장기임대 또는 자가소유 부지 필요<br /><br />

            <strong>🧱 사업 유형</strong><br />
            - 위탁설계형: 설계+시공 모두 농어촌공사 위탁<br />
            - 자가설계형: 시공만 위탁, 설계는 자부담 직접 실시<br /><br />

            <strong>📞 문의처</strong><br />
            - 농림축산식품부 원예경영과: 044-201-2256 / 2259<br />
            - 한국농어촌공사 스마트팜사업부: 061-338-5721 / 5729
            <br></br>
            <br></br>
            <a href="https://uni.agrix.go.kr/guide/lmxsrv/law/lawFullView.do?SEQ=14773" target="_blank" rel="noopener noreferrer">
                    <strong>🔗 관련 링크</strong>
                  </a>
          </div>
              default:
                return "해당 사업에 대한 설명은 준비 중입니다.";
            }
          };

  const [answers, setAnswers] = useState({
    isOperatingFarm: false,
    age: "",
    crops: [],
    hasFarmReg: false,
    hasExperience: null,
    educationCompleted: false,
    gradMajor: false,
    area: 0,
  });

  const handleChange = (key, value) => {
    if (key === "isOperatingFarm" && value === false) {
      setAnswers((prev) => ({
        isOperatingFarm: false,
        age: prev.age,
        crops: [],
        hasFarmReg: false,
        hasExperience: null,
        educationCompleted: false,
        gradMajor: false,
        area: 0,
      }));
    } else {
      setAnswers((prev) => ({ ...prev, [key]: value }));
    }
  };

  const eligiblePrograms = [];
  const ageNum = parseInt(answers.age);
  const selectedCrops = answers.crops || [];
  const isFarmOperating = answers.isOperatingFarm;

  if (ageNum >= 18 && ageNum < 40) {
    eligiblePrograms.push("🌱 청년 스마트팜 창업 보육사업");
    if (answers.educationCompleted || answers.gradMajor) {
      eligiblePrograms.push("💰 스마트팜 종합자금 대출");
    }
  }

  if (selectedCrops.includes("과일") && answers.hasFarmReg && answers.area >= 1000) {
    eligiblePrograms.push("🍎 과수 분야 스마트팜 확산 사업");
  }

  if (
    selectedCrops.some((c) => ["채소", "화훼", "버섯", "인삼"].includes(c)) &&
    answers.hasFarmReg
  ) {
    eligiblePrograms.push("💡 2024년 스마트팜 ICT융복합확산사업");
  }

  if (
    selectedCrops.some((c) => ["채소", "화훼"].includes(c)) &&
    answers.hasFarmReg &&
    answers.hasExperience &&
    answers.area >= 1000
  ) {
    eligiblePrograms.push("🏡 온실신축 스마트팜 사업");
  }

  return (
    <div className="page-container">
      <header className="main-header" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="로고" onClick={() => navigate("/")} style={{ width: '40px', height: '40px', marginRight: '12px' }} />
          <h2 onClick={() => navigate("/")} style={{ margin: 0, fontSize: '20px' }}>Farm Link</h2>
        </div>
      </header>

      <div className="container">


  <AnimatePresence>
    <motion.div
      className="question-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    ><h3>✅ 체크리스트</h3>

  {/* 나이 체크 */}
  <div className="q">
    <label>
      🎂 만 18세 이상 만 40세 이하인가요?
      <input
        type="checkbox"
        checked={ageNum >= 18 && ageNum < 40}
        onChange={(e) => handleChange("age", e.target.checked ? 30 : 17)}
        style={{ marginLeft: "10px" }}
      />
    </label>
  </div>

  {/* 농가 운영 여부 */}
  <div className="q">
    <label>
      🧑‍🌾 현재 농가를 운영하고 계신가요?
      <input
        type="checkbox"
        checked={answers.isOperatingFarm}
        onChange={(e) => handleChange("isOperatingFarm", e.target.checked)}
        style={{ marginLeft: "10px" }}
      />
    </label>
  </div>

  {/* 작물 선택 */}
  <AnimatePresence>
    {isFarmOperating && (
      <motion.div
        className="q"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <label>🌾 재배 중인 작물은 무엇인가요?</label>
        <div>
          {["과일", "채소", "화훼", "버섯", "인삼", "기타"].map((crop) => (
            <label key={crop} style={{ marginRight: "10px" }}>
              <input
                type="checkbox"
                checked={answers.crops.includes(crop)}
                onChange={(e) => {
                  const newCrops = e.target.checked
                    ? [...answers.crops, crop]
                    : answers.crops.filter((c) => c !== crop);
                  handleChange("crops", newCrops);
                }}
              />
              {crop}
            </label>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>

  {/* 농업경영체 등록 */}
  <AnimatePresence>
    {isFarmOperating && selectedCrops.some((c) =>
      ["과일", "채소", "화훼", "버섯", "인삼"].includes(c)
    ) && (
      <motion.div
        className="q"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <label>
          📝 농업경영체 등록을 하셨나요?
          <input
            type="checkbox"
            checked={answers.hasFarmReg}
            onChange={(e) => handleChange("hasFarmReg", e.target.checked)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </motion.div>
    )}
  </AnimatePresence>

  {/* 3년 이상 재배 또는 온실 운영 경험 */}
  <AnimatePresence>
    {isFarmOperating && selectedCrops.some((c) =>
      ["채소", "화훼"].includes(c)
    ) && (
      <motion.div
        className="q"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <label>
          ⏳ 해당 작물을 3년 이상 재배했거나 온실 운영 경험이 있나요?
          <input
            type="checkbox"
            checked={answers.hasExperience === true}
            onChange={(e) => handleChange("hasExperience", e.target.checked)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </motion.div>
    )}
  </AnimatePresence>

  {/* 재배 면적 */}
  <AnimatePresence>
    {isFarmOperating && selectedCrops.some((c) =>
      ["과일", "채소", "화훼"].includes(c)
    ) && (
      <motion.div
        className="q"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <label>
          📐 재배 면적이 1,000㎡ 이상인가요?
          <input
            type="checkbox"
            checked={answers.area >= 1000}
            onChange={(e) => handleChange("area", e.target.checked ? 1000 : 0)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </motion.div>
    )}
  </AnimatePresence>

  {/* 교육 이수 */}
  <AnimatePresence>
    {ageNum >= 18 && ageNum < 40 && (
      <motion.div
        className="q"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <label>
          🎓 스마트팜 보육센터 교육을 이수하셨나요?
          <input
            type="checkbox"
            checked={answers.educationCompleted}
            onChange={(e) => handleChange("educationCompleted", e.target.checked)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </motion.div>
    )}
  </AnimatePresence>

  {/* 농업 관련 학과 전공 */}
  <AnimatePresence>
    {ageNum >= 18 && ageNum < 40 && (
      <motion.div
        className="q"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <label>
          🏫 농업 관련 학과를 졸업하셨나요?
          <input
            type="checkbox"
            checked={answers.gradMajor}
            onChange={(e) => handleChange("gradMajor", e.target.checked)}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </motion.div>
    )}
  </AnimatePresence>
    </motion.div>
</AnimatePresence>


        
        <AnimatePresence>
          <motion.div
            className="result-section"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3>📋 지원 가능 사업</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <AnimatePresence>
                {eligiblePrograms.map((name) => (
                  <motion.li
                    key={name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginBottom: '12px' }}
                  >
                    <div
                      className="program-title"
                      onClick={() => setExpanded(expanded === name ? null : name)}
                      style={{ cursor: 'pointer', fontWeight: '600' }}
                    >
                      {expanded === name ? "▼" : "▶"} {name}
                    </div>
                    <AnimatePresence>
                      {expanded === name && (
                        <motion.div
                          key={name}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.3 }}
                          style={{ marginTop: '8px', fontSize: '16px' }}
                        >
                          {getProgramDescription(name)}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <HeaderNav hideProgress={true}/>
    </div>
  );
}

// 공통 스타일 추출
const boxStyle = {
  marginTop: '8px',
  padding: '16px',
  backgroundColor: '#f9fbff',
  border: '1px solid #cce0ff',
  borderRadius: '12px',
  color: '#333',
  fontSize: '16px',
  lineHeight: '1.6'
};
