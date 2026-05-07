import { useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export default function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full max-w-md"
    >
      <div className="relative w-full">
        <span className="absolute inset-y-0 left-0 flex items-center pl-4 z-10 pointer-events-none">
          <RiSearchLine />
        </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-zinc-900 backdrop-blur-md border border-white/10  rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none shadow-md transition"
          placeholder="Search..."
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-zinc-600 hover:bg-zinc-500 rounded-lg px-5 py-2 transition shadow-md cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
