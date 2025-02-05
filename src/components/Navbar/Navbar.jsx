import { useState, useEffect } from "react";
import { Hamburger } from "../buttonHamburger/Hamburger";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Lista de elementos de navegación
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

  // Hook para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Detecta el scroll al cambiar la página
    window.addEventListener("scroll", handleScroll);

    // Cambia la transparencia solo en ciertas páginas
    if (
      location.pathname === "/" ||
      location.pathname === "/nosotros" ||
      location.pathname === "/servicios" ||
      location.pathname === "/prueba"
    ) {
      setIsTransparent(true);
    } else {
      setIsTransparent(false);
    }

    // Limpiar el evento de scroll cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  useEffect(() => {
    // Función para desplazar al header
    const scrollToHeader = () => {
      const headerElement = document.getElementById("header");
      if (headerElement) {
        headerElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // Llamar a la función cuando cambie la ruta
    scrollToHeader();
  }, [location.pathname]);

  return (
    <nav
      className={`navbar ${
        isScrolled || !isTransparent ? "scrolled" : "transparent"
      }`}
      translate="no"
    >
      <div className="navbar__contentall" translate="no">
        {/* Logo */}
        <a
          href="/"
          className="navbar__logo"
          title="Inicio - Js consulting"
          translate="no"
        >
          <img
            src="/assets/home/Svg_Logo_Fast.svg"
            alt="Logo de JS Consulting"
            translate="no"
          />
        </a>
        {/* Lista Navegación */}
        <ul
          className={`navbar__list ${isMenuOpen ? "active" : ""}`}
          translate="no"
        >
          {navItems.map((item, index) => (
            <li key={index} className="navbar__item" translate="no">
              {item.isExternal ? (
                <a
                  href={item.href}
                  title={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__link"
                  translate="no"
                  onClick={handleLinkClick}
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={`Icono de ${item.label}`}
                      className="navbar__icon"
                      translate="no"
                    />
                  )}
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.href}
                  title={item.title}
                  className="navbar__link"
                  translate="no"
                  onClick={handleLinkClick}
                >
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={`Icono de ${item.label}`}
                      className="navbar__icon"
                      translate="no"
                    />
                  )}
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <Hamburger isOpen={isMenuOpen} onClick={toggleMenu} translate="no" />
      </div>
    </nav>
  );
};
