import React, { useState } from "react";
import styled from "styled-components";
import ModalBox from "../components/ModalBox";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

const Info = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
const InfoInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-template-columns: 24px;
  background: #ebf4f6;
  height: 60px;
  width: 86%;
  font-family: "Mapo";
  font-weight: 600;
  color: #222;
  font-size: 14px;
  &:last-child {
    background: rgba(248, 164, 164, 0.2);
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const BankClone = styled.div`
  background: #fff;
  padding: 8px 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;
`;
const InfoImg = styled.img`
  width: 90%;
  height: auto;
  display: inline-block;
  margin-bottom: 20px;
`;
const Information = ({ Subtitle, SubtitleKR, DateInfo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const OpenInfoGroom = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <DateInfo>
        <Subtitle>expressing celebration</Subtitle>
        <SubtitleKR>축하의 마음 전하기</SubtitleKR>
        <p>
          저희 둘의 시작을 축하해 주시는
          <br />
          모든 분들에게 진심으로 감사드리며
          <br />
          전해주신 따뜻한 마음, <br />
          오래도록 간직하겠습니다.
        </p>
      </DateInfo>
      <Info>
        <InfoInner>
          <Title>
            <img src="./img/flower.png" alt="flower" />
            <span>신랑측</span>
          </Title>
          <BankClone onClick={OpenInfoGroom}>계좌번호 보기</BankClone>
          {isModalOpen && <ModalBox onClose={handleCloseModal} />}
        </InfoInner>
        <InfoInner>
          <Title>
            <img src="./img/flower.png" alt="flower" />
            <span>신부측</span>
          </Title>
          <BankClone onClick={OpenInfoGroom}>계좌번호 보기</BankClone>
          {isModalOpen && <ModalBox onClose={handleCloseModal} />}
        </InfoInner>
      </Info>
      <InfoImg src="./img/InfoPage.jpg" alt="InfoImage" />
      <Subtitle style={{ fontSize: "24px" }}>THANK YOU !</Subtitle>
    </Container>
  );
};

export default Information;
