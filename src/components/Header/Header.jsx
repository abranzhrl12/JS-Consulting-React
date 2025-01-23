import { ContactButton } from "../ContactButton/ContactButton";

export const Header = ({ videoUrl, title }) => {
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
          style={{ width: "100%", height: "100%" }}
        />
      )}

      <div className="header__contentall">
        <h1 className="header__title-principal">{title}</h1>
        <p className="header__paragraph">
          En JS Consulting, somos una empresa líder en la formación en seguridad
          laboral, comprometidos en ofrecer capacitaciones especializadas en
          trabajos en altura, espacios confinados y otras áreas de alto riesgo.
          Además, brindamos servicios de monitoreo de agentes ocupacionales y
          realizamos auditorías de Seguridad y Salud en el Trabajo. Nuestra
          misión es asegurar entornos laborales seguros y eficientes,
          respaldados por la certificación ISO 9001, que garantiza nuestro
          compromiso con la calidad y la mejora continua.
        </p>
        {/* {children} */}

        <div>
          <ContactButton />
        </div>
      </div>
    </header>
  );
};
