import "./App.css";
import { useState, useEffect, useRef } from "react";
import Viewer01 from "./components/Viewer01";
import Controller from "./components/Controller";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const didMountRef = useRef(false);

  //의존성 배열 자체를 없앤 경우 : 컴포넌트가 랜더링 될 때마다 콜백함수를 실행시킴

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });

  //의존성 배열 빈배열 값 : 컴포넌트가 최초 mount가 되는 시점에서 딱 한번만 실행
  useEffect(() => {
    // console.log("커컴포넌트");
  }, []);

  const handleSetCount = (num) => {
    setCount(count + num);
  };
  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    console.log("update", count, text);
  }, [count, text]);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer01 count={count} />
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
