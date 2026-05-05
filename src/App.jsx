import React, { useEffect, useState } from "react";
import { RiSunFill } from "react-icons/ri";
import Search from "./assets/message/search.jsx";
import NotFound from "./assets/message/not-found.jsx";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard.jsx";
import HourlyForecast from "./components/HourlyForecast.jsx";
import WeeklyForecast from "./components/WeeklyForecast";
import UseWeather from "./hooks/UseWeather.js";

function App() {
  const [city, setCity] = useState("");
  const { weather, forecast } = UseWeather(city);

  const handleSearch = (searchedCity) => {
    setCity(searchedCity);
  };

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
        <SearchBar onSearch={handleSearch} />
      </div>

      {!weather && !forecast && (
        <Search />
      )}

      {/* <NotFound /> */}

      {weather && forecast && (
        <div className="px-4 mt-8 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl pb-10">
            <div className="flex flex-col gap-4 md:col-span-2">
              <WeatherCard weather={weather} />
              <HourlyForecast forecast={forecast} />
            </div>
            <WeeklyForecast forecast={forecast} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
