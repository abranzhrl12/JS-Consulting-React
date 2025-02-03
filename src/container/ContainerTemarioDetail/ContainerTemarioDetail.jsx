import { ItemTemariodetail } from "../../components/ItemTemariodetail/ItemTemariodetail";
import "./container-temariodetail.scss";

export const ContainerTemarioDetail = ({ detalles }) => {
  return (
    <section className="container-temariodetail">
      {detalles.map((detalle, index) => (
        <div key={index} className="container-temariodetail__content">
          <h3 className="container-temariodetail__title">
            <ol className="container-temariodetail__title-ol">
              <li className="container-temariodetail__title-li">
                {detalle.tTitulo} - {detalle.tInicio}
              </li>
            </ol>
          </h3>

          <div className="container-temariodetail__element">
            <ItemTemariodetail detalle={detalle} />
          </div>
        </div>
      ))}
    </section>
  );
};
