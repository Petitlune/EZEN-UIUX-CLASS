//useRef() : reference의 약어 => 참조 / 기존 JS, DOM 활용해서 html 문서 컨트럴 했던 그 기능을 활용할 수 있게 만든다.
//특정요소의 태그를 돔처럼 활용하고자 할때 useRef사용!

import "./App.css";
import { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const reset = useRef();

  const handleOnClick = () => {
    if (text.length < 5) {
      //포커스함수는 특정조건에 부함하지 않으면 넘어가지 않게 만든다.
      reset.current.focus();
    } else {
      alert(text);
      reset.current.value = "";
    }
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="App">
      <input ref={reset} value={text} onChange={handleOnChange} />
      <button onClick={handleOnClick}>작성완료</button>
    </div>
  );
}

export default App;
