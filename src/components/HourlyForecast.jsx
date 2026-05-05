import { weatherIcons } from "../utils/weatherIcons";

export default function HourlyForecast() {
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

  return (
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
  );
}
