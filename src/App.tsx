import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import CurrentWorks from "./pages/CurrentWorks";
import About from "./pages/About";
import Header from "./components/Header";
import { CanvasProvider } from "./contexts/CanvasContext";
import SpiralCanvas from "./components/SpiralCanvas";

function App() {
  return (
    <Router>
      <CanvasProvider>
        <SpiralCanvas />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/current-works" element={<CurrentWorks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CanvasProvider>
    </Router>
  );
}

export default App;
