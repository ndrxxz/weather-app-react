import { Scroll } from "@/hooks";
import { weatherIcons, getWeatherType } from "@/utils";

export default function HourlyForecast({ forecast }) {
  const drag = Scroll();

  if (!forecast) return null;

  const hourlyData = forecast.list.slice(0, 8);

  return (
    <div className="bg-zinc-900 light:bg-white backdrop-blur-md border border-white/10 light:border-slate-200 rounded-lg p-4 space-y-4">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold">
        Hourly Forecast
      </h2>

      <div
        ref={drag.ref}
        onMouseDown={drag.onMouseDown}
        onMouseUp={drag.onMouseUp}
        onMouseLeave={drag.onMouseLeave}
        onMouseMove={drag.onMouseMove}
        className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory scroll-px-4 -mx-4"
      >
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
                className="flex flex-col items-center gap-1 min-w-24 snap-start rounded-lg p-3 bg-white/5 light:bg-slate-50 border border-white/10 light:border-slate-200 transition-all duration-300 ease-out will-change-transform hover:bg-white/10 light:hover:bg-slate-100"
              >
                <span className="text-xs text-zinc-400 light:text-zinc-600">
                  {time}
                </span>
                <div className="light:bg-sky-100 rounded-full p-2 flex items-center justify-center">
                  <img src={weatherIcon} alt={weatherType} />
                </div>
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
