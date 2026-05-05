import { weatherIcons } from "../utils/weatherIcons";

export default function Weeklyforecast() {
  const weeklyData = [
    { name: "Mon", icon: weatherIcons.clear, high: 35, low: 24 },
    { name: "Tue", icon: weatherIcons.clouds, high: 31, low: 22 },
    { name: "Wed", icon: weatherIcons.rain, high: 27, low: 21 },
    { name: "Thu", icon: weatherIcons.atmosphere, high: 34, low: 23 },
    { name: "Fri", icon: weatherIcons.snow, high: 30, low: 22 },
    { name: "Sat", icon: weatherIcons.thunderstorm, high: 26, low: 20 },
    { name: "Sun", icon: weatherIcons.drizzle, high: 33, low: 23 },
  ];

  return (
    <div className="bg-zinc-900 backdrop-blur-md border border-white/10 p-4 rounded-lg space-y-4">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold">
        7-Day Forecast
      </h2>

      {weeklyData.map((day) => (
        <div
          key={day.name}
          className="flex items-center justify-between rounded-lg px-3 py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02]"
        >
          <div className="flex flex-col gap-1 text-sm font-semibold">
            <span className="text-sm w-10">{day.name}</span>
            <span className="text-xs text-gray-400">Mostly cloudy</span>
          </div>
          <img src={day.icon} alt="weather-icon" className="w-10 h-10" />
          <div className="flex flex-col gap-2 text-sm font-semibold leading-3">
            <span>{day.high}°C</span>
            <span className="text-gray-400">{day.low}°C</span>
          </div>
        </div>
      ))}
    </div>
  );
}
