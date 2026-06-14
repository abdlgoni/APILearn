export default function UrlInput({
  value,
  onChange,
  placeholder = "Masukan Url API...",
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="flex-1 neo-border-sm py-2.5 px-4 font-mono text-xs md:text-sm focus:outline-none focus:bg-brand-yellow/10 focus:ring-0 text-black font-semibold"
    />
  );
}
