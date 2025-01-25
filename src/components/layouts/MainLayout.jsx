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
        return "Nuestros Servicios";
      default:
        return "JS Consulting";
    }
  };
  const shouldRenderVideo = ["/", "/nosotros"].includes(location.pathname);

  return (
    <>
      <Navbar />
      <Header
        videoUrl={shouldRenderVideo ? videoUrl : null}
        title={getTitle()}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
