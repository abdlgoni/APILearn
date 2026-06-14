import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { tooltipsData } from "../../data/tooltips";

export default function InfoTooltip({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const data = tooltipsData[id] || {
    title: "Informasi",
    description:
      "Rincian penjelasan komponen API edukasi untuk membantu pembelajaran anda.",
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
        <div className="absolute bottom-full left-0 mb-3 w-64 p-4 bg-white neo-border neo-shadow z-50 text-xs text-black font-sans text-left">
          <h5 className="font-black uppercase mb-1 border-b border-black/10 pb-1 text-brand-purple-dark text-[11px]">
            {data.title}
          </h5>
          <p className="font-bold leading-relaxed">{data.description}</p>
          {/* Arrow */}
          <div className="absolute top-full left-4 border-8 border-transparent border-t-black mt-[-1px]"></div>
        </div>
      )}
    </div>
  );
}
