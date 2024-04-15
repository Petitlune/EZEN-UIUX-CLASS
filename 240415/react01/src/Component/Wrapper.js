import React from "react";
import "./Wrapper.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import mainImage from "./img/jakob-owens-5d4XBj7GYeo-unsplash.jpg";
import Description from "./Description";

const Wrapper = () => {
  return (
    <div className="Wrapper">
      <span className="musicVolume">
        <i>
          <FontAwesomeIcon icon={faVolumeHigh} size="2px" />
        </i>
      </span>
      <div className="Main_date">
        <h1>2024.09.07</h1>
        <p>saturday</p>
      </div>
      <img className="mainImage" src={mainImage} alt="Wedding" />
      <div className="mainText">
        <p>현기환 · 김다슬</p>
        <p>
          2024 9월 7일 토요일 오후 12시 20분 <br /> 가천컨벤션센터 5층, 컨벤션홀
        </p>
      </div>
    </div>
  );
};

export default Wrapper;
