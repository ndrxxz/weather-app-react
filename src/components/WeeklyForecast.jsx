import { weatherIcons } from "../utils/weatherIcons";
import { getWeatherType } from "../utils/getWeatherType";

export default function Weeklyforecast({ forecast }) {
  if (!forecast) return null;

  const weeklyData = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  return (
    <div className="bg-zinc-900 backdrop-blur-md border border-white/10 p-4 rounded-lg space-y-4">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold">
        5-Day Forecast
      </h2>

      {weeklyData.map((week) => {
        const date = new Date(week.dt * 1000).toLocaleDateString("en-US", {
          weekday: "short",
        });

        const description = week.weather[0].description;
        const temp = week.main.temp;
        const temp_min = week.main.temp_min;
        const weatherType = getWeatherType(week.weather[0].id);
        const weatherIcon = weatherIcons[weatherType];

        return (
          <div
            key={week.dt}
            className="flex items-center justify-between rounded-lg px-3 py-4.5 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02]"
          >
            <div className="flex flex-col gap-1 text-sm font-semibold">
              <span className="text-md w-10">{date}</span>
              <span className="text-xs text-gray-400 capitalize">
                {description}
              </span>
            </div>
            <img src={weatherIcon} alt={weatherType} className="w-12 h-12" />
            <div className="flex flex-col gap-2 text-md font-semibold leading-3">
              <span>{`${Math.round(temp)}`}°C</span>
              <span className="text-gray-400 text-xs text-right">
                {`${Math.round(temp_min)}`}°C
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
