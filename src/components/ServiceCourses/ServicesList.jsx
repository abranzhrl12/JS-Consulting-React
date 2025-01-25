import { services } from "../../data/servicesData"; // Importar datos
import { Link } from "react-router-dom";

export const ServicesList = () => {
  return (
    <div className="Services">
      <div className="Services__contentall">
        <div className="Services__grid">
          {services.map((service) => (
            <Link
              key={service.id}
              to={`/servicios/${service.id}`}
              className="Services-Card"
            >
              <img
                className="Services-Card__img"
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <h3 className="Services-Card__title">{service.title}</h3>
              <p className="Services-Card__paragraph">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
