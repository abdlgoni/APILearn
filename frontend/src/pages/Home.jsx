import useApiRequest from "../hooks/useApiRequest";
import MethodDropdown from "../components/RequestPanel/MethodDropdown";
import UrlInput from "../components/RequestPanel/UrlInput";
import HeadersInput from "../components/RequestPanel/HeadersInput";
import BodyInput from "../components/RequestPanel/BodyInput";
import SendButton from "../components/RequestPanel/SendButton";
import ResponseViewer from "../components/ResponsePanel/ResponseViewer";

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
    urlError,
    setUrlError,
    response,
    addHeader,
    updateHeader,
    deleteHeader,
    sendRequest,
  } = useApiRequest();

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full overflow-x-visible">
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
        <div className="flex gap-2 items-start mb-6">
          <MethodDropdown value={method} onChange={setMethod} />
          <UrlInput
            value={url}
            onChange={(val) => {
              setUrl(val);
              setUrlError("");
            }}
            error={urlError}
          />
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

      <ResponseViewer response={response} />
    </div>
  );
}
