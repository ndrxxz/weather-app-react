export default function EmptyState({ img, desc }) {
  return (
    <div className="flex flex-col items-center p-6">
      <img
        src={img}
        alt="empty-state"
        className="w-80 h-70 sm:w-100 sm:h-100"
      />
      <p className="text-gray-500 text-center text-lg sm:text-2xl">{desc}</p>
    </div>
  );
}
