import React from "react";
import styled from "styled-components";

const Container = styled.button`
  background: #ff5722;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1.5rem;
  padding: 10px 25px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;
// props는 객체이기 때문에 객체로써 타입정의를 해야한다. interface로 객체 타입정의!

interface Props {
  label: string;
  onClick: () => void;
}

//1. 버튼 안에 들어가는 텍스트 => 문자열
//2. 기능 => 함수
const Button = ({ label, onClick }: Props) => {
  return <Container onClick={onClick}>{label}</Container>;
};

export default Button;
