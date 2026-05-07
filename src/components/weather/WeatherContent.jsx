import { WeatherCard, HourlyForecast, WeeklyForecast } from "@/components"

function WeatherContent({ weather, forecast }) {
  return (
    <div className="px-4 mt-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl pb-10">
        <div className="flex flex-col gap-4 md:col-span-2">
          <WeatherCard weather={weather} />
          <HourlyForecast forecast={forecast} />
        </div>
        <WeeklyForecast forecast={forecast} />
      </div>
    </div>
  );
}

export default WeatherContent;
