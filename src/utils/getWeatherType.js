export function getWeatherType(code) {
  if (code >= 200 && code < 300) return "thunderstorm";
  if (code >= 300 && code < 400) return "drizzle";
  if (code >= 500 && code < 600) return "rain";
  if (code >= 600 && code < 700) return "snow";
  if (code >= 700 && code < 800) return "atmosphere";
  if (code === 800) return "clear";
  if (code > 800) return "clouds";

  return "clear";
}