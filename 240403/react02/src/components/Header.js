//랜더링이 될 필요가 없는 컴포넌트 ===> 최적화
import React from "react";

const Header = () => {
  // console.log("Header update");
  return (
    <div className="Header">
      <h3>오늘은📅</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

export default React.memo(Header);
