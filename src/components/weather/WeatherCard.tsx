import { weatherIcons, getWeatherType } from "@/utils";
import {
  RiDashboard3Line,
  RiDropLine,
  RiMapPinLine,
  RiTempColdLine,
  RiWindyLine,
} from "react-icons/ri";

const StatCard = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 light:bg-slate-50 border border-white/10 light:border-slate-200 transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:scale-[1.02] hover:bg-white/10 light:hover:bg-slate-100">
      <Icon className="text-xl sm:text-2xl text-zinc-200 light:text-zinc-600" />
      <div className="flex flex-col leading-tight">
        <span className="text-xs text-zinc-500">
          {label}
        </span>
        <span className="text-lg font-semibold">
          {value}
        </span>
      </div>
    </div>
  );
};

export default function WeatherCard({ weather }) {
  if (!weather) return null;

  const {
    main: { feels_like, humidity, pressure, temp },
    name: city,
    sys: { country },
    weather: [{ id, description, main }],
    wind: { speed },
  } = weather;

  const now = new Date();
  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  const time = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const weatherType = getWeatherType(id);
  const weatherIcon = weatherIcons[weatherType];

  return (
    <div className="bg-zinc-900 light:bg-white backdrop-blur-md border border-white/10 light:border-slate-200 p-4 rounded-lg space-y-4">
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <span className="bg-zinc-700 light:bg-slate-100 p-1.5 sm:p-1.5 rounded-lg">
            <RiMapPinLine className="text-lg sm:text-2xl" />
          </span>
          <div>
            <h4 className="text-md sm:text-lg font-semibold">{city}</h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              {country}
            </p>
          </div>
        </div>

        <div className="text-right">
          <h4 className="text-md sm:text-lg font-semibold">{formattedDate}</h4>
          <p className="text-xs sm:text-sm text-zinc-400">
            {time}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="light:bg-sky-100 rounded-full p-4 flex items-center justify-center">
          <img
            src={weatherIcon}
            alt={weatherType}
            className="w-32 h-32 sm:w-40 sm:h-40"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl sm:text-7xl font-bold">
            {`${Math.round(temp)}`}
            <span className="text-2xl align-top">°C</span>
          </h1>
          <h3 className="text-base sm:text-lg font-semibold">{main}</h3>
          <h3 className="text-sm text-zinc-400 capitalize">
            {description}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        <StatCard
          icon={RiTempColdLine}
          label="Feels Like"
          value={`${Math.round(feels_like)}°C`}
        />
        <StatCard icon={RiDropLine} label="Humidity" value={`${humidity}%`} />
        <StatCard icon={RiWindyLine} label="Wind" value={`${speed} km/h`} />
        <StatCard
          icon={RiDashboard3Line}
          label="Pressure"
          value={`${pressure} hPa`}
        />
      </div>
    </div>
  );
}
