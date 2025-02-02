import { ButtonInfoRed } from "../buttoninfored/ButtonInfoRed";
import { GoogleMap } from "../GoogleMap/GoogleMap";
export const SectContactMap = () => {
  return (
    <section className="section-contact-Map" id="DondeUbicarnos">
      <div className="section-contact-Map__lineRed">
        <h2>¿DÓNDE UBICARNOS?</h2>
      </div>
      <div className="section-contact-Map__contentall">
        <div className="section-contact-Map__info">
          <ul className="section-contact-Map__info-list">
            <li>
              Conoce donde se ubica nuestro centro de entrenamiento JS
              Consulting
            </li>
            <li>
              Los Sauces de Cajamarquilla Mz B Lote 13 Lurigancho - Chosica
            </li>
            <li>
              +51 965 196 333
              <span> administracion@jsconsulting.pe </span>
            </li>
          </ul>
          <ButtonInfoRed>
            <img
              src="/Assets/Img/ContactanosIMG/IconWhiteWhatssap.svg"
              alt=""
            />
            Más Información
          </ButtonInfoRed>
          {/* <button className="section-contact-Map__info-btn">
         
          </button> */}
        </div>
        <GoogleMap />
        {/* <div id="map"></div> */}
      </div>
    </section>
  );
};
