import useApiRequest from "../hooks/useApiRequest";
import MethodDropdown from "../components/RequestPanel/MethodDropdown";
import UrlInput from "../components/RequestPanel/UrlInput";
import HeadersInput from "../components/RequestPanel/HeadersInput";
import BodyInput from "../components/RequestPanel/BodyInput";
import SendButton from "../components/RequestPanel/SendButton";
import InfoTooltip from "../components/Tooltip/InfoTooltip";
import ResponseViewer from "../components/ResponsePanel/ResponseViewer";

export default function GuidedScenario() {
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
      <section className="flex-grow lg:flex-[0.45] neo-border neo-shadow bg-white p-6 flex flex-col overflow-y-auto">
        <span className="text-sm font-mono mb-2 font-black uppercase tracking-widest text-lg">
          Guided Scenario
        </span>
        <div className="flex gap-2 mb-2 items-end items-start mb-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="text-xs font-black uppercase text-gray-600">Method</span>
                <InfoTooltip id="method" />
              </div>
              <MethodDropdown value={method} onChange={setMethod} />
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-xs font-black uppercase text-gray-600">URL</span>
              <UrlInput
                value={url}
                onChange={(val) => { setUrl(val); setUrlError(""); }}
                error={urlError}
              />
            </div>
        </div>
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
        </div>

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
            <BodyInput
              value={reqBody}
              onChange={setReqBody}
            />
          )}
        </div>

        <SendButton onClick={sendRequest} isLoading={isSending} />
      </section>

      <ResponseViewer response={response} />
    </div>
  );
}
