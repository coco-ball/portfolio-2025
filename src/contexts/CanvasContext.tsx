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
  resetSpiralCanvas: (opts?: {
    randomizeSpiral?: boolean;
    randomizeBg?: boolean;
  }) => void;
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
    () => new THREE.Color("#dbedf7")
  );

  const resetSpiralCanvas = (opts?: {
    randomizeSpiral?: boolean;
    randomizeBg?: boolean;
  }) => {
    const { randomizeSpiral = true, randomizeBg = false } = opts ?? {};

    const x = Math.random() * 1150;
    const y = Math.random() * 800 - 400;
    const z = Math.random() * 800 - 400;
    const randomCameraPosition: [number, number, number] = [x, y, z];

    if (randomizeBg) {
      const r = Math.floor(Math.random() * 56) + 200; // 200~255
      const g = Math.floor(Math.random() * 56) + 200;
      const b = Math.floor(Math.random() * 56) + 200;
      const randomBgColor = `rgb(${r}, ${g}, ${b})`;
      setBgColor(randomBgColor);
    }

    if (randomizeSpiral) {
      const randomSpiralColor = new THREE.Color(
        Math.random(),
        Math.random(),
        Math.random()
      );
      setSpiralColor(randomSpiralColor);
    }

    setCameraPosition(randomCameraPosition);
  };

  useEffect(() => {
    resetSpiralCanvas({ randomizeSpiral: false, randomizeBg: false });
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
