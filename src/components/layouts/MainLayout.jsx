import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { Outlet, useLocation } from "react-router-dom";
export const MainLayout = ({ videoUrl, title, children }) => {
  const location = useLocation();

  // Define dinámicamente el título según la ruta
  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "¿Quiénes somos? - JS Consulting";
      case "/nosotros":
        return "Sobre Nosotros";
      case "/servicios":
        return "Conoce nuestros servicios";
      default:
        return "JS Consulting";
    }
  };
  const getHeaderImages = () => {
    const shouldRenderVideo = ["/", "/nosotros"].includes(location.pathname);

    if (shouldRenderVideo) {
      return null; // Si hay video, no pasamos imágenes
    }

    switch (location.pathname) {
      case "/servicios":
        return {
          desktop:
            "/public/assets/Servicios/bg-Image-header-Servicios-Desk.webp",
          tablet:
            "/public/assets/Servicios/bg-Image-header-Servicios-Tablet.webp",
          mobile:
            "/public/assets/Servicios/bg-Image-header-Servicios-Mobile.webp",
        };
      case "/Contact":
        return {
          desktop: "/public/assets/Contact/bg-header-desktop.webp",
          tablet: "/public/assets/Contact/bg-header-desktop.webp",
          mobile: "/public/assets/Contact/bg-header-desktop.webp",
        };
      default:
        return {
          desktop: "/Assets/Img/default-desktop.webp",
          tablet: "/Assets/Img/default-tablet.webp",
          mobile: "/Assets/Img/default-mobile.webp",
        };
    }
  };

  const getHeaderClass = () => {
    switch (location.pathname) {
      case "/":
        return ""; // Sin clase adicional para la página de inicio
      case "/nosotros":
        return "header--nosotros"; // Clase adicional para "nosotros"
      case "/servicios":
        return "header--servicios"; // Clase adicional para "servicios"
      default:
        return ""; // Clase por defecto (sin modificadores)
    }
  };
  const shouldRenderVideo = ["/", "/nosotros"].includes(location.pathname);

  return (
    <>
      <Navbar />
      <Header
        videoUrl={shouldRenderVideo ? videoUrl : null}
        title={getTitle()}
        className={getHeaderClass()} // Pasar la clase dinámica
        imageSources={getHeaderImages()} // Pasar las imágenes dinámicas
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
