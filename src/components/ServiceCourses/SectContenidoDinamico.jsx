import { useParams } from "react-router-dom";
import { services } from "../../data/servicesData";

export const SectContenidoDinamico = () => {
  const { serviceId } = useParams(); // Obtener el parámetro dinámico de la URL

  // Buscar el servicio correspondiente en los datos
  const selectedService = services.find((service) => service.id === serviceId);

  if (!selectedService) {
    return <h1>Servicio no encontrado</h1>; // Manejar el caso de error
  }

  return (
    <section className="contenido">
      <div className="contenido__contentall">
        <div className="contenido-dinamico">
          <h1 className="contenido-dinamico__titulo">
            {selectedService.title}
          </h1>
          <p className="contenido-dinamico__descripcion">
            {selectedService.details}
          </p>
          <h2 className="contenido-dinamico__subtitle">Cursos Disponibles:</h2>
          <ul className="contenido-dinamico__lista">
            {selectedService.availableCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
        <div className="contenido__form">
          <h2 className="contenido__form-title">Contáctanos</h2>
          <p className="contenido__form-paragraph">
            Déjenos sus datos y nos pondremos en contacto
          </p>
          <div className="contenido__form-grid">
            <input
              type="text"
              className="contenido__form-input"
              placeholder="Nombre y Apellido"
            />
            <input
              type="text"
              className="contenido__form-input"
              placeholder="Su email"
            />
            <input
              type="text"
              className="contenido__form-input"
              placeholder="Teléfono Celular"
            />
            <textarea
              className="contenido__form-TextArea"
              name=""
              id=""
              placeholder="Mensaje/Requerimiento"
            ></textarea>
            <button className="contenido__form-btn">Cotizar</button>
          </div>
        </div>
      </div>
    </section>
  );
};
