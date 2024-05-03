import React from "react";
import styled from "styled-components";

const Label = styled.h1`
  font-size: 2rem;
  margin-bottom: 16px;
`;

interface Props {
  //readonly ==> 읽기전용으로 만들어줌. ==> 순수함수
  readonly label: string;
}

const Title = ({ label }: Props) => {
  return <Label>{label}</Label>;
};

export default Title;
