import axios, { AxiosResponse } from "axios";
import { WeatherData } from "../Interface";

const URL: string = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY: string = "c5c1bb4d21d97b8bcf8813351c9fbcc5";

const fetchWeather = async (query: string) => {
  const response: AxiosResponse<WeatherData, object> = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });

  return response.data;
};

export default fetchWeather;
