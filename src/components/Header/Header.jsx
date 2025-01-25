import { useLocation } from "react-router-dom";
import { ContactButton } from "../ContactButton/ContactButton";

export const Header = ({ videoUrl, title, description }) => {
  const location = useLocation();
  const shouldRenderButton = ["/", "/nosotros"].includes(location.pathname);
  return (
    <header className="header">
      {videoUrl && (
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
