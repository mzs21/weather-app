import React from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherIcon = () => {
  const weather = React.useContext(WeatherContext);

  let weatherIcon = weather.weather[0].icon;
   let weatherDescription = weather.weather[0].description;
  return (
    <div>
      <img
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={weatherDescription}
      />
    </div>
  );
};

export default WeatherIcon;
