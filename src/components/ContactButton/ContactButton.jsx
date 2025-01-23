export const ContactButton = ({
  label = "Contáctanos vía WhatsApp para más información",
  link = "https://api.whatsapp.com/send?phone=51936381634",
  icon = "/assets/home/svg-Icon-Whatssap.svg",
  iconAlt = "Icono de contacto",
  text = "Contáctanos",
}) => {
  return (
    <button className="contact-button" aria-label={label}>
      <a
        className="contact-button__link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon && (
          <img
            className="contact-button__ico"
            src={icon}
            alt={iconAlt}
            loading="lazy"
          />
        )}
        {text}
      </a>
    </button>
  );
};
