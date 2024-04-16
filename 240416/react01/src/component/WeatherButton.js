import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ getCurrentLocation, cities, setCity }) => {
  return (
    <div className="weatherButton">
      <Button
        className="cityName"
        onClick={() => getCurrentLocation()}
        variant="warning"
      >
        Current Location
      </Button>
      {cities.map((city, idx) => (
        <Button className="cityName" onClick={() => setCity(city)} key={idx}>
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
