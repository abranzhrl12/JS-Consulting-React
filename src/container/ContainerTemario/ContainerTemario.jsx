import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { datatemarioCursos } from "../../data/datatemario.js";
import "./containerTemario.scss";
export const ContainerTemario = () => {
  const { serviceId, courseSlug } = useParams();
  const [temario, setTemario] = useState(null);

  useEffect(() => {
    console.log("serviceId:", serviceId);
    console.log("courseSlug:", courseSlug);

    // Buscar el servicio por serviceId
    const service = datatemarioCursos.find(
      (service) => service.serviceId === serviceId
    );

    if (!service) {
      console.log("Servicio no encontrado");
      return; // Si el servicio no se encuentra, salimos de la función
    }

    if (service.slug !== courseSlug) {
      console.log("Curso no encontrado en este servicio");
      return;
    }

    // Si todo está bien, obtenemos el temario
    setTemario(service.contenidoHtml);
  }, [serviceId, courseSlug]);

  if (!temario) {
    return <h2>Cargando...</h2>;
  }

  return (
    <section className="Temarios">
      <div className="Temarios__contentall">
        <div className="Temarios__strcuct">
          <div
            className="Temario"
            dangerouslySetInnerHTML={{ __html: temario }}
          />
        </div>
      </div>
    </section>
  );
};
