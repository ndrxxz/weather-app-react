import { useTheme } from "@/context/ThemeContext";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="light:bg-white border-b border-white/10 light:border-slate-200 flex items-center justify-between px-6 sm:px-6 py-4 mb-6">
      <div className="text-xl sm:text-2xl font-bold text-white light:text-black">
        ⛅Weather App
      </div>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-lg hover:bg-zinc-800 light:hover:bg-zinc-300 text-xl sm:text-2xl"
      >
        {isDark ? <RiMoonFill /> : <RiSunFill />}
      </button>
    </nav>
  );
}

export default Navbar;