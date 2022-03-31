import React from "react";
import WeatherContext from "../context/WeatherContext";

const CityTemp = () => {
  const weather = React.useContext(WeatherContext);

  return (
    <div className="city-temp">
      {weather.main.temp}
      <sup>&deg;C</sup>
    </div>
  );
};

export default CityTemp;
