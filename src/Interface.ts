export interface InputData {
  query: string;
  queryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: (e: React.KeyboardEvent<HTMLInputElement>) => Promise<void>;
}

export interface WeatherData {
  coord: Coord;
  base: string;
  main: Main;
  visibility: number;
  weather: Weather[];
  wind: Wind;
  rain: Rain;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Coord {
  lon: number;
  lat: number;
}

interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface Rain {
  "1h": number;
}

interface Clouds {
  all: number;
}

interface Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}
