import React from "react";

function WeeklyForecastSkeleton() {
  return (
    <div className="bg-zinc-900 light:bg-white backdrop-blur-md border border-white/10 light:border-slate-200 p-4 rounded-lg space-y-4">
      <div className="h-6 w-36 sm:h-7 sm:w-40 rounded animate-pulse bg-zinc-700 light:bg-slate-200" />

      <div className="flex flex-col gap-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg px-3 py-3 bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200"
          >
            {/* Day + description */}
            <div className="flex flex-col gap-1">
              <div className="h-4 w-10 rounded bg-zinc-700 light:bg-slate-300 animate-pulse" />
              <div className="h-3 w-16 rounded bg-zinc-700/70 light:bg-slate-200 animate-pulse" />
            </div>

            {/* Weather icon circle */}
            <div className="rounded-full p-2">
              <div className="w-12 h-12 rounded-full bg-zinc-700 light:bg-slate-200 animate-pulse" />
            </div>

            {/* Temp + min temp */}
            <div className="flex flex-col gap-1 items-end">
              <div className="h-4 w-10 rounded bg-zinc-700 light:bg-slate-300 animate-pulse" />
              <div className="h-3 w-8 rounded bg-zinc-700/70 light:bg-slate-200 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyForecastSkeleton;
