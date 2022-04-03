import React from "react";
import WeatherContext from "../context/WeatherContext";

const Info = () => {
  const weather = React.useContext(WeatherContext);

  let weatherIcon = weather.weather[0].icon;
  let weatherDescription = weather.weather[0].description;

  return (
    <div className="info">
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={weatherDescription}
        className="city-icon"
      />
      <p>{weatherDescription}</p>
    </div>
  );
};

export default Info;
