import React from "react";
import { SearchBar } from "@/components";

function Hero({ setCity }) {
  return (
    <div className="flex flex-col items-center gap-6 sm:gap-8 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
        How's the sky looking today?
      </h1>
      <SearchBar onSearch={setCity} />
    </div>
  );
}

export default Hero;