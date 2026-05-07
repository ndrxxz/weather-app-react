import atmosphere from "../assets/svg/atmosphere.svg";
import clear from "../assets/svg/clear.svg";
import clouds from "../assets/svg/clouds.svg";
import drizzle from "../assets/svg/drizzle.svg";
import rain from "../assets/svg/rain.svg";
import snow from "../assets/svg/snow.svg";
import thunderstorm from "../assets/svg/thunderstorm.svg";

export const weatherIcons = {
  atmosphere: atmosphere,
  clear: clear,
  clouds: clouds,
  drizzle: drizzle,
  rain: rain,
  snow: snow,
  thunderstorm: thunderstorm,
};

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