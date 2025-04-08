import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import * as THREE from "three";

type CanvasContextType = {
  cameraPosition: [number, number, number];
  setCameraPosition: React.Dispatch<
    React.SetStateAction<[number, number, number]>
  >;
  bgColor: string;
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  spiralColor: THREE.Color;
  setSpiralColor: React.Dispatch<React.SetStateAction<THREE.Color>>;
  resetSpiralCanvas: () => void;
};

const CanvasContext = createContext<CanvasContextType | undefined>(undefined);

export const CanvasProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cameraPosition, setCameraPosition] = useState<
    [number, number, number]
  >([500, 0, 0]);
  const [bgColor, setBgColor] = useState<string>("rgb(250,250,250)");
  const [spiralColor, setSpiralColor] = useState<THREE.Color>(
    new THREE.Color(255, 255, 255)
  );
  const resetSpiralCanvas: () => void = () => {
    const x = Math.random() * 1150;
    const y = Math.random() * 800 - 400;
    const z = Math.random() * 800 - 400;
    const randomCameraPosition: [number, number, number] = [x, y, z];

    // const r = Math.floor(Math.random() * 256) + 20;
    // const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256) + 20;
    const r = (Math.floor(Math.random() * 6) + 200) / 255; // 200~255
    const g = (Math.floor(Math.random() * 6) + 200) / 255;
    const b = (Math.floor(Math.random() * 6) + 200) / 255;
    const randomBgColor: string = `rgb(${r}, ${g}, ${b})`;

    const randomSpiralColor: THREE.Color = new THREE.Color(
      Math.random(),
      Math.random(),
      Math.random()
    );

    console.log(randomCameraPosition);

    setCameraPosition(randomCameraPosition);
    // setBgColor(randomBgColor);
    setSpiralColor(randomSpiralColor);
  };

  useEffect(() => {
    resetSpiralCanvas();
  }, []);

  return (
    <CanvasContext.Provider
      value={{
        cameraPosition,
        setCameraPosition,
        bgColor,
        setBgColor,
        spiralColor,
        setSpiralColor,
        resetSpiralCanvas,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (context === undefined) {
    throw new Error("useCanvas must be used within a CanvasProvider");
  }
  return context;
};
