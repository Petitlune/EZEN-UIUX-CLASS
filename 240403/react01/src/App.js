//왜 컴포넌트로 작업해야하나 ==> 디버깅 과정이 편하다. state 변수가 업데이트되는 순간 컴포넌트가 rerendering된다.

import "./App.css";
import Viewer from "./components/Viewer";
import { useState } from "react";

function App() {
  const [num, setNum] = useState(0);
  const onDecrease = () => {
    setNum(num - 1);
  };
  const onIncrease = () => {
    setNum(num + 1);
  };

  return (
    <div className="App">
      <h2>{num}</h2>
      <Viewer num={num} />
      <div>
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}

export default App;
