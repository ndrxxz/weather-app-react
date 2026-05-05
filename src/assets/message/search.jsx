import searchImg from "../empty-state/search.svg";

export default function search() {
  return (
    <div className="flex flex-col items-center mt-10">
      <img src={searchImg} alt="not search yet" className="w-100 h-100" />
      <p className="text-gray-500 text-center text-2xl font-semibold">
        Search for a city to get the current weather and forecast.
      </p>
    </div>
  );
}
