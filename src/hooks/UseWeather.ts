import { fetchForecast, fetchWeather } from "@/api";
import { useQueries } from "@tanstack/react-query";

function UseWeather(city: string) {
  const [weatherQuery, forecastQuery] = useQueries({
    queries: [
      {
        queryKey: ["weather", city],
        queryFn: () => fetchWeather(city),
        enabled: !!city,
      },
      {
        queryKey: ["forecast", city],
        queryFn: () => fetchForecast(city),
        enabled: !!city,
      },
    ],
  });

  return {
    weather: weatherQuery.data,
    forecast: forecastQuery.data,
    isLoading: weatherQuery.isLoading || forecastQuery.isLoading,
    isError: weatherQuery.isError || forecastQuery.isError,
  };
}

export default UseWeather;