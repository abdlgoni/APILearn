import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { tooltips } from "../../data/tooltips";

export default function InfoTooltip({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const data = tooltips[id] || {
    title: "Informasi",
    description: "Penjelasan tidak tersedia",
  };

  return (
    <div
      className="relative inline-block cursor-help align-middle ml-1"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      <HelpCircle className="w-4 h-4 text-black hover:text-brand-purple stroke-[3.5px] transition-colors" />

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 p-4 bg-brand-blue neo-border-sm neo-shadow-sm z-50 text-xs text-black font-sans text-left">
          <h5 className="font-black uppercase mb-1 border-b-none pb-1 text-brand-purple-dark text-[11px]">
            {data.title}
          </h5>
          <p className="font-bold leading-relaxed">{data.description}</p>
          <div className="absolute bottom-full left-0 border-8 border-transparent border-b-brand-blue mt-[-1px]" />
        </div>
      )}
    </div>
  );
}
