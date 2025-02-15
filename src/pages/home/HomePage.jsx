// import { Navbar } from "../../components/Navbar/Navbar";
// import { Header } from "../../components/Header/Header";
import { CursoCarousel } from "../../components/Carousel/CursoCarousel";
import { BrochureCarousel } from "../../components/BrochureCarrousel/BrouchureCarousel";
import { SectCertifiacion } from "../../components/SectionCertifiacion/SectCertifiacion";
import { Modalidades } from "../../components/SectModalidades/Modalidades";
import { Clientes } from "../../components/SectClientes/SectClientes";
// import { Footer } from "../../components/footer/Footer";
//import { ContainerTemario } from "../../container/ContainerTemario/ContainerTemario";

export const HomePage = () => {
  return (
    <>
      {/* <Navbar />
      <Header
        videoUrl={
          "https://res.cloudinary.com/dyg9ifqo2/video/upload/v1736279781/oanttjiavhz3ijlqh4k0.mp4"
        }
        title={"¿Quiénes somos? - JS Consulting"}
      /> */}
      <CursoCarousel />
      <BrochureCarousel />
      <SectCertifiacion />
      <Modalidades />
      <Clientes />

      {/* <Footer /> */}
    </>
  );
};
