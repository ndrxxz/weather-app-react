import React, { useEffect, useState } from "react";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

function Navbar() {
  const [hasChanged, setHasChanged] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });

  useEffect(() => {
    if (hasChanged) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [hasChanged]);

  const handleToggle = () => setHasChanged((prev) => !prev);

  return (
    <nav className="light:bg-white border-b border-white/10 light:border-slate-200 flex items-center justify-between px-6 sm:px-6 py-4 mb-6">
      <div className="text-xl sm:text-2xl font-bold text-white light:text-black">
        ⛅Weather App
      </div>

      <button
        onClick={handleToggle}
        className="p-2 rounded-lg hover:bg-zinc-800 light:hover:bg-zinc-300 text-xl sm:text-2xl"
      >
        {hasChanged ? <RiMoonFill /> : <RiSunFill />}
      </button>
    </nav>
  );
}

export default Navbar;