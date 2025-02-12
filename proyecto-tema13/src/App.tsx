
import { ToastContainer } from "react-toastify"; // Importar ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Importar estilos de Toastify
import WeatherApp from "./components/WeatherApp";
import SideBar from "./components/Instagram";
import Prueba from "./components/Prueba";
import CursorTracker from "./components/CursorTracker";

function App() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
    <WeatherApp />
    <SideBar />
    <Prueba />
    <ToastContainer autoClose={3000} /> {/* Configurar ToastContainer */}
    <CursorTracker /> {/* Añadir CursorTraker */}
  </div>
  );
};

export default App;
