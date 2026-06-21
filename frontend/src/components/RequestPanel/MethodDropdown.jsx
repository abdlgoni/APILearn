import { ChevronDown } from "lucide-react";

export default function MethodDropdown({ value, onChange }) {
  return (
    <div className="relative min-w-[110px]">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="neo-border-sm neo-shadow-sm neo-transtion duration-100 w-full appearance-none pr-8 py-2.5 pl-3 font-mono font-black text-xs md:text-sm cursor-pointer focus:outline-none focus:ring-0 bg-white text-black"
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none w-4 h-4 text-black stroke-[3.5px]" />
    </div>
  );
}
