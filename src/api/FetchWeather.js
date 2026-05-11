const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export const fetchWeather = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
  );

  if (!res.ok) throw new Error("city not found");

  return res.json();
};

export const fetchForecast = async (city) => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
  );

  if (!res.ok) throw new Error("city not found");

  return res.json();
};