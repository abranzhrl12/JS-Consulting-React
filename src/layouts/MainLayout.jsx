// import { Navbar } from "../components/Navbar/Navbar";
// import { Header } from "../components/Header/Header";
// import { Footer } from "../components/footer/Footer";
// import { Outlet, useLocation } from "react-router-dom";
// export const MainLayout = ({ videoUrl, title, children }) => {
//   const location = useLocation();

//   // Define dinámicamente el título según la ruta
//   const getTitle = () => {
//     switch (location.pathname) {
//       case "/":
//         return "¿Quiénes somos? - JS Consulting";
//       case "/nosotros":
//         return "Sobre Nosotros";
//       case "/servicios":
//         return "Conoce nuestros servicios";
//       default:
//         return "JS Consulting";
//     }
//   };
//   const getHeaderImages = () => {
//     const shouldRenderVideo = ["/", "/nosotros"].includes(location.pathname);

//     if (shouldRenderVideo) {
//       return null; // Si hay video, no pasamos imágenes
//     }

//     switch (location.pathname) {
//       case "/servicios":
//         return {
//           desktop: "/assets/Servicios/bg-Image-header-Servicios-Desk.webp",
//           tablet: "/assets/Servicios/bg-Image-header-Servicios-Tablet.webp",
//           mobile: "/assets/Servicios/bg-Image-header-Servicios-Mobile.webp",
//         };
//       case "/Contact":
//         return {
//           desktop: "/assets/Contact/bg-header-desktop.webp",
//           tablet: "/assets/Contact/bg-header-desktop.webp",
//           mobile: "/assets/Contact/bg-header-desktop.webp",
//         };
//       case "/Trabaja-con-Nosotros":
//         return {
//           desktop: "/assets/worknostros/bg-header-desktop.webp",
//           tablet: "/assets/worknostros/bg-header-tablet.webp",
//           mobile: "/assets/worknostros/bg-header-tablet.webp",
//         };

//       default:
//         return {
//           desktop: "/Assets/Img/default-desktop.webp",
//           tablet: "/Assets/Img/default-tablet.webp",
//           mobile: "/Assets/Img/default-mobile.webp",
//         };
//     }
//   };

//   const getHeaderClass = () => {
//     switch (location.pathname) {
//       case "/":
//         return ""; // Sin clase adicional para la página de inicio
//       case "/nosotros":
//         return "header--nosotros"; // Clase adicional para "nosotros"
//       case "/servicios":
//         return "header--servicios"; // Clase adicional para "servicios"
//       default:
//         return ""; // Clase por defecto (sin modificadores)
//     }
//   };
//   const shouldRenderVideo = ["/", "/nosotros"].includes(location.pathname);

//   return (
//     <>
//       <Navbar />
//       <Header
//         videoUrl={shouldRenderVideo ? videoUrl : null}
//         title={getTitle()}
//         className={getHeaderClass()} // Pasar la clase dinámica
//         imageSources={getHeaderImages()} // Pasar las imágenes dinámicas
//       />
//       <main>
//         <Outlet />
//       </main>
//       <Footer />
//     </>
//   );
// };
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

export const MainLayout = ({ videoUrl, title, description, children }) => {
  const location = useLocation();

  // Títulos y descripciones por defecto según ruta
  const getRouteContent = () => {
    switch (location.pathname) {
      case "/":
        return {
          title: "¿Quiénes somos? - JS Consulting",
          description:
            "En JS Consulting, somos una empresa líder en la formación en seguridad laboral, comprometidos en ofrecer capacitaciones especializadas en trabajos en altura, espacios confinados y otras áreas de alto riesgo. Además, brindamos servicios de monitoreo de agentes ocupacionales y realizamos auditorías de Seguridad y Salud en el Trabajo. Nuestra misión es asegurar entornos laborales seguros y eficientes, respaldados por la certificación ISO 9001, que garantiza nuestro compromiso con la calidad y la mejora continua.",
        };
      case "/nosotros":
        return {
          title: "Sobre Nosotros",
          description:
            "En JS Consulting, somos una empresa líder en la formación en seguridad laboral, comprometidos en ofrecer capacitaciones especializadas en trabajos en altura, espacios confinados y otras áreas de alto riesgo. Además, brindamos servicios de monitoreo de agentes ocupacionales y realizamos auditorías de Seguridad y Salud en el Trabajo. Nuestra misión es asegurar entornos laborales seguros y eficientes, respaldados por la certificación ISO 9001, que garantiza nuestro compromiso con la calidad y la mejora continua.",
        };
      case "/servicios":
        return {
          title: "Conoce nuestros servicios",
          description:
            "Tenemos una amplia variedad de soluciones diseñadas para impulsar el crecimiento de tu empresa y garantizar la seguridad de tus colaboradores. ¡Conócelas!",
        };
      case "/Contact":
        return {
          title: "Contáctanos",
          description: "",
        };
      case "/Trabaja-con-Nosotros":
        return {
          title: "Trabaja con nosotros",
          description: "",
        };

      default:
        return {
          title: "JS Consulting",
          description: "Consultoría estratégica para la era digital.",
        };
    }
  };

  // Combina props con valores por defecto
  const currentContent = {
    title: title || getRouteContent().title,
    description: description || getRouteContent().description,
  };

  const getHeaderClass = () => {
    switch (location.pathname) {
      case "/":
        return ""; // Sin clase adicional para la página de inicio
      case "/nosotros":
        return "header--nosotros"; // Clase adicional para "nosotros"
      case "/servicios":
        return "header--servicios"; // Clase adicional para "servicios"
      case "/Contact":
        return "header--contactanos"; // Clase adicional para "servicios"
      case "/Trabaja-con-Nosotros":
        return "header--worknostros"; // Clase adicional para "servicios"

      default:
        return ""; // Clase por defecto (sin modificadores)
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
          desktop: "/assets/Servicios/bg-Image-header-Servicios-Desk.webp",
          tablet: "/assets/Servicios/bg-Image-header-Servicios-Tablet.webp",
          mobile: "/assets/Servicios/bg-Image-header-Servicios-Mobile.webp",
        };
      case "/Contact":
        return {
          desktop: "/assets/Contact/bg-header-desktop.webp",
          tablet: "/assets/Contact/bg-header-desktop.webp",
          mobile: "/assets/Contact/bg-header-desktop.webp",
        };
      case "/Trabaja-con-Nosotros":
        return {
          desktop: "/assets/worknostros/bg-header-desktop.webp",
          tablet: "/assets/worknostros/bg-header-tablet.webp",
          mobile: "/assets/worknostros/bg-header-tablet.webp",
        };

      default:
        return {
          desktop: "/Assets/Img/default-desktop.webp",
          tablet: "/Assets/Img/default-tablet.webp",
          mobile: "/Assets/Img/default-mobile.webp",
        };
    }
  };

  // Resto del componente (getHeaderImages y getHeaderClass igual que antes)
  // ... (mantén aquí las funciones getHeaderImages y getHeaderClass de tu código original)

  const shouldRenderVideo = ["/", "/nosotros"].includes(location.pathname);

  return (
    <>
      <Navbar />
      <Header
        videoUrl={shouldRenderVideo ? videoUrl : null}
        title={currentContent.title}
        description={currentContent.description} // Nueva prop
        className={getHeaderClass()}
        imageSources={getHeaderImages()}
      />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
