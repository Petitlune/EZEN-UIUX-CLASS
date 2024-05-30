import React from "react";
import Button from "../components/Button";
import KakaoAPI from "../components/KakaoAPI";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 74px;
`;

const HowToGo = ({ Subtitle, DateInfo, SubtitleKR }) => {
  return (
    <Container>
      <DateInfo>
        <Subtitle>location</Subtitle>
        <SubtitleKR>오시는 길</SubtitleKR>
        <p>
          가천컨벤션센터 5층, 컨벤션홀 <br />
          경기도 성남시 수정구 성남대로 1342 <br />
          분당선 가천대역 1번 출구,
          <br />
          비전타워 건물
        </p>
      </DateInfo>
      <Button />
      <KakaoAPI />
    </Container>
  );
};

export default HowToGo;
