import React from "react";
import styled from "styled-components";

const Btn = styled.div`
  width: 140px;
  height: 46px;
  background: #f8a4a4;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  line-height: 46px;
  cursor: pointer;
  margin-top: 28px;
`;

const Button = () => {
  const copyLocation = async () => {
    await navigator.clipboard
      .writeText("경기도 성남시 수정구 성남대로 1342")
      .then(() => {
        alert("Copy🥰");
      });
  };

  return <Btn onClick={copyLocation}>주소 복사하기</Btn>;
};

export default Button;
