import React, { useEffect, useState } from "react";
import {
  RiDashboard3Line,
  RiDropLine,
  RiMapPinLine,
  RiSearchLine,
  RiSunFill,
  RiTempColdLine,
  RiWindyLine,
} from "react-icons/ri";
import { weatherIcons } from "./weatherIcons";

function App() {
  const [weather, setWeather] = useState(null);

  const apiKey = `API_KEY`;
  const city = "Manila";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,
        );

        if (!response.ok) throw new Error("city not found");
        const data = await response.json();
        setWeather(data);
        console.log(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between px-6 sm:px-6 py-4">
        <div className="text-xl sm:text-2xl font-bold text-white ">
          ⛅Weather App
        </div>

        <button className="p-2 rounded-lg hover:bg-gray-800 text-xl sm:text-2xl">
          <RiSunFill />
        </button>
      </nav>

      <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          How's the sky looking today?
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-md">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 z-10 pointer-events-none">
              <RiSearchLine />
            </span>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 bg-zinc-900 backdrop-blur-md border border-white/10  rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-md transition"
              placeholder="Search..."
            />
          </div>
          <button className="w-full sm:w-auto bg-zinc-600 hover:bg-zinc-500 rounded-lg px-5 py-2 transition shadow-md cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="px-4 mt-8 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
          <div className="md:col-span-2 bg-zinc-900 backdrop-blur-md border border-white/10 p-4 rounded-lg space-y-4">
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2 min-w-0">
                <span className="bg-zinc-500 p-1.5 sm:p-1.5 rounded-lg">
                  <RiMapPinLine className="text-lg sm:text-2xl" />
                </span>
                <div>
                  <h4 className="text-md sm:text-lg font-semibold">Manila</h4>
                  <p className="text-xs sm:text-sm text-gray-400">PH</p>
                </div>
              </div>

              <div className="text-right">
                <h4 className="text-md sm:text-lg font-semibold">
                  Tuesday, Apr 28
                </h4>
                <p className="text-xs sm:text-sm text-gray-400">4:39 PM</p>
              </div>
            </div>

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
              <img
                src={weatherIcons.clouds}
                alt="weather-icon"
                className="w-32 h-32 sm:w-40 sm:h-40"
              />
              <div className="flex flex-col items-center">
                <h1 className="text-5xl sm:text-7xl font-bold">
                  40<span className="text-2xl align-top">°C</span>
                </h1>
                <h3 className="text-base sm:text-lg font-semibold">Clouds</h3>
                <h3 className="text-sm text-gray-400">Few Clouds</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/10">
                <RiTempColdLine className="text-xl sm:text-2xl text-gray-200" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-gray-400">Feels Like</span>
                  <span className="text-lg font-semibold">42°C</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/10">
                <RiDropLine className="text-xl sm:text-2xl text-gray-200" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-gray-400">Humidity</span>
                  <span className="text-lg font-semibold">78%</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/10">
                <RiWindyLine className="text-xl sm:text-2xl text-gray-200" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-gray-400">Wind</span>
                  <span className="text-lg font-semibold">12 km/h</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/10">
                <RiDashboard3Line className="text-xl sm:text-2xl text-gray-200" />
                <div className="flex flex-col leading-tight">
                  <span className="text-xs text-gray-400">Pressure</span>
                  <span className="text-lg font-semibold">1023 hPa</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 backdrop-blur-md border border-white/10 p-4 rounded-lg">
            Forecast Content
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
