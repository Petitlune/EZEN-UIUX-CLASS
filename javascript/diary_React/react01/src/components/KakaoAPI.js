import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoAPI = () => {
  return (
    <Map
      center={{ lat: 37.44949723628217, lng: 127.12712109088898 }}
      style={{ width: "400px", height: "400px" }}
      level={3}
    >
      <MapMarker
        onClick={() => window.open("https://place.map.kakao.com/12653045")}
        position={{ lat: 37.4495823628217, lng: 127.12718 }}
        level={3}
        image={{
          src: "./img/MarkerHeart.png",
          size: {
            width: 54,
            height: 54,
          },
        }}
      ></MapMarker>
    </Map>
  );
};

export default KakaoAPI;
