import { useLocation } from "react-router-dom";
import { ContactButton } from "../ContactButton/ContactButton";

export const Header = ({
  videoUrl,
  title,
  description,
  className = "",
  imageSources = {},
}) => {
  const location = useLocation();

  // Verifica si la URL es una subruta de "/servicios"
  const shouldRenderHeader = !location.pathname.startsWith("/servicios/");

  // Si estamos en una subruta de "/servicios", no renderizamos el Header
  if (!shouldRenderHeader) {
    return null; // No renderizamos el header si estamos en una subruta de "/servicios"
  }

  // Lógica para determinar si se debe mostrar el botón de contacto
  const shouldRenderButton = ["/", "/nosotros"].includes(location.pathname);

  return (
    <header className={`header ${className}`} id="header">
      {/* Renderiza el video si existe videoUrl */}
      {videoUrl ? (
        <video
          className="header__video"
          src={videoUrl}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        imageSources && (
          <picture className="header__picture">
            <source srcSet={imageSources.desktop} media="(min-width: 1024px)" />
            <source srcSet={imageSources.tablet} media="(min-width: 768px)" />
            <img
              src={imageSources.mobile}
              alt={description || "Imagen del encabezado"}
              className="header__image"
            />
          </picture>
        )
      )}

      <div className="header__contentall">
        <h1 className="header__title-principal">{title}</h1>
        {description && <p className="header__paragraph">{description}</p>}
        {shouldRenderButton && (
          <div>
            <ContactButton />
          </div>
        )}
      </div>
    </header>
  );
};
