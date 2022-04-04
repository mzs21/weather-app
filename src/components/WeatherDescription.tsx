import React from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherDescription = () => {
  const weather = React.useContext(WeatherContext);

  let weatherDescription = weather.weather[0].description;

  return (
    <p className="text-sm text-center font-bold">
      {weatherDescription.toUpperCase()}
    </p>
  );
};

export default WeatherDescription;
