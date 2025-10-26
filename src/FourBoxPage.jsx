// FourBoxPage.jsx
import React, { useState, useEffect } from 'react';
import './FourBoxPage.css';
import HeaderNav from './components/ui/HeaderNav';
import { Button } from './components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom';
import { addressApi } from './utils/api';

export default function FourBoxPage() {
  const [popupBox, setPopupBox] = useState(null);
  const [nextPopupBox, setNextPopupBox] = useState(null);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [boxEntered, setBoxEntered] = useState(false);
  const [addressInfo, setAddressInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();
  const address = location.state?.address || "";
  const navigate = useNavigate();


  useEffect(() => {
    const timer = setTimeout(() => setBoxEntered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // 주소 검증 API 호출
  useEffect(() => {
    const validateAddress = async () => {
      if (!address.trim()) {
        setError("주소가 입력되지 않았습니다.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const result = await addressApi.validateAddress(address);
        
        if (result.success) {
          setAddressInfo(result);
        } else {
          setError(result.message || "주소 검증에 실패했습니다.");
        }
      } catch (err) {
        console.error('주소 검증 오류:', err);
        setError("주소 검증 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    };

    validateAddress();
  }, [address]);

  // 지역 타입에 따른 CSS 클래스 반환
  const getRegionTypeClass = (regionType) => {
    switch (regionType) {
      case '농업진흥지역':
        return 'green';
      case '일반농지':
        return 'blue';
      case '개발제한구역(그린벨트)':
        return 'red';
      default:
        return 'gray';
    }
  };

  // 스마트팜 허용 여부에 따른 박스 하이라이트 클래스 반환
  const getBoxHighlightClass = (boxId) => {
    if (!addressInfo) return "highlighted-box-red";
    
    let isAllowed = false;
    
    // 시설 유형별 허용 여부 확인
    switch (boxId) {
      case 1: // 스마트 온실
        isAllowed = addressInfo.smartGreenhouseAllowed;
        break;
      case 2: // 수직 농장
        isAllowed = addressInfo.verticalFarmAllowed;
        break;
      case 3: // 식물 공장
        isAllowed = addressInfo.plantFactoryAllowed;
        break;
      case 4: // 컨테이너형 스마트팜
        isAllowed = addressInfo.containerSmartfarmAllowed;
        break;
      default:
        isAllowed = false;
    }
    
    return isAllowed ? "highlighted-box-green" : "highlighted-box-red";
  };

  // 지역 타입에 따른 정보 메시지 반환
  const getRegionInfoMessage = (regionType) => {
    switch (regionType) {
      case '농업진흥지역':
        return '농업진흥지역은 농업시설 중 일부만 제한적으로 허용됩니다.';
      case '일반농지':
        return '모든 시설은 지자체 허가 및 농지전용 협의 절차 필요합니다.';
      case '개발제한구역(그린벨트)':
        return '개발제한구역은 원칙적으로 농업시설 포함한 대부분의 시설 설치가 제한됩니다. 예외적 허용은 지자체 협의를 통해 판단됩니다.';
      default:
        return '해당 지역의 스마트팜 설치 가능 여부는 지자체에 문의하시기 바랍니다.';
    }
  };

  // 지역에 따른 연락처 정보 반환
  const getRegionContactInfo = (siNm, sggNm) => {
    // 실제로는 더 정교한 매핑이 필요하지만, 현재는 간단한 예시
    if (siNm && sggNm) {
      return `${siNm} ${sggNm}청 농업정책과<br />전화: 해당 지자체 문의`;
    }
    return '해당 지자체 농업정책과에 문의하시기 바랍니다.';
  };

  const boxes = [
    { id: 1, title: '스마트 온실', image: '/src/assets/onsil_pic.png' },
    { id: 2, title: '수직 농장', image: '/src/assets/vertical_pic.png' },
    { id: 3, title: '식물 공장', image: '/src/assets/gongjang_pic.png' },
    { id: 4, title: '컨테이너형 스마트팜', image: '/src/assets/container_pic.png' }
  ];

  const handleClick = (box) => {
    if (popupBox && popupBox.id !== box.id) {
      setIsLeaving(true);
      setTimeout(() => {
        setPopupBox(box);
        setIsLeaving(false);
      }, 400);
    } else {
      setPopupBox(box);
    }
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPopupBox(null);
      setIsClosing(false);
    }, 400);
  };

  return (
    <div className="page-container">
      <header className="main-header" style={{ display: 'flex', alignItems: 'center', padding: '10px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/logo.png" alt="로고" onClick={() => navigate("/")} style={{ width: '40px', height: '40px', marginRight: '12px' }} />
          <h2 onClick={() => navigate("/")} style={{ margin: 0, fontSize: '20px' }}>Farm Link</h2>
        </div>
      </header>

      <div className="page">
        <div className="region-label">
          {loading ? (
            <div>주소를 검증 중입니다...</div>
          ) : error ? (
            <div style={{ color: 'red' }}>오류: {error}</div>
          ) : addressInfo ? (
            <>당신의 주소는 <strong className={`region-type ${getRegionTypeClass(addressInfo.regionType)}`}>{addressInfo.regionType}</strong>에 해당합니다.</>
          ) : (
            <div>주소 정보를 불러올 수 없습니다.</div>
          )}
        </div>
        <div className="content-group">
          <div className={`box-grid${popupBox ? ' with-popup' : ''} ${boxEntered ? 'box-entered' : ''}`}>
            {boxes.map((box) => {
              const highlightClass = getBoxHighlightClass(box.id);

              return (
                <div
                  key={box.id}
                  className={`box ${highlightClass}`}
                  onClick={() => handleClick(box)}
                >
                  <img src={box.image} alt={box.title} className="box-image" />
                  <div className="box-title">{box.title}</div>
                </div>
              );
            })}


          </div>

          {popupBox && (
            <div className={`popup ${isLeaving ? 'popup-leave-up' : ''} ${isClosing ? 'popup-leave-close' : 'popup-slide-in'}`}>
              <div className="popup-header">
                <div className="popup-title-group">
                  <strong className="popup-title">{popupBox.title}</strong>

                  {/* 건설 여부 표시 */}
                  {addressInfo && (
                    (() => {
                      let isAllowed = false;
                      switch (popupBox.id) {
                        case 1: isAllowed = addressInfo.smartGreenhouseAllowed; break;
                        case 2: isAllowed = addressInfo.verticalFarmAllowed; break;
                        case 3: isAllowed = addressInfo.plantFactoryAllowed; break;
                        case 4: isAllowed = addressInfo.containerSmartfarmAllowed; break;
                        default: isAllowed = false;
                      }
                      return isAllowed ? (
                        <div className="buildable-label green">✅ 건설 가능!</div>
                      ) : (
                        <div className="buildable-label red">❌ 건설 불가능...</div>
                      );
                    })()
                  )}
                </div>

                <button onClick={handleClose}>닫기</button>
              </div>


              <p className="popup-description">
                {popupBox.title === "스마트 온실" &&
                  "센서와 자동제어 시스템으로 온도·습도 등 환경을 조절해 작물 생장을 최적화하는 지능형 온실."}
                {popupBox.title === "수직 농장" &&
                  "다층 구조로 작물을 재배하여 공간 효율을 높이고 생산성을 극대화한 농업 방식."}
                {popupBox.title === "식물 공장" &&
                  "인공조명과 폐쇄 환경을 이용해 연중 안정적인 작물 생산이 가능한 시스템."}
                {popupBox.title === "컨테이너형 스마트팜" &&
                  "컨테이너 내부에 스마트팜 기술을 탑재해 설치와 이동이 간편한 소형 재배 시스템."}
              </p>

              {addressInfo && (
                <div style={{ marginTop: '1rem', padding: '0.75rem', backgroundColor: '#f9f9f9', borderRadius: '0.5rem', border: '1px solid #ccc', fontSize: '14px' }}>
                  <p style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    📌 {getRegionInfoMessage(addressInfo.regionType)}
                  </p>
                  <p style={{ margin: 0, lineHeight: '1.4' }}>
                    📞 <strong>관할 지자체 안내</strong><br />
                    {getRegionContactInfo(addressInfo.siNm, addressInfo.sggNm)}
                  </p>
                </div>
              )}


              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <Button onClick={() => navigate("/jiwon")}>지원 자격 확인!</Button>
              </div>
            </div>
          )}


        </div>
      </div>

      <HeaderNav />
    </div>
  );
} 
