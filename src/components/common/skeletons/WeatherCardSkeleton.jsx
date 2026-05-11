function WeatherCardSkeleton() {
  return (
    <div className="bg-zinc-900 backdrop-blur-md border border-white/10 p-4 rounded-lg space-y-4">
      {/* Top Row */}
      <div className="flex justify-between items-center gap-4">
        <div className="flex items-center gap-2 min-w-0">
          <div className="bg-zinc-700 p-1.5 sm:p-1.5 rounded-lg">
            <div className="w-6 h-6 rounded animate-pulse bg-zinc-600" />
          </div>
          <div className="space-y-1.5">
            <div className="h-5 w-28 rounded bg-zinc-700 animate-pulse" />
            <div className="h-3.5 w-20 rounded bg-zinc-700/70 animate-pulse" />
          </div>
        </div>
        <div className="text-right space-y-1.5">
          <div className="h-5 w-24 rounded bg-zinc-700 animate-pulse ml-auto" />
          <div className="h-3.5 w-14 rounded bg-zinc-700/70 animate-pulse ml-auto" />
        </div>
      </div>

      {/* Middle: Icon + Temp */}
      <div className="flex flex-col items-center sm:flex-row sm:justify-between">
        <div className="rounded-full p-4 flex items-center justify-center">
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-zinc-700 animate-pulse" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-36 rounded-lg bg-zinc-700 animate-pulse" />
          <div className="h-5 w-24 rounded bg-zinc-700 animate-pulse" />
          <div className="h-4 w-28 rounded bg-zinc-700/70 animate-pulse" />
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/7 rounded-xl p-3.5 flex items-center gap-2.5"
          >
            <div className="w-8 h-8 rounded-lg bg-zinc-700 animate-pulse shrink-0" />
            <div className="flex-1 space-y-1.5">
              <div className="h-3 w-14 rounded bg-zinc-700/70 animate-pulse" />
              <div className="h-4 w-20 rounded bg-zinc-700 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherCardSkeleton;