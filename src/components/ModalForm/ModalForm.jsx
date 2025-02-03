import { useEffect } from "react";
import "./ModalForm.scss";
import closeSucces from "../../assets/closeModalsucces.svg";
import closeError from "../../assets/closeModalError.svg";
import iconSuccess from "../../assets/iconSuccesModal.svg";
import iconError from "../../assets/iconErrorModal.svg";

export const ModalForm = ({ status, title, message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3800); // Tiempo total de animación
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`modal ${status}`}>
      <div className="modal-content">
        <div className="modal-close-container">
          <img
            src={status === "success" ? closeSucces : closeError}
            alt="Cerrar modal"
            onClick={onClose}
            className="modal-close"
          />
        </div>

        <div className="modal__content-texts">
          <div className="modal-icon-container">
            <img
              src={status === "success" ? iconSuccess : iconError}
              alt="Estado del modal"
              className="modal-icon"
            />
          </div>

          <div className="modal-texts">
            <h2 className="modal-title">{title}</h2>
            <p className="modal-message">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
