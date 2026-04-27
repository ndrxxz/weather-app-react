import React, { useEffect, useState } from "react";
import { RiSunFill } from "react-icons/ri";

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
    <div className="min-h-screen bg-black text-white p-6">
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="text-3xl font-bold text-white ">Weather App</div>

        <button className="p-2 rounded-lg hover:bg-gray-800 text-2xl">
          <span className="text-white">
            <RiSunFill />
          </span>
        </button>
      </nav>
    </div>
  );
}

export default App;
