import React, { useEffect, useState } from 'react'

function UseWeather(city) {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      try {
        const [weatherRes, forecastRes] = await Promise.all([
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`),
          fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`),
        ]);

        if (!weatherRes.ok || !forecastRes.ok) throw new Error("city not found");

        const weatherData = await weatherRes.json();
        const forecastData = await forecastRes.json();

        setWeather(weatherData);
        setForecast(forecastData);

        console.log(weatherData);
        console.log(forecastData)
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchWeather();
  }, [city]);

  return { weather, forecast };
}

export default UseWeather