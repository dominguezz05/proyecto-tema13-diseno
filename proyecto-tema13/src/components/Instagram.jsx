import "boxicons/css/boxicons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

const menuItems = [
  { icon: "bx-home", label: "Inicio" },
  { icon: "bx-search", label: "Buscar" },
  { icon: "bx-compass", label: "Explorar" },
  { icon: "bx-video", label: "Reels" },
  { icon: "bx-envelope", label: "Mensajes" },
  { icon: "bx-bell", label: "Notificaciones" },
  { icon: "bx-plus-circle", label: "Crear" },
  { icon: "bx-grid-alt", label: "Panel" },
  { icon: "bx-user", label: "Perfil" },
];

const extraItems = [
  { icon: "bx-at", label: "Threads" },
  { icon: "bx-menu", label: "Más" },
];

const Instagram = () => {
  return (
    <div
      className="d-flex flex-column p-3 bg-light vh-100 "
      style={{ width: "250px" }}
    >
      <h4 className="mb-4">Instagram</h4>
      <ul className="list-group list-group-flush">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex align-items-center hover-active"
          >
            <i className={`bx ${item.icon} me-3`}></i> {item.label}
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        {extraItems.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex align-items-center hover-active"
          >
            <i className={`bx ${item.icon} me-3`}></i> {item.label}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Instagram;