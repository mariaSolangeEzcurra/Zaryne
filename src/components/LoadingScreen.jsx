import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logoapp.png";

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const interval = setInterval(() => {
        setProgress((old) => Math.min(old + 2, 100));
      }, 50);
      return () => clearInterval(interval);
    } else {
      setTimeout(() => onFinish(), 500);
    }
  }, [progress, onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-white text-center">
      {/* Logo animado */}
      <motion.img
        src={Logo}
        alt="Logo"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-32 h-32 mb-6 object-contain mx-auto"
      />

      {/* Barra de carga */}
      <div className="w-64 bg-gray-700 rounded-full h-4 overflow-hidden">
        <motion.div
          className="bg-green-400 h-4 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <p className="mt-4 text-lg">Cargando... {progress}%</p>
    </div>
  );
}

