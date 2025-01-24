import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { Footer } from "../footer/Footer";
import { SectContenidoDinamico } from "../ServiceCourses/SectContenidoDinamico";
import { SectCursosDinamicos } from "../SectionCursosServices/SectionCursosServices";
export const ServicesLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <SectContenidoDinamico />
      <SectCursosDinamicos />
      <Footer />
    </>
  );
};
