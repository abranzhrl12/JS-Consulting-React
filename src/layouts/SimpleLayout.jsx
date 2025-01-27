import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/footer/Footer";
export const SimpleLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};
