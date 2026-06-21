export default function UrlInput({
  value,
  onChange,
  placeholder = "Masukan Url API...",
  error = "",
}) {
  return (
    <div className="flex-1 flex flex-col gap-1.5">
      {/* Input Container */}
      <div className="relative flex items-center w-full">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full neo-border-sm neo-shadow-sm py-2.5 pl-4 pr-10 font-mono text-xs md:text-sm focus:outline-none focus:ring-0 text-black font-semibold neo-active ${
            error
              ? "border-red-500 bg-red-50 focus:bg-red-50 animate-shake" 
              : "focus:bg-brand-yellow/10"
          }`}
        />
        
        {error && (
          <div className="absolute right-3 text-red-500 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
            </svg>
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-1.5 bg-red-500 text-red-700 border-2 neo-border-sm neo-shadow-sm text-xs font-black uppercase px-2.5 py-1 w-full rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] animate-fade-in">
          <span className="text-xs font-bold text-white px-1">{error}</span>
        </div>
      )}
    </div>
  );
}
