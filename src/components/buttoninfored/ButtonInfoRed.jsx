import { Link } from "react-router-dom";

export const ButtonInfoRed = ({
  href,
  isExternal = false,
  onClick,
  children,
}) => {
  if (href) {
    if (isExternal) {
      // Si es un enlace externo, usa <a>
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="buttonred"
        >
          {children || "Más Información"}
        </a>
      );
    } else {
      // Si es un enlace interno, usa <Link> de react-router-dom
      return (
        <Link to={href} className="buttonred">
          {children || "Más Información"}
        </Link>
      );
    }
  }

  // Si no es un enlace, renderiza un botón
  return (
    <button onClick={onClick} className="buttonred">
      {children || "Más Información"}
    </button>
  );
};
