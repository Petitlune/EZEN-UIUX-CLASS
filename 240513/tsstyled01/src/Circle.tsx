import React, { useState } from "react";
import { styled } from "styled-components";

//제네릭형식 <>으로 타입에 대한 변수를 직접 지정
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  border: 4px solid ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 32px;
`;

interface ContainerProps {
  bgColor: string;
  borderColor: string;
  text?: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Circle = ({
  text = "default text",
  borderColor,
  bgColor,
}: CircleProps) => {
  const [counter, setCounter] = useState<number | string>(1);
  setCounter("hello");
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
