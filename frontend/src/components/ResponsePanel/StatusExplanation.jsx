import { CheckCircle2, AlertCircle } from "lucide-react";
export default function StatusExplanation({ title, body, isSuccess }) {
  return (
    <div
      className={`neo-border-sm neo-shadow-sm p-4 mb-6 ${
        isSuccess
          ? "bg-brand-yellow text-black"
          : "bg-brand-coral/20 text-black"
      }`}
    >
      <div className="flex items-start gap-3">
        {isSuccess ? (
          <CheckCircle2 className="w-5 h-5 text-black stroke-[3px] shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 text-brand-coral-dark stroke-[3px] shrink-0" />
        )}
        <div>
          <h4 className="text-xs font-black uppercase mb-1 leading-none tracking-wider font-sans">
            {title}
          </h4>
          <p className="text-xs font-bold leading-relaxed font-sans mt-1.5">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}
