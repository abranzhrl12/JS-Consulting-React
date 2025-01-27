import { useState } from "react";
import { Hamburger } from "../buttonHamburger/Hamburger";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      label: "Inicio",
      href: "/",
      title: "Página de inicio de JS Consulting",
      isExternal: false,
    },
    {
      label: "Nosotros",
      href: "/nosotros",
      title: "Conoce más sobre JS Consulting",
      isExternal: false,
    },
    {
      label: "Servicios",
      href: "/servicios",
      title: "Descubre nuestros servicios en seguridad laboral",
      isExternal: false,
    },
    {
      label: "Contáctanos",
      href: "/Contact",
      title: "Contáctanos para más información",
      isExternal: false,
    },
    {
      label: "Trabaja con Nosotros",
      href: "/Trabaja-con-Nosotros",
      title: "Únete a nuestro equipo",
      isExternal: false,
    },
    {
      label: "Validar certificado",
      href: "https://sigecap.jsconsulting.pe/sigecap/validar/inicio",
      title: "Valida tu certificado en Sigecap",
      isExternal: true,
    },
    {
      label: "Sigecap",
      href: "https://sigecap.jsconsulting.pe/sigecap/login",
      title: "Accede a tu cuenta Sigecap",
      isExternal: true,
    },
    {
      label: "Aula Virtual",
      href: "https://sigecap.jsconsulting.pe/sigecapexamen/login",
      title: "Accede al aula virtual",
      isExternal: true,
      icon: "/assets/home/IconPc.svg", // Icono para Aula Virtual
    },
  ];

  return (
    <nav className="navbar">
      {/* logo */}
      <a href="/" className="navbar__logo" title="Inicio - Js consulting">
        <img src="/assets/home/Svg_Logo_Fast.svg" alt="Logo de JS Consulting" />
      </a>
      {/* Lista Navegación */}
      <ul className={`navbar__list ${isMenuOpen ? "active" : ""}`}>
        {navItems.map((item, index) => (
          <li key={index} className="navbar__item">
            {item.isExternal ? (
              <a
                href={item.href}
                title={item.title}
                target="_blank"
                rel="noopener noreferrer"
                className="navbar__link"
              >
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={`Icono de ${item.label}`}
                    className="navbar__icon"
                  />
                )}
                {item.label}
              </a>
            ) : (
              <Link to={item.href} title={item.title} className="navbar__link">
                {item.icon && (
                  <img
                    src={item.icon}
                    alt={`Icono de ${item.label}`}
                    className="navbar__icon"
                  />
                )}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} />
    </nav>
  );
};
