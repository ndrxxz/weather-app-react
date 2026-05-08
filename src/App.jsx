import { useState } from "react";
import { UseWeather } from "@/hooks";
import { searchNotFound, searchImg } from "@/assets";
import { EmptyState, Navbar, Hero, WeatherContent } from "@/components";

function App() {
  const [city, setCity] = useState("");
  const { weather, forecast, notFound } = UseWeather(city);

  return (
    <div className="min-h-screen bg-zinc-950 light:bg-slate-100 text-white light:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero setCity={setCity} />

      {/* Content */}
      {notFound ? (
        <EmptyState img={searchNotFound} desc={"City not found."} />
      ) : weather && forecast ? (
        <WeatherContent weather={weather} forecast={forecast} />
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