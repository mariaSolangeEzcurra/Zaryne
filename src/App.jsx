import { useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Logo from "./assets/logoapp2.png"; 

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-blue-900 to-green-800 relative">
      {/* Loguito en parte superior derecha animado */}
      <motion.img
        src={Logo}
        alt="Logo"
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{
          scale: 0.5  ,
	        }}
        animate={{
          x: "calc(48vw - 2rem)",
          y: "calc(-47vh + 2rem)", 
          scale: 0.099  
        }}
        transition={{ duration: 1.2 }}
      />
      {/* Contenido */}
      <div className="flex items-center justify-center h-full text-white text-3xl">
        Elegir cuenta creo
      </div>
    </div>
  );
}

export default App;
