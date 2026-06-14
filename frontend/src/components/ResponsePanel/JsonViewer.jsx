import { useState } from "react";

function ToggleIcon({ expanded }) {
  return (
    <span className="inline-block w-3 text-center select-none text-gray-400 text-[10px] leading-none">
      {expanded ? "▼" : "▶"}
    </span>
  );
}

function JsonString({ value }) {
  return <span className="text-[#006e27] font-bold font-mono">"{value}"</span>;
}

function JsonNumber({ value, highlightCodes }) {
  const isHighlighted = highlightCodes.includes(value);
  if (isHighlighted) {
    return (
      <span className="inline-block bg-brand-coral border-2 border-black px-1.5 py-0.5 font-black text-black text-xs leading-none">
        {value}
      </span>
    );
  }
  return <span className="text-[#6a5f00] font-black font-mono">{value}</span>;
}

function JsonBoolean({ value }) {
  return (
    <span
      className={`font-mono font-black ${value ? "text-[#6a5f00]" : "text-brand-coral"}`}
    >
      {String(value)}
    </span>
  );
}

function JsonNull() {
  return <span className="text-gray-400 font-bold font-mono italic">null</span>;
}

function JsonPrimitive({ value }) {
  return <span className="font-mono">{String(value)}</span>;
}

function JsonValue({ val, highlightCodes, depth }) {
  if (val === null) return <JsonNull />;
  if (Array.isArray(val))
    return (
      <JsonArray val={val} highlightCodes={highlightCodes} depth={depth} />
    );
  if (typeof val === "object")
    return (
      <JsonObject val={val} highlightCodes={highlightCodes} depth={depth} />
    );
  if (typeof val === "string") return <JsonString value={val} />;
  if (typeof val === "number")
    return <JsonNumber value={val} highlightCodes={highlightCodes} />;
  if (typeof val === "boolean") return <JsonBoolean value={val} />;
  return <JsonPrimitive value={val} />;
}

function JsonObject({ val, highlightCodes, depth }) {
  const [collapsed, setCollapsed] = useState(depth >= 2);
  const keys = Object.keys(val);
  const indent = "  ".repeat(depth);

  if (keys.length === 0)
    return <span className="font-mono text-black font-black">{"{}"}</span>;

  if (collapsed) {
    return (
      <span
        className="inline-flex items-baseline gap-0.5 cursor-pointer hover:bg-gray-200 -ml-1 pl-1 rounded-sm select-none"
        onClick={() => setCollapsed(false)}
      >
        <ToggleIcon expanded={false} />
        <span className="text-black font-black">{"{ ... }"}</span>
        <span className="text-gray-400 text-[10px] font-bold">
          {keys.length} {keys.length === 1 ? "key" : "keys"}
        </span>
      </span>
    );
  }

  return (
    <span className="font-mono">
      <span
        className="inline-flex items-baseline gap-0.5 cursor-pointer hover:bg-gray-200 -ml-1 pl-1 rounded-sm select-none"
        onClick={() => setCollapsed(true)}
      >
        <ToggleIcon expanded />
        <span className="text-black font-black">{"{"}</span>
      </span>
      <div className="flex flex-col pl-3 border-l-2 border-gray-200 ml-[3px]">
        {keys.map((key, idx) => (
          <div key={key} className="flex items-start flex-wrap gap-x-1">
            <span className="text-brand-purple font-black shrink-0">
              "{key}"
            </span>
            <span className="text-black shrink-0">: </span>
            <span className="break-all min-w-0">
              <JsonValue
                val={val[key]}
                highlightCodes={highlightCodes}
                depth={depth + 1}
              />
            </span>
            {idx < keys.length - 1 && (
              <span className="text-black shrink-0">,</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className="whitespace-pre">{indent}</span>
        <span
          className="inline-flex items-baseline gap-0.5 cursor-pointer hover:bg-gray-200 -ml-1 pl-1 rounded-sm select-none"
          onClick={() => setCollapsed(true)}
        >
          <span className="text-black font-black">{"}"}</span>
        </span>
        <span className="text-gray-400 text-[10px] font-bold">
          {keys.length} {keys.length === 1 ? "key" : "keys"}
        </span>
      </div>
    </span>
  );
}

function JsonArray({ val, highlightCodes, depth }) {
  const [collapsed, setCollapsed] = useState(depth >= 2);
  const indent = "  ".repeat(depth);

  if (val.length === 0)
    return <span className="font-mono text-black font-black">[]</span>;

  if (collapsed) {
    return (
      <span
        className="inline-flex items-baseline gap-0.5 cursor-pointer hover:bg-gray-200 -ml-1 pl-1 rounded-sm select-none"
        onClick={() => setCollapsed(false)}
      >
        <ToggleIcon expanded={false} />
        <span className="text-black font-black">[ ... ]</span>
        <span className="text-gray-400 text-[10px] font-bold">
          {val.length} {val.length === 1 ? "item" : "items"}
        </span>
      </span>
    );
  }

  return (
    <span className="font-mono">
      <span
        className="inline-flex items-baseline gap-0.5 cursor-pointer hover:bg-gray-200 -ml-1 pl-1 rounded-sm select-none"
        onClick={() => setCollapsed(true)}
      >
        <ToggleIcon expanded />
        <span className="text-black font-black">[</span>
      </span>
      <div className="flex flex-col pl-3 border-l-2 border-gray-200 ml-[3px]">
        {val.map((item, idx) => (
          <div key={idx} className="flex items-start flex-wrap gap-x-1">
            <JsonValue
              val={item}
              highlightCodes={highlightCodes}
              depth={depth + 1}
            />
            {idx < val.length - 1 && (
              <span className="text-black shrink-0">,</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-baseline gap-0.5">
        <span className="whitespace-pre">{indent}</span>
        <span
          className="inline-flex items-baseline gap-0.5 cursor-pointer hover:bg-gray-200 -ml-1 pl-1 rounded-sm select-none"
          onClick={() => setCollapsed(true)}
        >
          <span className="text-black font-black">]</span>
        </span>
        <span className="text-gray-400 text-[10px] font-bold">
          {val.length} {val.length === 1 ? "item" : "items"}
        </span>
      </div>
    </span>
  );
}

export default function JsonViewer({ data, highlightCodes = [] }) {
  return (
    <div className="font-mono text-xs md:text-sm leading-relaxed select-text text-black">
      <JsonValue val={data} highlightCodes={highlightCodes} depth={0} />
    </div>
  );
}
