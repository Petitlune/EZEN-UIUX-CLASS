import React from "react";
import { styled } from "styled-components";
import Circle from "./Circle";

function App() {
  return (
    <div>
      <Circle borderColor="blue" bgColor="teal" />
      <Circle text="Im here" bgColor="tomato" />
    </div>
  );
}

export default App;
