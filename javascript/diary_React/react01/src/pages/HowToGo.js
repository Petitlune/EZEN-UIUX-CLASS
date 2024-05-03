import React from "react";
import Button from "../components/Button";

const HowToGo = () => {
  return (
    <div className="HowToGo">
      <div className="date-info">
        <h3 className="subtitle">location</h3>

        <p>
          가천컨벤션센터 5층, 컨벤션홀 <br />
          경기도 성남시 수정구 성남대로 1342 <br /> 분당선 가천대역 1번 출구,
          <br />
          비전타워 건물
        </p>
      </div>
      <Button />
    </div>
  );
};

export default HowToGo;
