import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // ✅ Importar correctamente App.tsx
import "./index.css"; // ✅ Importación correcta de estilos

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
