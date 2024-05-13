import "./App.css";
import React, { useRef } from "react";
import Main from "./pages/Main";

import Date from "./pages/Date";
import HowToGo from "./pages/HowToGo";
import PhotoBook from "./pages/PhotoBook";

function App() {
  const calendarRef = useRef(null);
  const howToGoRef = useRef(null);
  const scrollToRef = () => {
    calendarRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToHowRef = () => {
    howToGoRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <Main id="Main"></Main>
      <div className="navigation">
        <span onClick={scrollToRef} className="date">
          예식일시
        </span>
        <span onClick={scrollToHowRef} className="date">
          오시는길
        </span>
        <span className="date">사진첩</span>
        <span className="date">마음전하기</span>
      </div>
      <div ref={calendarRef}>
        <Date></Date>
      </div>
      <div ref={howToGoRef}>
        <HowToGo />
      </div>
      <div ref={howToGoRef}>
        <PhotoBook />
      </div>
    </div>
  );
}

export default App;
