import React from "react";

function HourlyForecastSkeleton() {
  return (
    <div className="bg-zinc-900 light:bg-white backdrop-blur-md border border-white/10 light:border-slate-200 p-4 rounded-lg space-y-4">
      <div className="h-6 w-36 sm:h-7 sm:w-40 rounded animate-pulse bg-zinc-700 light:bg-slate-200" />

      <div className="overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing scroll-smooth snap-x snap-mandatory scroll-px-4 -mx-4">
        <div className="flex gap-2 px-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 min-w-24 snap-start rounded-lg p-3 bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200"
            >
              {/* Time */}
              <div className="h-3 w-8 rounded bg-zinc-700/70 light:bg-slate-200 animate-pulse" />

              {/* Weather icon circle */}
              <div className="rounded-full p-2">
                <div className="w-16 h-16 rounded-full bg-zinc-700 light:bg-slate-200 animate-pulse" />
              </div>

              {/* Temp */}
              <div className="h-4 w-10 rounded bg-zinc-700 light:bg-slate-300 animate-pulse" />
            </div>
          ))}

          <div className="min-w-2 shrink-0" />
        </div>
      </div>
    </div>
  );
}

export default HourlyForecastSkeleton;
