import { useState } from "react";
import { UseWeather } from "@/hooks";
import { searchNotFound, searchImg } from "@/assets";
import { Hero, WeatherContent } from "@/components/weather";
import { EmptyState } from "@/components/common";
import { Navbar } from "@/components/layout";
import { Skeleton } from "@/components/common/skeletons";

function App() {
  const [city, setCity] = useState("");
  const { weather, forecast, isLoading, isError } = UseWeather(city);

  return (
    <div className="min-h-screen bg-zinc-950 light:bg-slate-100 text-white light:text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero setCity={setCity} />

      {/* Content */}
      {!city ? (
        <EmptyState
          img={searchImg}
          desc="Search for a city to get the current weather and forecast."
        />
      ) : isLoading ? (
        <Skeleton />
      ) : isError ? (
        <EmptyState img={searchNotFound} desc={"City not found."} />
      ) : weather && forecast ? (
        <WeatherContent weather={weather} forecast={forecast} />
      ) : null}
    </div>
  );
}

export default App;
