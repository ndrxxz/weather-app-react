import { weatherIcons } from "../utils/weatherIcons";
import { getWeatherType } from "../utils/getWeatherType";

export default function HourlyForecast({ forecast }) {
  if (!forecast) return null;

  const hourlyData = forecast.list.slice(0, 8);

  return (
    <div className="bg-zinc-900 backdrop-blur-md border border-white/10 rounded-lg p-4 space-y-4">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold">
        Hourly Forecast
      </h2>

      <div className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory scroll-px-4 -mx-4">
        <div className="flex gap-2 px-4">
          {hourlyData.map((hour) => {
            const time = new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
              hour: "numeric",
              hour12: true,
            });

            const temp = hour.main.temp;
            const weatherType = getWeatherType(hour.weather[0].id);
            const weatherIcon = weatherIcons[weatherType];

            return (
              <div
                key={hour.dt}
                className="flex flex-col items-center min-w-24 snap-start rounded-lg p-3 bg-white/5 border border-white/10 transition-all duration-300 ease-out will-change-transform hover:bg-white/10"
              >
                <span className="text-xs text-gray-400">{time}</span>
                <img src={weatherIcon} alt={weatherType} />
                <span className="text-sm font-semibold">
                  {`${Math.round(temp)}`}
                  <span className="text-xs align-top">°C</span>
                </span>
              </div>
            );
          })}

          <div className="min-w-2 shrink-0" />
        </div>
      </div>
    </div>
  );
}
