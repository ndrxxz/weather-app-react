import React, { useEffect, useState } from "react";
import { RiSunFill } from "react-icons/ri";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard.jsx";
import HourlyForecast from "./components/HourlyForecast.jsx";
import WeeklyForecast from "./components/WeeklyForecast.jsx";
import UseWeather from "./hooks/UseWeather.js";
import EmptyState from "./components/EmptyState.jsx";
import searchNotFound from "./assets/svg/not-found.svg";
import searchImg from "./assets/svg/search.svg";

function App() {
  const [city, setCity] = useState("");
  const { weather, forecast, notFound } = UseWeather(city);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 sm:px-6 py-4">
        <div className="text-xl sm:text-2xl font-bold text-white ">
          ⛅Weather App
        </div>

        <button className="p-2 rounded-lg hover:bg-gray-800 text-xl sm:text-2xl">
          <RiSunFill />
        </button>
      </nav>
      

      {/* Hero */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          How's the sky looking today?
        </h1>
        <SearchBar onSearch={setCity} />
      </div>

      {notFound ? (
        <EmptyState img={searchNotFound} desc="City not found." />
      ) : weather && forecast ? (
        <div className="px-4 mt-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl pb-10">
            <div className="flex flex-col gap-4 md:col-span-2">
              <WeatherCard weather={weather} />
              <HourlyForecast forecast={forecast} />
            </div>
            <WeeklyForecast forecast={forecast} />
          </div>
        </div>
      ) : (
        <EmptyState
          img={searchImg}
          desc="Search for a city to get the current weather and forecast."
        />
      )}
    </div>
  );
}

export default App;
