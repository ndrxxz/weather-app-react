import { weatherIcons, getWeatherType } from "@/utils";

export default function Weeklyforecast({ forecast }) {
  if (!forecast) return null;

  const weeklyData = forecast.list.filter((item) =>
    item.dt_txt.includes("12:00:00"),
  );

  return (
    <div className="bg-zinc-900 light:bg-white backdrop-blur-md border border-white/10 light:border-slate-200 p-4 rounded-lg space-y-6">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold">
        5-Day Forecast
      </h2>

      <div className="flex flex-col gap-5">
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
              className="flex items-center justify-between rounded-lg px-3 py-3 bg-white/5 light:bg-slate-50 border border-white/10 light:border-slate-200 hover:bg-white/10 light:hover:bg-slate-100 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02]"
            >
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-md w-10 font-semibold">{date}</span>
                <span className="text-xs text-zinc-400 capitalize">
                  {description}
                </span>
              </div>
              <div className="light:bg-sky-100 rounded-full p-2 flex items-center justify-center">
                <img src={weatherIcon} alt={weatherType} className="w-12 h-12" />
              </div>
              <div className="flex flex-col gap-2 text-md leading-3">
                <span className="font-semibold">{`${Math.round(temp)}`}°C</span>
                <span className="text-zinc-400 text-xs text-right">
                  {`${Math.round(temp_min)}`}°C
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
