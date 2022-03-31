import { useState } from "react";
import fetchWeather from "./api/fetchWeather";
import CityName from "./components/CityName";
import CityTemp from "./components/CityTemp";
import Info from "./components/Info";
import Input from "./components/Input";
import InputContext from "./context/InputContext";
import WeatherContext from "./context/WeatherContext";
import { WeatherData } from "./Interface";

function App() {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData>();

  console.log(weather);

  const queryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const search = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Checking if the key pressed is Enter

      const data = await fetchWeather(query); // Calling the fetchWeather function

      setWeather(data); // Passing the data to the setWeather function
      setQuery(""); // Clearing the input field
    }
  };

  let InputContextProvider = (
    <InputContext.Provider value={{ query, queryChange, search }}>
      <Input />
    </InputContext.Provider>
  );

  if (!weather) {
    // Checking if the weather data is not available
    return (
      <>
        {InputContextProvider}
        <div>{`Please type city name`}</div>
      </>
    );
  } else
    return (
      <div className="main-container">
        {InputContextProvider}

        {weather.main && (
          <div className="city">
            <WeatherContext.Provider value={weather}>
              <CityName />
              <CityTemp />
              <Info />
            </WeatherContext.Provider>
          </div>
        )}
      </div>
    );
}

export default App;
