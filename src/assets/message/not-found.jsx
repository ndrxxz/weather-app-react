import notFound from "../empty-state/not-found.svg";

export default function search() {
  return (
    <div className="flex flex-col items-center mt-10">
      <img src={notFound} alt="not search yet" className="w-100 h-100" />
      <p className="text-gray-500 text-center text-2xl font-semibold">
        City not found.
      </p>
    </div>
  );
}
