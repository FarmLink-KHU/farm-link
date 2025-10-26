import { useNavigate, useLocation } from "react-router-dom";
import "./HeaderNav.css"; // 스타일 적용

export default function HeaderNav({ hideProgress = false }) {
  const navigate = useNavigate();
  const location = useLocation();

  const stepMap = {
    "/": 0,
    "/home": 1,
    "/result": 2,
  };

  const currentStep = stepMap[location.pathname.replace(/\/$/, "")] ?? 0;
  const totalSteps = 3;
  const progressPercent = (currentStep / (totalSteps - 1)) * 100;

  return (
    <header className="main-header">
      <button className="text-button" onClick={() => window.history.back()}>
        ≪ 이전
      </button>

      {!hideProgress && (
        <div className="progress-bar-container">
          <div
            className="progress-bar-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      )}

      <button className="text-button" onClick={() => navigate("/")}>
        <img
          src="/home.gif"
          alt="집집"
          style={{ width: "40px", height: "40px", marginRight: "12px" }}
        />
      </button>
    </header>
  );
}
