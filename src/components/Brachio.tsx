import React from "react";
import { useCanvas } from "../contexts/CanvasContext";

export default function Brachio() {
  const { resetSpiralCanvas } = useCanvas();

  return (
    <div className="absolute right-10 md:right-14 bottom-10 z-10 flex gap-4 select-none">
      <p className="md:text-lg pt-2 md:pt-4">Click me!</p>
      <div
        className="text-6xl md:text-8xl hover:scale-105 hover:cursor-pointer transition-all duration-500"
        onClick={() => resetSpiralCanvas()}
      >
        🦕
      </div>
    </div>
  );
}
