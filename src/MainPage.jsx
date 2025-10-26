import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // ✅ 추가
import HeaderNav from "./components/ui/HeaderNav";
import "./App.css";
import "./MainPage.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <header className="main-header" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="로고" onClick={() => navigate("/")} style={{ width: '40px', height: '40px', marginRight: '12px' }} />
          <h2 onClick={() => navigate("/")} style={{ margin: 0, fontSize: '20px' }}>Farm Link</h2>
        </div>
      </header>

      {/* 카드 그리드 전체를 motion.div로 감싸고 애니메이션 설정 */}
      <motion.div
        className="card-grid"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* 카드 1 */}
        <motion.div
          className="info-card"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }} // ✅ 이걸로 확실하게 동작시킴
          onClick={() => navigate("/jiwon")}
        >
          <span className="info-card-title">스마트팜 창업 지원 정책</span>
          <h4 className="info-card-desc">수직농장,<br /> 스마트 온실 등<br />미래형 농업 시설<br />설립 지원 받기</h4>
          <div className="spacer" />
          <div className="image-box">
            <img src="/money.png" alt="지원원" />
          </div>
          <p className="info-card-link">세계적 식량 문제 해결 &gt;</p>
        </motion.div>

        {/* 카드 2 */}
        <motion.div
          className="info-card"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }} // ✅ 이걸로 확실하게 동작시킴
          onClick={() => navigate("/home")}
        >
          <span className="info-card-title">간단하게 확인받기</span>
          <h4 className="info-card-desc">내 땅에 스마트팜<br />시설을 설립할 수<br />있나요?</h4>
          <div className="spacer" />
          <div className="image-box">
            <img src="/factory.png" alt="공장" />
          </div>
          <p className="info-card-link">나라 돈 뜯어먹기 &gt;</p>
        </motion.div>

        {/* 카드 3 */}
        <motion.div
          className="info-card"
          variants={cardVariants}
          whileHover={{ scale: 1.03 }} // ✅ 이걸로 확실하게 동작시킴
          onClick={() => navigate("")}
        >
          <span className="info-card-title">스타트업/창업 성공 사례</span>
          <h4 className="info-card-desc">스마트팜으로<br />청년 창업에 성공한
            <br />실제 사례들을<br />확인해보세요!</h4>
          <div className="spacer" />
          <div className="image-box">
            <img src="/file.png" alt="파일" />
          </div>
          <p className="info-card-link">스타트업 뛰어들기 &gt;</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
