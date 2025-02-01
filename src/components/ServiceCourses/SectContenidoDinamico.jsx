// import { useParams } from "react-router-dom";
// import { services } from "../../data/servicesData";

// export const SectContenidoDinamico = () => {
//   const { serviceId } = useParams(); // Obtener el parámetro dinámico de la URL

//   // Buscar el servicio correspondiente en los datos
//   const selectedService = services.find((service) => service.id === serviceId);

//   if (!selectedService) {
//     return <h1>Servicio no encontrado</h1>; // Manejar el caso de error
//   }

//   return (
//     <section className="contenido">
//       <div className="contenido__contentall">
//         <div className="contenido-dinamico">
//           <h1 className="contenido-dinamico__titulo">
//             {selectedService.title}
//           </h1>
//           <p className="contenido-dinamico__descripcion">
//             {selectedService.details}
//           </p>
//           <h2 className="contenido-dinamico__subtitle">Cursos Disponibles:</h2>
//           <ul className="contenido-dinamico__lista">
//             {selectedService.availableCourses.map((course, index) => (
//               <li key={index}>{course}</li>
//             ))}
//           </ul>
//         </div>
//         <div className="contenido__form">
//           <h2 className="contenido__form-title">Contáctanos</h2>
//           <p className="contenido__form-paragraph">
//             Déjenos sus datos y nos pondremos en contacto
//           </p>
//           <div className="contenido__form-grid">
//             <input
//               type="text"
//               className="contenido__form-input"
//               placeholder="Nombre y Apellido"
//             />
//             <input
//               type="text"
//               className="contenido__form-input"
//               placeholder="Su email"
//             />
//             <input
//               type="text"
//               className="contenido__form-input"
//               placeholder="Teléfono Celular"
//             />
//             <textarea
//               className="contenido__form-TextArea"
//               name=""
//               id=""
//               placeholder="Mensaje/Requerimiento"
//             ></textarea>
//             <button className="contenido__form-btn">Cotizar</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// import { useParams } from "react-router-dom";

// import { HeaderDinamico } from "../HeaderDinamico/HeaderDinamico"; // Importa el componente HeaderDinamico

// export const SectContenidoDinamico = () => {
//   return (
//     <>
//       // Pasamos el banner como prop al HeaderDinamico tBannerUrl
//       <HeaderDinamico banner={null} />

//      <section className="contenido">
//        <div className="contenido__contentall">
//         <div className="contenido-dinamico">
//            //aca debe estar   "tHtml":
//         </div>
//         <div className="contenido__form">
//           <h2 className="contenido__form-title">Contáctanos</h2>
//            <p className="contenido__form-paragraph">
//              Déjenos sus datos y nos pondremos en contacto
//            </p>
//            <div className="contenido__form-grid">
//             <input
//                type="text"
//               className="contenido__form-input"
//               placeholder="Nombre y Apellido"
//              />
//              <input
//                type="text"
//                className="contenido__form-input"
//                placeholder="Su email"
//              />
//              <input
//               type="text"
//                className="contenido__form-input"
//               placeholder="Teléfono Celular"
//             />
//              <textarea
//               className="contenido__form-TextArea"
//                name=""
//               id=""
//               placeholder="Mensaje/Requerimiento"
//             ></textarea>
//             <button className="contenido__form-btn">Cotizar</button>
//            </div>
//         </div>
//        </div>
//      </section>
//     </>
//   );
// };

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderDinamico } from "../HeaderDinamico/HeaderDinamico";
import { useServiceDetailStore } from "../../store/useServiceDetailStore";
// Puedes usar un componente de loading para el contenido si lo deseas
// import { Skeleton } from "../../components/animations/Skeleton";

export const SectContenidoDinamico = () => {
  // Extraemos el slug de la URL
  const { slug } = useParams();

  // Estado local para guardar el detalle del servicio y el estado de carga
  const [serviceDetail, setServiceDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  // Obtenemos la función fetchServiceDetail desde nuestro store de detalles
  const fetchServiceDetail = useServiceDetailStore(
    (state) => state.fetchServiceDetail
  );

  useEffect(() => {
    const loadDetail = async () => {
      try {
        // Llamamos a la función del store para obtener el detalle basado en el slug
        const detail = await fetchServiceDetail(slug);
        setServiceDetail(detail);
      } catch (error) {
        console.error("❌ Error al cargar el detalle del servicio:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDetail();
  }, [slug, fetchServiceDetail]);

  return (
    <>
      {/* Siempre se renderiza el HeaderDinamico.
          Mientras no se tenga la data, se le pasará banner={null}, lo que hará que muestre su skeleton. */}
      <HeaderDinamico
        banner={serviceDetail ? serviceDetail.tBannerUrl : null}
      />

      <section className="contenido">
        <div className="contenido__contentall">
          <div className="contenido-dinamico">
            {loading ? (
              // Aquí puedes optar por un indicador de carga para el contenido,
              // o dejarlo vacío mientras se carga
              <div>Cargando contenido...</div>
            ) : (
              // Renderizamos el HTML almacenado en tHtml cuando ya se tiene la data
              <div
                dangerouslySetInnerHTML={{ __html: serviceDetail.tHtml }}
              ></div>
            )}
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
                placeholder="Mensaje/Requerimiento"
              ></textarea>
              <button className="contenido__form-btn">Cotizar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
