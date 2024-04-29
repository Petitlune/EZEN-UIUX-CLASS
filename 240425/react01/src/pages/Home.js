import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import catImage from "../assets/ggompang.jpeg";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fffacd;
  font-family: "SimKyungha";
`;
const Header = styled.div`
  font-size: 40px;
  color: #222;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 26px;
  margin: 20px;
  color: #ffffff;
  background-color: #fda520;
  padding: 10px 20px;
  border-radius: 10px;
`;

const LogoImage = styled.div`
  margin-top: 10px;
  width: 350px;
  height: 350px;
  border-radius: 100%;
  border: 5px solid #fda520;
  overflow: hidden;
`;
const Desc = styled.div`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 600;
`;
const Button = styled.button`
  font-size: 24px;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  color: #ffffff;
  background-color: #000000;
`;
const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    navigate("/question");
  };
  return (
    <Wrapper>
      <Header>💖예비 집사 판별기💖</Header>
      <Content>
        <Title>나에게 맞는 주인님은?😻</Title>
        <LogoImage>
          <img
            // className="rounded-circle"
            width={350}
            height={350}
            src={catImage}
            alt="catImg"
          />
        </LogoImage>
        <Desc>MBTI를 기반으로 하는 나랑 잘 맞는 고양이 찾기!</Desc>
        <Button onClick={handleClickButton}>테스트 시작</Button>
      </Content>
    </Wrapper>
  );
};

export default Home;
