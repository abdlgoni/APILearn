import { useState } from "react";
import { Send } from "lucide-react";
import StatusBadge from "./StatusBadge";
import StatusExplanation from "./StatusExplanation";
import JsonViewer from "./JsonViewer";
import KeyValueView from "./KeyValue";

export default function ResponseViewer({ response }) {
  const [activeResTab, setActiveResTab] = useState("json");

  return (
    <section className="flex-grow lg:flex-[0.55] neo-border neo-shadow bg-white p-6 gap-2 flex flex-col overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-black uppercase tracking-widest text-black">
          Respon Server
        </span>

        {response && (
          <div className="flex flex-wrap gap-2">
            <StatusBadge
              statusText={response.status}
              isSuccess={response.isSuccess}
            />
            <div className="flex items-center px-4 py-1.5 neo-border-sm neo-shadow-sm bg-brand-blue font-black text-xs text-black">
              {response.time}
            </div>
            <div className="hidden sm:flex items-center px-4 py-1.5 neo-border-sm neo-shadow-sm bg-brand-purple font-black text-xs text-black">
              {response.size}
            </div>
          </div>
        )}
      </div>

      {response ? (
        <div className="flex-1 flex flex-col overflow-hidden">
          <StatusExplanation
            title={response.explanationTitle}
            body={response.explanationBody}
            isSuccess={response.isSuccess}
          />

          <div className="flex border-b-[3px] border-black shrink-0 pt-2">
            <button
              onClick={() => setActiveResTab("json")}
              className={`text-xs md:text-sm font-black uppercase pb-2 px-4 border-b-[6px] -mb-[3px] transition-all cursor-pointer ${
                activeResTab === "json"
                  ? "border-brand-purple text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              JSON View
            </button>
            <button
              onClick={() => setActiveResTab("headers")}
              className={`text-xs md:text-sm font-black uppercase pb-2 px-4 border-b-[6px] -mb-[3px] transition-all cursor-pointer ${
                activeResTab === "headers"
                  ? "border-brand-purple text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              Headers
            </button>
            <button
              onClick={() => setActiveResTab("cookies")}
              className={`text-xs md:text-sm font-black uppercase pb-2 px-4 border-b-[6px] -mb-[3px] transition-all cursor-pointer ${
                activeResTab === "cookies"
                  ? "border-brand-purple text-black"
                  : "border-transparent text-gray-500 hover:text-black"
              }`}
            >
              Cookies ({response.cookies.length})
            </button>
          </div>

          <div className="flex-1 min-h-0 neo-border bg-bg-light overflow-auto p-4 lg:p-6">
            {activeResTab === "json" && (
              <JsonViewer
                data={response.bodyJson}
                highlightCodes={[401, 201, 200]}
              />
            )}

            {activeResTab === "headers" && (
              <KeyValueView items={response.headers} />
            )}

            {activeResTab === "cookies" && (
              <KeyValueView
                items={response.cookies}
                emptyMessage="No cookies returned."
              />
            )}
          </div>
        </div>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center p-8 text-center text-gray-500 neo-border bg-bg-light">
          <Send className="w-12 h-12 mb-4 text-gray-400 animate-bounce" />
          <p className="font-black text-lg text-black uppercase mb-1">
            Siap Mengirim Request
          </p>
          <p className="text-xs font-bold leading-relaxed">
            Tekan tombol "Kirim Request" untuk melihat respons server simulasi
            secara real-time.
          </p>
        </div>
      )}
    </section>
  );
}
