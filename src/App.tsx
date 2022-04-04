import { useState } from "react";
import fetchWeather from "./api/fetchWeather";
import CityName from "./components/CityName";
import CityTemp from "./components/CityTemp";
import Info from "./components/Info";
import Input from "./components/Input";
import InputContext from "./context/InputContext";
import WeatherContext from "./context/WeatherContext";
import "./index.css";
import { WeatherData } from "./Interface";

function App() {
  const [query, setQuery] = useState<string>("");
  const [weather, setWeather] = useState<WeatherData>();

  console.log(weather);

  const queryChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const search = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
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
    return <div className="container">{InputContextProvider}</div>;
  } else
    return (
      <div>
        <div className="container ">
          {weather.main && (
            <div className="grid place-items-center gap-y-10">
              <div>{InputContextProvider}</div>

              <WeatherContext.Provider value={weather}>
                <div>
                  <CityName />
                </div>
                <div>
                  <CityTemp />
                </div>
                <div>
                  <Info />
                </div>
              </WeatherContext.Provider>
            </div>
          )}
        </div>
      </div>
    );
}

export default App;
