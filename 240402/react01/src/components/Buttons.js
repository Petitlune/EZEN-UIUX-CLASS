import React from "react";
const Buttons = () => {
  const handlOnClick = (e) => {
    console.log(e.target.name);
  };
  return (
    <div>
      <button name="A버튼" onClick={handlOnClick}>
        A버튼
      </button>
      <button name="B버튼" onClick={handlOnClick}>
        B버튼
      </button>
    </div>
  );
};

export default Buttons;
