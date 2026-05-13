import {
  HourlyForecastSkeleton,
  WeatherCardSkeleton,
  WeeklyForecastSkeleton,
} from "@/components/common/skeletons";

function Skeleton() {
  return (
    <div className="px-4 mt-8 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl pb-10">
        <div className="flex flex-col gap-4 md:col-span-2">
          <WeatherCardSkeleton />
          <HourlyForecastSkeleton />
        </div>
        <WeeklyForecastSkeleton />
      </div>
    </div>
  );
}

export default Skeleton;
