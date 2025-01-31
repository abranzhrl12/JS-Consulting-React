import { ItemTemariodetail } from "../../components/ItemTemariodetail/ItemTemariodetail";
import "./container-temariodetail.scss";
export const ContainerTemarioDetail = () => {
  return (
    <section className="container-temariodetail">
      {/* Usamos el ID de un curso existente */}
      <ItemTemariodetail courseId={1} />
      {/* Puedes cambiar el ID para cargar el otro curso */}
      <ItemTemariodetail courseId={2} />
    </section>
  );
};
