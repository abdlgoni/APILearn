import { Trash2, Plus } from "lucide-react";
import InfoTooltip from "../Tooltip/InfoTooltip";

export default function HeadersInput({
  headers,
  onAddHeader,
  onUpdateHeader,
  onDeleteHeader,
}) {
  return (
    <div className="flex flex-col gap-4 flex-1">
      <div className="flex items-center gap-2">
        <span className="text-xs font-black uppercase text-gray-600">
          Key-Value Pairs
        </span>
        <InfoTooltip id="headers" />
      </div>

      <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
        {headers.length === 0 ? (
          <div className="neo-border-sm neo-shadow-sm border-dashed p-4 text-center text-xs font-bold italic text-gray-500 bg-gray-50/50">
            Belum ada header yang ditambahkan. Klik tombol di bawah untuk
            menambah.
          </div>
        ) : (
          headers.map((h) => (
            <div key={h.id} className="flex gap-2">
              <input
                type="text"
                value={h.key}
                placeholder="Key (e.g. Content-Type)"
                onChange={(e) => onUpdateHeader(h.id, "key", e.target.value)}
                className="flex-1 neo-border-sm py-1.5 px-3 font-mono text-xs focus:outline-none focus:bg-brand-yellow/10"
              />
              <input
                type="text"
                value={h.value}
                placeholder="Value (e.g. application/json)"
                onChange={(e) => onUpdateHeader(h.id, "value", e.target.value)}
                className="flex-1 neo-border-sm py-1.5 px-3 font-mono text-xs focus:outline-none focus:bg-brand-yellow/10"
              />
              <button
                type="button"
                onClick={() => onDeleteHeader(h.id)}
                className="px-2.5 text-brand-coral-dark hover:bg-brand-coral/20 neo-border-sm hover:border-black text-xs font-black flex items-center justify-center transition-all bg-white"
              >
                <Trash2 className="w-4 h-4 text-brand-coral-dark" />
              </button>
            </div>
          ))
        )}
      </div>

      <button
        type="button"
        onClick={onAddHeader}
        className="neo-border-sm neo-shadow-sm neo-transition neo-hover bg-white hover:bg-gray-100 py-2 text-xs font-black uppercase flex items-center justify-center gap-2 cursor-pointer mt-1"
      >
        <Plus className="w-4 h-4 text-black stroke-[3.5px]" />
        Tambah Header
      </button>
    </div>
  );
}
