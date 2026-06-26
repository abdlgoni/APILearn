import { Outlet, NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg-dim font-sans text-black relative flex flex-col h-screen overflow-hidden pb-1">
      <div className="fixed top-0 left-0 w-full h-[6px] bg-black z-50" />
      <div className="fixed bottom-0 left-0 w-full h-[6px] bg-black z-50" />

      <header className="flex justify-between items-center w-full px-6 h-16 bg-white border-b-[3px] border-black shrink-0 z-40 mt-[6px]">
        <div className="flex items-center gap-8">
          <div className="text-xl lg:text-2xl font-black uppercase tracking-tighter text-black select-none">
            APILearn
          </div>
          <nav className="flex gap-6 lg:gap-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `text-xs md:text-sm font-black uppercase pb-1 tracking-tight transition-all cursor-pointer ${
                  isActive
                    ? "border-brand-purple"
                    : "text-gray-500 hover:text-black "
                }`
              }
            >
              Tester
            </NavLink>
            <NavLink
              to="/guided"
              className={({ isActive }) =>
                `text-xs md:text-sm font-black uppercase pb-1 tracking-tight transition-all cursor-pointer ${
                  isActive
                    ? "border-brand-purple"
                    : "text-gray-500 hover:text-black "
                }`
              }
            >
              Guided Scenario
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="flex-1 overflow-hidden p-4 md:p-6 lg:p-8 mt-2">
        <div className="max-w-7xl mx-auto h-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
