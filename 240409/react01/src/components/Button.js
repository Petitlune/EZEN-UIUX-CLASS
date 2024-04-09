//공통 컴포넌트 -> 상황에 맞춰서 사용할 것임 (ex. 작성완료, 취소하기, 뒤로가기)
import React from "react";
import "./Button.css";

const Button = ({ text, type, onClick }) => {
  const btnType = ["Positive", "Negative"].includes(type) ? type : "default";
  return (
    <button
      onClick={onClick}
      className={["Button", `Button_${btnType}`].join(" ")}
    >
      {text}
    </button>
  );
};

export default Button;
