import { Footer } from "../footer/Footer";
import { SectContenidoDinamico } from "../ServiceCourses/SectContenidoDinamico";
import { SectionCursosServices } from "../SectionCursosServices/SectionCursosServices";
export const ServicesLayout = () => {
  return (
    <>
      <SectContenidoDinamico />
      <SectionCursosServices />
      <Footer />
    </>
  );
};
