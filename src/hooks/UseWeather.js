import React, { useEffect, useState } from "react";

function UseWeather(city) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        setNotFound(false);

        const [weatherRes, forecastRes] = await Promise.all([
          fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
          ),
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`,
          ),
        ]);

        if (!weatherRes.ok || !forecastRes.ok)
          throw new Error("city not found");

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        setWeather(weatherData);
        setForecast(forecastData);
      } catch (err) {
        setWeather(null);
        setForecast(null);
        setNotFound(true);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, forecast, notFound };
}

export default UseWeather;