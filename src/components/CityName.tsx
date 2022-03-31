import React from "react";
import WeatherContext from "../context/WeatherContext";

const CityName = () => {
  const weather = React.useContext(WeatherContext);

  return (
    <h2 className="cityName">
      <span>{weather.name}</span>
      <sup>{weather.sys.country}</sup>
    </h2>
  );
};

export default CityName;
