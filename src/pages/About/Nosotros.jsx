// import { Navbar } from "../../components/Navbar/Navbar";
// import { Header } from "../../components/Header/Header";
import { SectInformation } from "../../components/SectionInformation/SectInformation";
import { SectValores } from "../../components/SectValores/SectValores";
import { SectMision } from "../../components/SectVision/SectMision";
import { SectAbout } from "../../components/SectAbout/SectAbout";
import { FrequentlyQuestions } from "../../components/Sect-Frequently-questions/FrequentlyQuestions";
// import { Footer } from "../../components/footer/Footer";
export const Nosotros = () => {
  return (
    <>
      {/* <Navbar />
      <Header
        videoUrl="https://res.cloudinary.com/dyg9ifqo2/video/upload/v1736279781/oanttjiavhz3ijlqh4k0.mp4"
        title="¿Quiénes somos? - JS Consulting"
      /> */}

      <SectInformation />
      <SectValores />
      <SectMision />
      <SectAbout />
      <FrequentlyQuestions />
      {/* <Footer /> */}
    </>
  );
};
