import { useEffect, useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

interface SearchProp {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: SearchProp) {
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (input.trim()) {
      onSearch(input.trim());
      setInput("");
    }
  }

  // Auto focus the search input when page loads
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
          ref={inputRef}
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          className="w-full pl-10 pr-4 py-2 bg-zinc-900 light:bg-white backdrop-blur-md border border-white/10 light:border-slate-200  rounded-lg text-white light:text-black placeholder-zinc-400 focus:ring-2 focus:ring-zinc-400 focus:outline-none shadow-md transition"
          placeholder="Search..."
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-zinc-600 hover:bg-zinc-500 light:text-white rounded-lg px-5 py-2 transition shadow-md cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
