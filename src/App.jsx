import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";
import { Nosotros } from "./pages/About/Nosotros";
import { Services } from "./pages/Services/Services";
// import { ServicesLayout } from "./components/layouts/ServicesLayout";
// import { ServiceDetails } from "./components/ServiceCourses/ServiceDetails";
import { ServicesLayout } from "./components/layouts/ServicesLayout";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Services />} />

        <Route path="/servicios/:serviceId" element={<ServicesLayout />} />
      </Routes>
    </Router>
  );
};
