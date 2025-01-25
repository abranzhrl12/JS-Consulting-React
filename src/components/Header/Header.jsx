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
  const shouldRenderButton = ["/", "/nosotros"].includes(location.pathname);

  return (
    <header className={`header ${className}`}>
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
