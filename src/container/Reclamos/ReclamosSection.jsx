import { FormularioCliente } from "../../components/FormularioCliente/FormularioCliente";
import "./reclamos.scss";
import logoBuzon from "../../assets/IconoBuzon.svg";
import { InformacionReclamo } from "../../components/InformacionReclamo/InformacionReclamo";
import { DescripcionHechos } from "../../components/DescripcionHechos/DescripcionHechos";

export const ReclamosSection = () => {
  const handleFormSubmit = (formData) => {
    console.log("Datos enviados:", formData);
    // Aquí puedes procesar los datos enviados
  };
  return (
    <div className="Reclamos">
      <div className="Reclamos__contentall">
        <div className="Reclamos__texts">
          <img src={logoBuzon} alt="" />
          <h1>Buzón de quejas, reclamos y sugerencias</h1>
          <p>
            Para realizar una queja, reclamo o sugerencia, siga los pasos
            indicados a continuación:
          </p>
        </div>
        <div>
          <FormularioCliente onSubmit={handleFormSubmit} />
        </div>

        <InformacionReclamo />

        <DescripcionHechos />
      </div>
    </div>
  );
};
