import { useState } from "react";
import fetchWeather from "./api/fetchWeather";
import { WeatherData } from "./Interface";

function App() {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData>();

  const queryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Checking if the key pressed is Enter

      const data = await fetchWeather(query); // Calling the fetchWeather function

      setWeather(data); // Passing the data to the setWeather function
      setQuery(""); // Clearing the input field

      // console.log(data);
    }
  };

  return (
    <div className="main-container">
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={queryChange}
        onKeyPress={search}
      />

      {weather?.main && (
        <div className="city">
          <h2 className="cityName">
            <span>{weather?.name}</span>
            <sup>{weather?.sys.country}</sup>
          </h2>

          <div className="city-temp">
            {weather?.main.temp}
            <sup>&deg;C</sup>
          </div>

          <div className="info">
            <img
              src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
              alt={weather?.weather[0].description}
              className="city-icon"
            />
            <p>{weather?.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
