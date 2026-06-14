export default function StatusBadge({ statusText, isSuccess }) {
  return (
    <div
      className={`flex items-center px-4 py-1.5 neo-border-sm neo-shadow-sm font-black text-xs text-black ${
        isSuccess ? "bg-brand-green" : "bg-brand-coral"
      }`}
    >
      {statusText}
    </div>
  );
}
