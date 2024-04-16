import React from "react";

const cityName = (city) => {
  switch (city) {
    case "Paris":
      return "파리";
    case "New York":
      return "뉴욕";
    case "Tokyo":
      return "도쿄";
    case "Seoul":
      return "서울";
    case "Jamwon-dong":
      return "잠원동";
  }
};

const WeatherBox = ({ weather }) => {
  return (
    <div className="weatherBox">
      <div>
        <b>도시명 :</b> {weather?.name && cityName(weather.name)}
      </div>
      <div>
        <b>온도 :</b> {Math.floor(weather?.main.temp)} ℃ / <b>습도 : </b>
        {weather.main.humidity}％
      </div>
      <div>
        <b>날씨상태 :</b> {weather?.weather[0].description}
      </div>
    </div>
  );
};

export default WeatherBox;
