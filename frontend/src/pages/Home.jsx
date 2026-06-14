import { useState } from "react";
import { Send, Lightbulb } from "lucide-react";
import useApiRequest from "../hooks/useApiRequest";
import MethodDropdown from "../components/RequestPanel/MethodDropdown";
import UrlInput from "../components/RequestPanel/UrlInput";
import HeadersInput from "../components/RequestPanel/HeadersInput";
import BodyInput from "../components/RequestPanel/BodyInput";
import SendButton from "../components/RequestPanel/SendButton";

import StatusBadge from "../components/ResponsePanel/StatusBadge";
import StatusExplanation from "../components/ResponsePanel/StatusExplanation";
import JsonViewer from "../components/ResponsePanel/JsonViewer";
import KeyValueView from "../components/ResponsePanel/KeyValue";

export default function Home() {
  const {
    method,
    setMethod,
    url,
    setUrl,
    activeReqTab,
    setActiveReqTab,
    headers,
    reqBody,
    setReqBody,
    authToken,
    setAuthToken,
    isSending,
    response,
    addHeader,
    updateHeader,
    deleteHeader,
    sendRequest,
  } = useApiRequest();

  const [activeResTab, setActiveResTab] = useState("json");

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full overflow-hidden">
      {/* LEFT PANEL: CONFIGURATION */}
      <section className="flex-grow lg:flex-[0.45] neo-border neo-shadow bg-white p-6 flex flex-col overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-black uppercase tracking-widest text-black">
            Konfigurasi Request
          </span>
          <span className="text-xs font-black text-brand-purple uppercase italic">
            Draft Tersimpan
          </span>
        </div>

        {/* URL BAR AREA */}
        <div className="flex gap-2 mb-6">
          <MethodDropdown value={method} onChange={setMethod} />
          <UrlInput value={url} onChange={setUrl} />
        </div>

        {/* TABS HEADER, BODY, AUTH */}
        <div className="flex border-b-[3px] border-black mb-6">
          <button
            onClick={() => setActiveReqTab("headers")}
            className={`text-xs md:text-sm font-black uppercase pb-2 px-4 border-b-[6px] -mb-[3px] transition-all cursor-pointer ${
              activeReqTab === "headers"
                ? "border-brand-yellow text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            Headers ({headers.length})
          </button>
          <button
            onClick={() => setActiveReqTab("body")}
            className={`text-xs md:text-sm font-black uppercase pb-2 px-4 border-b-[6px] -mb-[3px] transition-all cursor-pointer ${
              activeReqTab === "body"
                ? "border-brand-yellow text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            Body
          </button>
          <button
            onClick={() => setActiveReqTab("auth")}
            className={`text-xs md:text-sm font-black uppercase pb-2 px-4 border-b-[6px] -mb-[3px] transition-all cursor-pointer ${
              activeReqTab === "auth"
                ? "border-brand-yellow text-black"
                : "border-transparent text-gray-500 hover:text-black"
            }`}
          >
            Auth
          </button>
        </div>

        {/* TAB RENDERING */}
        <div className="flex-1 flex flex-col mb-6">
          {activeReqTab === "headers" && (
            <HeadersInput
              headers={headers}
              onAddHeader={addHeader}
              onUpdateHeader={updateHeader}
              onDeleteHeader={deleteHeader}
            />
          )}

          {activeReqTab === "body" && (
            <BodyInput value={reqBody} onChange={setReqBody} />
          )}

          {activeReqTab === "auth" && (
            <div className="flex flex-col gap-4 flex-1">
              <span className="text-xs font-black uppercase text-gray-600">
                Otentikasi Sandbox
              </span>
              <div className="bg-bg-container-low neo-border-sm p-4 space-y-3 text-black">
                <p className="text-xs font-bold leading-relaxed">
                  Kamu bisa menyetel auth token default di sini untuk
                  disimulasikan dalam visualisasi token tester.
                </p>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black uppercase text-gray-700">
                    Token value
                  </label>
                  <input
                    type="text"
                    value={authToken}
                    onChange={(e) => setAuthToken(e.target.value)}
                    className="w-full neo-border-sm bg-white px-3 py-2 font-mono text-xs text-black"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SEND ACTION BUTTON */}
        <SendButton onClick={sendRequest} isLoading={isSending} />
      </section>

      {/* RIGHT PANEL: RESPONSE VIEW */}
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
              <div className="flex items-center px-4 py-1.5 neo-border-sm neo-shadow-sm bg-white font-black text-xs text-black">
                {response.time}
              </div>
              <div className="hidden sm:flex items-center px-4 py-1.5 neo-border-sm neo-shadow-sm bg-white font-black text-xs text-black">
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

            {/* RESPONSE VIEWER TABS */}
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

            {/* RESPONSE TAB VIEWERS */}
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

        {/* LEARNING TIP FAB 
        <div className="flex items-center gap-8 bg-white neo-border p-4 neo-shadow-sm shrink-0">
          <Lightbulb className="w-6 h-6 text-brand-purple shrink-0 stroke-[2.5px]" />
          <p className="text-xs font-black uppercase text-black flex-1 italic leading-tight">
            Tip: Gunakan status 201 Created saat kamu berhasil membuat data baru
            di server.
          </p>
        </div>*/}
      </section>
    </div>
  );
}
