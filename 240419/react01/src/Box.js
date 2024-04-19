import React from "react";
import GrandBox from "./GrandBox";
import { useSelector } from "react-redux";
//부모자식 상관없이 Redux store 안에 값을 아무데서나 갖다 쓸 수 있다.
const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <div>Box {count}</div>
      <GrandBox />
    </div>
  );
};

export default Box;
