import React from "react";
import WeatherContext from "../context/WeatherContext";

const Info = () => {
  const weather = React.useContext(WeatherContext);

  return (
    <div className="info">
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
        className="city-icon"
      />
      <p>{weather.weather[0].description}</p>
    </div>
  );
};

export default Info;
