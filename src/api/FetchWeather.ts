export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: { speed: number };
}

export interface ForecastData {
  list: {
    dt: number;
    main: { temp: number };
    weather: { description: string; icon: string }[];
    dt_txt: string;
  }[];
}

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeather = async (city: string): Promise<WeatherData> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
  );

  if (!res.ok) throw new Error("city not found");

  return res.json();
};

export const fetchForecast = async (city: string): Promise<ForecastData> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
  );

  if (!res.ok) throw new Error("city not found");

  return res.json();
};
