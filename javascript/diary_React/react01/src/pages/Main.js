import React, { useState, useRef } from "react";

import { FaVolumeHigh } from "react-icons/fa6";
import { FaVolumeMute } from "react-icons/fa";

import music from "../mp3/SellBuyMusic.mp3";
const Main = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(<FaVolumeHigh />);
  const audioRef = useRef(new Audio(music));

  const playMusic = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
      setVolume(<FaVolumeMute />);
    } else {
      audio.pause();
      setVolume(<FaVolumeHigh />);
      audio.currentTime = 0;
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="wrap">
      <div className="music" onClick={playMusic}>
        {volume}
      </div>

      <h1>2024.09.07</h1>
      <p className="subtitle">saturday</p>
      <img className="weddingMain" src="./img/MainPage.jpg" alt="wedding-img" />
      <div className="mainText">
        <p>현기환 · 김다슬</p>
        <p>
          2024 9월 7일 토요일 오후 12시 20분 <br /> 가천컨벤션센터 5층, 컨벤션홀
        </p>
      </div>
    </div>
  );
};

export default Main;
