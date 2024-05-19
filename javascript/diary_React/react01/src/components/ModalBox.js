import React, { useState } from "react";
import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";
import InnerContent from "./InnerContent";

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  overflow-y: hidden;
`;

const ModalInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  height: 50%;
  padding: 28px 16px;
  background-color: #fff;
  z-index: 100;
  font-family: "Mapo";
  font-size: 14px;
`;

const ClosedButton = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  font-size: 28px;
  color: #000;
  cursor: pointer;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
const InnerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 18px;
  img {
    width: 22px;
    height: 22px;
  }
`;

const ModalBox = ({ onClose }) => {
  return (
    <Container>
      <ModalInner>
        <ClosedButton onClick={onClose}>
          <IoIosCloseCircle />
        </ClosedButton>
        <InnerWrap>
          <InnerTitle>
            <img src="./img/flower.png" alt="flower" />
            <h3>신랑측</h3>
          </InnerTitle>
          <InnerContent
            title="신랑"
            name="현기환"
            bank="신한은행 110 426 124578"
          />
          <InnerContent
            title="아버지"
            name="현아빠"
            bank="우리은행 110 426 124578"
          />
          <InnerContent
            title="어머니"
            name="최엄마"
            bank="농협은행 351031 52 054156"
          />
        </InnerWrap>
      </ModalInner>
    </Container>
  );
};

export default ModalBox;
