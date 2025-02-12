import { useEffect } from "react";
import { toast } from "react-toastify"; // Si quieres mostrar un mensaje con react-toastify

export default function Prueba() {
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        toast.info("Has presionado Escape"); 
      
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96 text-center">
        <h2 className="text-2xl font-bold mb-4">Componente Prueba</h2>
        <p>Pulsa la tecla "Escape" para ver el mensaje.</p>
      </div>
    </div>
  );
}
