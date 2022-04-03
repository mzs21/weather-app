import { useState } from "react";
import fetchWeather from "./api/fetchWeather";
import CityName from "./components/CityName";
import CityTemp from "./components/CityTemp";
import Info from "./components/Info";
import Input from "./components/Input";
import InputContext from "./context/InputContext";
import WeatherContext from "./context/WeatherContext";
import { WeatherData } from "./Interface";

// let WeatherValue = {
//   coord: {
//     lon: 0,
//     lat: 0,
//   },
//   weather: [
//     {
//       id: 0,
//       main: "",
//       description: "",
//       icon: "",
//     },
//   ],
//   base: "",
//   main: {
//     temp: 0,
//     feels_like: 0,
//     temp_min: 0,
//     temp_max: 0,
//     pressure: 0,
//     humidity: 0,
//     sea_level: 0,
//     grnd_level: 0,
//   },
//   visibility: 0,
//   wind: {
//     speed: 0,
//     deg: 0,
//     gust: 0,
//   },
//   rain: {
//     "1h": 0,
//   },
//   clouds: {
//     all: 0,
//   },
//   dt: 0,
//   sys: {
//     type: 0,
//     id: 0,
//     country: "",
//     sunrise: 0,
//     sunset: 0,
//   },
//   timezone: 0,
//   id: 0,
//   name: "",
//   cod: 0,
// };

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
