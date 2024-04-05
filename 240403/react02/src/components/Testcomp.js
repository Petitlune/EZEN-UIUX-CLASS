import { type } from "@testing-library/user-event/dist/type";

//useReducer 함수

import "./Testcomp.css";
//상태 관리를 하기 위한 함수
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "INIT":
      return 0;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
};

const Testcomp = () => {
  //[초기값, 상태변화 감지 함수]
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h4>테스트 컴포넌트</h4>
      <div>
        <bold>{count}</bold>
      </div>
      <div className="buttons">
        <button
          onClick={() =>
            //액션 객체
            dispatch({
              type: "INCREASE",
              data: 1,
            })
          }
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "INIT",
            });
          }}
        >
          0
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "DECREASE",
              data: 1,
            });
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Testcomp;
