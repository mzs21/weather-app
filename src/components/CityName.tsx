import React from "react";
import WeatherContext from "../context/WeatherContext";

const CityName = () => {
  const weather = React.useContext(WeatherContext);

  let weatherName = weather.name;
  let weatherCountry = weather.sys.country;

  return (
    <h2 className="cityName">
      <span>{weatherName}</span>
      <sup>{weatherCountry}</sup>
    </h2>
  );
};

export default CityName;
