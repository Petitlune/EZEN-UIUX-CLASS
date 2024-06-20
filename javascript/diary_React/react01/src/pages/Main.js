import React, { useState, useRef } from "react";
import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";
import music from "../mp3/Winter Wonderland _Jazz Christmas Carol.mp4";
import { styled } from "styled-components";

const Wrap = styled.div`
  position: relative;
`;

const TopDate = styled.h1`
  margin: 10px 0;
  font-family: "Mapo";
  font-weight: 600;
`;
const Music = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 150;
  animation: volume alternate 2s infinite;

  @keyframes volume {
    0% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const MainImgWrap = styled.div`
  width: 360px;
  margin: 0 auto;
  border: 4px solid rgba(248, 164, 164, 0.2);
  border-bottom: 0;
  border-top-right-radius: 212px;
  border-top-left-radius: 212px;
  overflow: hidden;
`;
const WeddingMainImg = styled.img`
  width: 120%;
  min-width: 300px;
  height: auto;
  object-fit: cover;
  object-position: -31.4px -40px;
`;

const MainText = styled.div`
  p:first-child {
    display: inline-block;
    padding: 12px 5vw;
    margin-top: -68px;
    font-size: 24px;
    font-weight: 600;
    background: #f8f8f8;
    color: #222;
  }
  p:last-child {
    display: inline-block;
    margin-top: 6px;
    font-size: 16px;
    line-height: 25px;
    font-weight: 600;
  }
`;
const Box = styled.div`
  width: 100vw;
  height: 40px;
  margin-top: -40px;
  background: #f8f8f8;
`;

const Main = ({ Subtitle }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(<FaVolumeMute />);
  const audioRef = useRef(new Audio(music));

  const playMusic = () => {
    const audio = audioRef.current;
    audio.volume = 1;
    audio.loop = true;
    if (audio.paused) {
      audio.play();
      setVolume(<FaVolumeHigh />);
    } else {
      audio.pause();
      setVolume(<FaVolumeMute />);
      audio.currentTime = 0;
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <Wrap>
      <Music onClick={playMusic}>{volume}</Music>
      <TopDate>2024.09.07</TopDate>
      <Subtitle>saturday</Subtitle>
      <MainImgWrap>
        <WeddingMainImg src="./img/wedding01.jpg" alt="wedding-img" />
      </MainImgWrap>

      <MainText>
        <p>현기환 · 김다슬</p>
        <Box></Box>
        <p>
          2024년 9월 7일 토요일 오후 12시 20분 <br /> 가천컨벤션센터 5층,
          컨벤션홀
        </p>
      </MainText>
    </Wrap>
  );
};

export default Main;
