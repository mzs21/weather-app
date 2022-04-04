import React from "react";
import WeatherContext from "../context/WeatherContext";

const CityTemp = () => {
  const weather = React.useContext(WeatherContext);

  let weatherMainTemp = weather.main.temp;

  return (
    <div className="text-4xl font-black">
      {weatherMainTemp}
      <sup>&deg;C</sup>
    </div>
  );
};

export default CityTemp;
