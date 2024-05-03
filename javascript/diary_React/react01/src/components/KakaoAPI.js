import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

const KakaoAPI = () => {
  return (
    <Map
      center={{ lat: 37.4497253, lng: 127.127107 }}
      style={{ width: "100%", height: "400px" }}
      level={3}
    >
      <MapMarker
        position={{ lat: 37.4497253, lng: 127.127107 }}
        level={3}
      ></MapMarker>
    </Map>
  );
};

export default KakaoAPI;
