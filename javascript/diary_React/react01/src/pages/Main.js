import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import music from "../mp3/SellBuyMusic.mp3";
const Main = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(music));

  const playMusic = () => {
    const audio = audioRef.current;

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="wrap">
      <FontAwesomeIcon
        className="music"
        onClick={playMusic}
        icon={faVolumeHigh}
      />

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
