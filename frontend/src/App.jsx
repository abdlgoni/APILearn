import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import GuidedScenario from "./pages/GuidedScenario";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/guided" element={<GuidedScenario />} />
          <Route path="/guided/:scenarioId" element={<GuidedScenario />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
