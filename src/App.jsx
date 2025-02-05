import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { SimpleLayout } from "./layouts/SimpleLayout";
import { HomePage } from "./pages/home/HomePage";
import { Nosotros } from "./pages/About/Nosotros";
import { Services } from "./pages/Services/Services";
import { ServicesLayout } from "./layouts/ServicesLayout";
import { Contact } from "./pages/Contact/Contact";
import { WorkNosotros } from "./pages/work-nosotros/workNosotros";
import { Reclamos } from "./pages/Reclamos/Reclamos";
import { ContainerTemario } from "./container/ContainerTemario/ContainerTemario";
import { Temarios } from "./pages/Temarios/Temarios";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout videoUrl="https://jsconsulting.pe/videos/videoBanner.mp4" />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="servicios" element={<Services />} />
          <Route path="/servicios/:slug" element={<ServicesLayout />} />
          {/* <Route path="prueba" element={<Temarios />} /> */}
          <Route path="Contact" element={<Contact />} />
          <Route path="Trabaja-con-Nosotros" element={<WorkNosotros />} />
        </Route>
        {/* Ruta de Reclamos con SimpleLayout */}
        <Route
          path="Reclamos"
          element={
            <SimpleLayout>
              <Reclamos />
            </SimpleLayout>
          }
        />
        <Route
          path="curso/:slug"
          element={
            <SimpleLayout>
              <Temarios />
            </SimpleLayout>
          }
        />
      </Routes>
    </Router>
  );
};
