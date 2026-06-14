import InfoTooltip from "../Tooltip/InfoTooltip";

export default function BodyInput({ value, onChange }) {
  return (
    <div className="flex flex-col gap-4 flex-1 min-h-[180px]">
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-black uppercase text-gray-600">
          Request Body (JSON)
        </span>
        <InfoTooltip id="body" />
      </div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 neo-border-sm p-3 font-mono text-xs focus:outline-none h-full bg-white text-black font-semibold resize-none"
        rows={8}
      />
    </div>
  );
}
