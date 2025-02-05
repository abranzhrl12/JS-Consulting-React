import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HeaderDinamico } from "../HeaderDinamico/HeaderDinamico";
import { useServiceDetailStore } from "../../store/useServiceDetailStore";
import { TextAreaField } from "../TextAreaField/TextAreaField";
import { ContactForm } from "../ContactForm/ContactForm";

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
              <>
                <h1 className="contenido__title">{serviceDetail.tNombre}</h1>
                <div
                  dangerouslySetInnerHTML={{
                    __html: serviceDetail.tHtml.replaceAll("&nbsp;", " "),
                  }}
                ></div>
              </>
            )}
          </div>

          <div className="contenido__form">
            <ContactForm />
            {/* <h2 className="contenido__form-title">Contáctanos</h2>
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
              <TextAreaField />
              <SubmitButton>Cotizar</SubmitButton>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
