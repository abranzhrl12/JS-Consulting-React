// import { services } from "../../data/servicesData"; // Importar datos
// import { Link } from "react-router-dom";

// export const ServicesList = () => {
//   return (
//     <div className="Services">
//       <div className="Services__contentall">
//         <div className="Services__grid">
//           {services.map((service) => (
//             <Link
//               key={service.id}
//               to={`/servicios/${service.id}`}
//               className="Services-Card"
//             >
//               <img
//                 className="Services-Card__img"
//                 src={service.image}
//                 alt={service.title}
//                 loading="lazy"
//               />
//               <h3 className="Services-Card__title">{service.title}</h3>
//               <p className="Services-Card__paragraph">{service.description}</p>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategoryStore from "../../store/categoryStore";
import { SkeletonCard } from "../../components/animations/SkeletonCard";

export const ServicesList = ({ category }) => {
  // Extraemos las categorías del store
  const { categories } = useCategoryStore();

  // Componente interno para cada tarjeta de servicio
  const ServiceCard = ({ category }) => {
    const [minDelayPassed, setMinDelayPassed] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    // Inicia un timer de 300ms para mostrar el skeleton
    useEffect(() => {
      const timer = setTimeout(() => {
        setMinDelayPassed(true);
      }, 0);
      return () => clearTimeout(timer);
    }, []);

    // Cuando la imagen se carga, actualizamos el estado
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    // Se muestra el skeleton mientras no se cumpla el delay mínimo o la imagen no esté cargada
    const showSkeleton = !minDelayPassed || !imageLoaded;

    return (
      <Link
        // Aquí usamos tUrlSlug para construir la URL
        // Aquí usamos tUrlSlug para construir la URL
        to={`/servicios/${category.tUrlSlug}`}
        className="Services-Card"
      >
        <div
          className="Services-Card__img-wrapper"
          style={{ position: "relative" }}
        >
          <img
            className="Services-Card__img"
            src={category.tImagenUrl}
            alt={category.tNombre}
            loading="lazy"
            onLoad={handleImageLoad}
          />
          {showSkeleton && (
            <div
              className="Services-Card__skeleton-overlay"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <SkeletonCard />
            </div>
          )}
        </div>
        <h3 className="Services-Card__title">{category.tNombre}</h3>
        <p className="Services-Card__paragraph">{category.tDescripcion}</p>
      </Link>
    );
  };

  // Si la data aún no está cargada, mostramos unos skeletons (o un mensaje de carga)
  if (!categories || categories.length === 0) {
    return (
      <div className="Services">
        <div className="Services__contentall">
          <div className="Services__grid">
            {Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Renderizamos las categorías, filtrando cualquier elemento undefined
  return (
    <div className="Services">
      <div className="Services__contentall">
        <div className="Services__grid">
          {categories
            .filter((category) => category) // Filtramos elementos undefined o nulos
            .map((category) => (
              <ServiceCard key={category.iIdCategoria} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};
