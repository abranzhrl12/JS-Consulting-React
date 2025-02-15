import "./containerTemario.scss";

export const ContainerTemario = ({ contenidoHtml, tNombre,imageurl }) => {
  if (!contenidoHtml) {
    return <h2>Cargando...</h2>;
  }
  const capitalizeText = (text) => {
    if (!text) return ""; // Evita errores si `text` es undefined o null
    return text
      .toLowerCase()
      .split(" ") // Divide el texto en palabras
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitaliza cada palabra
      .join(" "); // Une las palabras nuevamente
  };
  return (
    <section className="Temarios">
      <div className="Temarios__contentall">
        <div className="Temarios__strcuct">
          <div
            className="Temario"
            dangerouslySetInnerHTML={{ __html: contenidoHtml }}
          />
        </div>
        <div className="Temarios__images">
          <div>
            <img src={imageurl} alt="" />
          </div>
          <div>
            <h4 className="Temarios__imagesTitle">Certifícate como:</h4>
            <p>
              {`  Certificado por haber aprobado el curso de ${capitalizeText(
                tNombre
              )} por JS Consulting`}
            </p>
          </div>
        </div>
        <div className="Temarios__location">
          <h4>LUGAR:</h4>
          <p>
            CETAR JS: Los Sauces de Cajamarquilla Mz Lote 13 - Lurigancho
            Chosica
          </p>
          <p>
            El curso también se puede realizar en sus instalaciones, el temario
            y la práctica se adecuará de acuerdo a las condiciones de sus
            instalaciones.
          </p>
        </div>
      </div>
    </section>
  );
};
