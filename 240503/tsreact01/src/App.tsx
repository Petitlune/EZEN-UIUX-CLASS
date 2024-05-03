import React from "react";
import styled from "styled-components";
import "./App.css";
import { useState } from "react";
import Button from "./Components/Button";
import Lable from "./Components/Lable";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  margin-bottom: 32px;
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [counter, setCounter] = useState(0);
  const sub = () => {
    setCounter(counter - 1);
  };
  const add = () => {
    setCounter(counter + 1);
  };
  return (
    <Container>
      <Title>Counter App </Title>
      <Contents>
        <Button label="-" onClick={sub} />
        <Lable data={counter}></Lable>
        <Button label="+" onClick={add} />
      </Contents>
    </Container>
  );
}

export default App;
