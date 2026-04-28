import React, { useEffect, useState } from "react";
import { RiMapPinLine, RiSearchLine, RiSunFill } from "react-icons/ri";
import { weatherIcons } from "./weatherIcons";

function App() {
  const [weather, setWeather] = useState(null);

  const apiKey = `97ab2f263763b438f6208e1743a484fe`;
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
              className="w-full pl-10 pr-4 py-2 bg-gray-900/60 backdrop-blur-md border border-white/10  rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-md transition"
              placeholder="Search..."
            />
          </div>
          <button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 rounded-lg px-5 py-2 transition shadow-md cursor-pointer">
            Search
          </button>
        </div>
      </div>

      <div className="px-4 mt-8 flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl">
          <div className="md:col-span-2 bg-gray-900/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
            <div className="flex justify-between items-center gap-4">
              <div className="flex items-center gap-2 min-w-0">
                <span className="bg-blue-500 p-1.5 sm:p-1.5 rounded-lg">
                  <RiMapPinLine className="text-lg sm:text-2xl" />
                </span>
                <div>
                  <h4 className="text-md sm:text-lg font-semibold">Manila</h4>
                  <p className="text-xs sm:text-sm text-gray-400">PH</p>
                </div>
              </div>

              <div className="text-right">
                <h4 className="text-md sm:text-lg font-semibold">Tuesday, Apr 28</h4>
                <p className="text-xs sm:text-sm text-gray-400">4:39 PM</p>
              </div>
            </div>

            {/* complete the weather data */}
            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
              <img src={weatherIcons.clouds} alt="weather-icon" className="" />
              <div className="">
                <h1 className="">40℃</h1>
                <h3 className="">Clouds</h3>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/60 backdrop-blur-md border border-white/10 p-4 rounded-lg">
            Forecast Content
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
