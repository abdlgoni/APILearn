import{ useState } from "react";
import Home from "./pages/Home";
import GuidedScenario from "./pages/GuidedScenario";

export default function App() {
  const [activeTab, setActiveTab] = useState("tester");

  return (
    <div className="min-h-screen bg-bg-dim font-sans text-black relative flex flex-col h-screen overflow-hidden pb-1 ">
      {/* DECORATIVE ATMOSPHERE STRIPS */}
      <div className="fixed top-0 left-0 w-full h-[6px] bg-black z-50"></div>
      <div className="fixed bottom-0 left-0 w-full h-[6px] bg-black z-50"></div>

      {/* TOP HEADER NAVIGATION */}
      <header className="flex justify-between items-center w-full px-6 h-16 bg-white border-b-[3px] border-black shrink-0 z-40 mt-[6px]">
        <div className="flex items-center gap-8">
          <div className="text-xl lg:text-2xl font-black uppercase tracking-tighter text-black select-none">
            APILearn
          </div>
          <nav className="flex gap-6 lg:gap-8">
            <button
              onClick={() => setActiveTab("tester")}
              className={`text-xs md:text-sm font-black uppercase pb-1 tracking-tight transition-all cursor-pointer ${
                activeTab === "tester"
                  ? "border-b-[4px] border-brand-purple text-black"
                  : "text-gray-500 hover:text-black hover:border-b-[4px] hover:border-gray-400"
              }`}
            >
              Tester
            </button>
            <button
              onClick={() => setActiveTab("scenario")}
              className={`text-xs md:text-sm font-black uppercase pb-1 tracking-tight transition-all cursor-pointer ${
                activeTab === "scenario"
                  ? "border-b-[4px] border-brand-purple text-black"
                  : "text-gray-500 hover:text-black hover:border-b-[4px] hover:border-gray-400"
              }`}
            >
              Guided Scenario
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 overflow-hidden p-4 md:p-6 lg:p-8 mt-2">
        <div className="max-w-7xl mx-auto h-full">
          {activeTab === "tester" ? <Home /> : <GuidedScenario />}
        </div>
      </main>
    </div>
  );
}
