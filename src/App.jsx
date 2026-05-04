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
import { weatherIcons } from "./utils/weatherIcons";
import SearchBar from "./components/SearchBar";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

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

  const hourlyData = [
    { time: "6 AM", icon: weatherIcons.clear, temp: 30 },
    { time: "7 AM", icon: weatherIcons.clouds, temp: 31 },
    { time: "8 AM", icon: weatherIcons.rain, temp: 35 },
    { time: "9 AM", icon: weatherIcons.atmosphere, temp: 33 },
    { time: "10 AM", icon: weatherIcons.snow, temp: 27 },
    { time: "11 AM", icon: weatherIcons.thunderstorm, temp: 26 },
    { time: "12 PM", icon: weatherIcons.drizzle, temp: 29 },
    { time: "1 PM", icon: weatherIcons.clear, temp: 42 },
  ];

  const weeklyData = [
    { name: "Mon", icon: weatherIcons.clear, high: 35, low: 24 },
    { name: "Tue", icon: weatherIcons.clouds, high: 31, low: 22 },
    { name: "Wed", icon: weatherIcons.rain, high: 27, low: 21 },
    { name: "Thu", icon: weatherIcons.atmosphere, high: 34, low: 23 },
    { name: "Fri", icon: weatherIcons.snow, high: 30, low: 22 },
    { name: "Sat", icon: weatherIcons.thunderstorm, high: 26, low: 20 },
    { name: "Sun", icon: weatherIcons.drizzle, high: 33, low: 23 },
  ];

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

      <div className="px-4 mt-8 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl pb-10">
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="bg-zinc-900 backdrop-blur-md border border-white/10 p-4 rounded-lg space-y-4">
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

            <div className="bg-zinc-900 backdrop-blur-md border border-white/10 rounded-lg p-4 space-y-4">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold">
                Hourly Forecast
              </h2>

              <div className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory scroll-px-4 -mx-4">
                <div className="flex gap-2 px-4">
                  {hourlyData.map((hour, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center min-w-24 snap-start rounded-lg p-3 bg-white/5 border border-white/10 transition-all duration-300 ease-out will-change-transform hover:bg-white/10"
                    >
                      <span className="text-xs text-gray-400">{hour.time}</span>
                      <img src={hour.icon} alt="weather-icon" className="" />
                      <span className="text-sm font-semibold">
                        {hour.temp}
                        <span className="text-xs align-top">°C</span>
                      </span>
                    </div>
                  ))}

                  <div className="min-w-2 shrink-0" />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 backdrop-blur-md border border-white/10 p-4 rounded-lg space-y-4">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold">
              7-Day Forecast
            </h2>

            {weeklyData.map((day) => (
              <div
                key={day.name}
                className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02]"
              >
                <div className="flex flex-col gap-1 text-sm font-semibold">
                  <span className="text-sm w-10">{day.name}</span>
                  <span className="text-xs text-gray-400">Mostly cloudy</span>
                </div>
                <img src={day.icon} alt="weather-icon" className="w-10 h-10" />
                <div className="flex flex-col gap-2 text-sm font-semibold leading-3">
                  <span>{day.high}°C</span>
                  <span className="text-gray-400">{day.low}°C</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
