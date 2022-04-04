import React from "react";
import WeatherContext from "../context/WeatherContext";

const CityName = () => {
  const weather = React.useContext(WeatherContext);

  let weatherName = weather.name;
  let weatherCountry = weather.sys.country;

  return (
    <h2 className="space-x-2">
      <span className="text-xl font-black ">{weatherName}</span>
      <sup className="text-lg bg-orange-600 font-bold text-white rounded-lg border-orange-600 px-3">
        {weatherCountry}
      </sup>
    </h2>
  );
};

export default CityName;
