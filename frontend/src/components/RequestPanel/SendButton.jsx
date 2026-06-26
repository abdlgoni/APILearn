import { Send } from "lucide-react";

export default function SendButton({
  onClick,
  isLoading,
  text = "Kirim Request",
  variant = "purple",
}) {
  const isPurple = variant === "purple";

  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="button"
      className={`w-full neo-border neo-shadow py-4 flex items-center justify-center gap-3 font-black text-lg uppercase tracking-wider neo-transition neo-hover cursor-pointer ${
        isPurple
          ? "bg-brand-purple hover:bg-brand-purple-dark text-white"
          : "bg-brand-yellow hover:bg-brand-yellow/90 text-black"
      }`}
    >
      {isLoading ? (
        <>
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent" />
          <span>Mengirim...</span>
        </>
      ) : (
        <>
          <span>{text}</span>
          <Send className="w-5 h-5 stroke-[2.5px]" />
        </>
      )}
    </button>
  );
}
