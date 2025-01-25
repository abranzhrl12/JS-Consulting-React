import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layouts/MainLayout";
import { HomePage } from "./pages/home/HomePage";
import { Nosotros } from "./pages/About/Nosotros";
import { Services } from "./pages/Services/Services";
import { ServicesLayout } from "./components/layouts/ServicesLayout";
import { Contact } from "./pages/Contact/Contact";
export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout videoUrl="https://res.cloudinary.com/dyg9ifqo2/video/upload/v1736279781/oanttjiavhz3ijlqh4k0.mp4" />
          }
        >
          <Route index element={<HomePage />} /> {/* Página de inicio */}
          <Route path="nosotros" element={<Nosotros />} />{" "}
          {/* Página de nosotros */}
          <Route path="servicios" element={<Services />} />{" "}
          {/* Página de servicios */}
          <Route
            path="servicios/:serviceId"
            element={<ServicesLayout />}
          />{" "}
          <Route path="Contact" element={<Contact />} />{" "}
          {/* Detalles de servicio */}
        </Route>
      </Routes>
    </Router>
  );
};
