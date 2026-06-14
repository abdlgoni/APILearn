export default function KeyValueView({
  items,
  emptyMessage = "Tidak ada data",
  keyColorClass = "text-brand-purple-dark",
}) {
  if (items.length === 0) {
    return <div className="text-gray-500 italic p-2">{emptyMessage}</div>;
  }

  return (
    <div className="font-mono text-xs space-y-2 uppercase font-bold text-black p-2">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-wrap border-b border-black/10 pb-1.5 last:border-0 last:pb-0"
        >
          <span className={`${keyColorClass} mr-2`}>{item.key}:</span>
          <span className="text-gray-700 font-medium select-all">
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
