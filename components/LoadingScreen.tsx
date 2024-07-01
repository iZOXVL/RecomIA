// components/LoadingScreen.tsx
import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/load.json"; // Asegúrate de tener tu animación Lottie en esta ruta

const LoadingScreen = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-[#080c24] z-50 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <Lottie animationData={loadingAnimation} loop={true} className="w-80 h-80" />
      <h1 className="heading mt-6">
        Cargando...
      </h1>
    </div>
  );
};

export default LoadingScreen;
