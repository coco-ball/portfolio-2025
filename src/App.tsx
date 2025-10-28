import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import CurrentWorks from "./pages/CurrentWorks";
import About from "./pages/About";
import Header from "./components/Header";
import Brachio from "./components/Brachio";
import { HelmetProvider } from "react-helmet-async";
import { CanvasProvider } from "./contexts/CanvasContext";
import SpiralCanvas from "./components/SpiralCanvas";
import ProjectDetail from "./pages/ProjectDetail";

function App() {
  return (
    <Router>
      <HelmetProvider>
        <CanvasProvider>
          <SpiralCanvas />
          <Header />
          <Brachio />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/works" element={<CurrentWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </CanvasProvider>
      </HelmetProvider>
    </Router>
  );
}

export default App;
