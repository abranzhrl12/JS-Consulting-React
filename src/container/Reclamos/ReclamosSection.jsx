import { useState, useRef } from "react";
import { InputField } from "../../components/InputField/InputField";
import { DropdownSelect } from "../../components/DropdownSelect/DropdownSelect";
import { CountryDropdown } from "../../components/CountryDropdown/CountryDropdown";
import { RadioGroup } from "../../components/RadioGroup/RadioGroup";
import { TextAreaField } from "../../components/TextAreaField/TextAreaField";
import { UploadButton } from "../../components/UploadButton/UploadButton";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { ModalForm } from "../../components/ModalForm/ModalForm";
// Si deseas conservar estilos separados, puedes descomentar
import "../../components/FormularioCliente/FormularioCliente.scss";
// import "./InformacionReclamo.scss";
import "../../components/InformacionReclamo/InformacionReclamo.scss";
// import "./descripcionecho.scss";
import "../../components/DescripcionHechos/descripcionecho.scss";
import "./reclamos.scss";
import logoBuzon from "../../assets/IconoBuzon.svg";
import uploadicon from "../../assets/iconoupload.svg";

export const ReclamosSection = () => {
  const uploadButtonRef = useRef(null);
  const [formErrors, setFormErrors] = useState({ montoReclamado: "" });

  // Estado para el modal
  const [modalState, setModalState] = useState({
    status: "", // "success" | "error" | ""
    title: "",
    message: "",
  });

  // Cerrar el modal
  const handleCloseModal = () => {
    setModalState({ status: "", title: "", message: "" });
  };

  // Estado único para todo el formulario
  const [formData, setFormData] = useState({
    // Datos del Cliente
    nombre: "",
    apellido: "",
    tipoDocumento: "DNI",
    numeroDocumento: "",
    paisResidencia: "",
    direccion: "",
    // Empresa del cliente (obligatorio si tipoDocumento === RUC)
    tEmpresa: "",
    codigoPais: "+51",
    telefono: "",
    email: "",
    menorDeEdad: false,

    // Información de Reclamo
    tipoSolicitud: 0, // 0 si no ha elegido nada
    identificacionProducto: "",
    lugarSolicitud: "",
    montoReclamado: "",
    razon: "",

    // Descripción de los Hechos
    detalleQueja: "",
    tPedidoConcreto: "", // Nuevo campo independiente
    codigoReserva: "",
    ruc: "",
    // Empresa asociada a la reserva
    empresaReserva: "",
    archivos: [],
  });

  // Maneja cambios en inputs
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // Maneja el cambio del checkbox
  const handleCheckboxChange = () => {
    setFormData((prevData) => ({
      ...prevData,
      menorDeEdad: !prevData.menorDeEdad,
    }));
  };

  // Resetear "numeroDocumento" al cambiar tipo de documento
  const handleChangeTipoDocumento = (option) => {
    setFormData((prevData) => ({
      ...prevData,
      tipoDocumento: option.value,
      numeroDocumento: "", // Resetea
    }));
  };
  const getMontoErrorMessage = () => {
    if (formData.tipoSolicitud === 1 || formData.tipoSolicitud === 2) {
      return formData.montoReclamado.trim()
        ? "" // No hay error si ya ingresó el monto
        : "El monto es obligatorio para Reclamos y Quejas.";
    }
    return ""; // No hay error si la solicitud es "Sugerencia"
  };
  const validateMontoReclamado = (value) => {
    // Si no es Reclamo (1) o Queja (2), no validar el monto
    if (formData.tipoSolicitud !== 1 && formData.tipoSolicitud !== 2) {
      setFormErrors((prev) => ({ ...prev, montoReclamado: "" }));
      return "";
    }

    if (!value.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        montoReclamado: "El monto es obligatorio",
      }));
      return "El monto es obligatorio";
    }

    if (!/^\d+(\.\d{0,2})?$/.test(value)) {
      setFormErrors((prev) => ({
        ...prev,
        montoReclamado: "Debe ser un número válido con hasta 2 decimales",
      }));
      return "Debe ser un número válido con hasta 2 decimales";
    }

    setFormErrors((prev) => ({ ...prev, montoReclamado: "" }));
    return "";
  };

  // Validaciones generales antes de enviar
  const validateForm = () => {
    const errors = [];

    // Permitir letras, espacios, tildes, ñ
    const namePattern = /^[a-zA-ZÁÉÍÓÚáéíóúñÑÜü\s]+$/;

    // Nombre: obligatorio, solo letras (incluyendo tildes y ñ)
    if (!namePattern.test(formData.nombre.trim()) || !formData.nombre.trim()) {
      errors.push(
        "El nombre es obligatorio y solo debe contener letras válidas."
      );
    }

    // Apellido: obligatorio, solo letras (incluyendo tildes y ñ)
    if (
      !namePattern.test(formData.apellido.trim()) ||
      !formData.apellido.trim()
    ) {
      errors.push(
        "El apellido es obligatorio y solo debe contener letras válidas."
      );
    }

    // Tipo Documento: DNI => 8 dígitos, RUC => 11 dígitos
    if (formData.tipoDocumento === "DNI") {
      if (!/^[0-9]{8}$/.test(formData.numeroDocumento)) {
        errors.push("El DNI debe tener exactamente 8 dígitos numéricos.");
      }
    } else {
      // RUC
      if (!/^[0-9]{11}$/.test(formData.numeroDocumento)) {
        errors.push("El RUC debe tener exactamente 11 dígitos numéricos.");
      }
      // Si es RUC, la empresa (tEmpresa) es obligatoria
      if (!formData.tEmpresa.trim()) {
        errors.push("La empresa es obligatoria cuando el documento es RUC.");
      }
    }

    // País de residencia: obligatorio
    if (!formData.paisResidencia.trim()) {
      errors.push("El país de residencia es obligatorio.");
    }

    // Dirección: obligatoria
    if (!formData.direccion.trim()) {
      errors.push("La dirección es obligatoria.");
    }

    // Teléfono: solo números, 9 dígitos
    if (!/^[0-9]{9}$/.test(formData.telefono)) {
      errors.push("El teléfono debe tener 9 dígitos numéricos.");
    }

    // Correo: válido
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Ingrese un correo electrónico válido.");
    }

    // Tipo de solicitud: obligatorio
    if (!formData.tipoSolicitud) {
      errors.push(
        "Debe escoger un tipo de solicitud (Reclamo, Queja o Sugerencia)."
      );
    }

    // Identificación, lugar, razón: obligatorios
    if (!formData.identificacionProducto.trim()) {
      errors.push("La identificación del producto / servicio es obligatoria.");
    }
    if (!formData.lugarSolicitud.trim()) {
      errors.push("El lugar de la solicitud es obligatorio.");
    }
    if (!formData.razon.trim()) {
      errors.push("La razón es obligatoria.");
    }

    // Monto reclamado:
    // Dependiendo del tipo de solicitud:
    // Si es "Reclamo" (1) => monto es obligatorio
    // Si es "Queja" (2) o "Sugerencia" (3) => monto puede ser opcional
    if (formData.tipoSolicitud === 1 || formData.tipoSolicitud === 2) {
      // Monto requerido
      if (!/^[0-9]+$/.test(formData.montoReclamado.trim())) {
        errors.push(
          "El monto del servicio reclamado es obligatorio y solo debe contener dígitos."
        );
      }
    }
    // Si es 2 o 3, no forzamos el monto.

    // Descripción (detalleQueja): obligatorio
    if (!formData.detalleQueja.trim()) {
      errors.push("La descripción de los hechos (Detalle) es obligatoria.");
    }

    // Pedido concreto: obligatorio
    if (!formData.tPedidoConcreto.trim()) {
      errors.push("El pedido concreto es obligatorio.");
    }

    return errors;
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ejecutar validaciones
    const errors = validateForm();
    if (errors.length > 0) {
      // Si hay errores, mostramos el primero en el modal
      setModalState({
        status: "error",
        title: "Error al Enviar",
        message: errors[0],
      });
      return;
    }

    // Si pasa validaciones, obtener archivos
    const archivos = uploadButtonRef.current
      ? uploadButtonRef.current.getFiles()
      : [];

    // Crear FormData
    const formDataToSend = new FormData();

    // Datos del Cliente
    formDataToSend.append("tNombre", formData.nombre);
    formDataToSend.append("tApellido", formData.apellido);
    formDataToSend.append("tTipoDocumento", formData.tipoDocumento);
    formDataToSend.append("tNroDocumento", formData.numeroDocumento);
    formDataToSend.append("tPaisResidencia", formData.paisResidencia);
    formDataToSend.append("tDireccion", formData.direccion);
    formDataToSend.append("tEmpresa", formData.tEmpresa);
    formDataToSend.append("tTelefono", formData.codigoPais + formData.telefono);
    formDataToSend.append("tEmail", formData.email);
    formDataToSend.append("lMenor", formData.menorDeEdad ? "true" : "false");

    // Información de Reclamo
    formDataToSend.append("iIdTipoReclamacion", formData.tipoSolicitud);
    formDataToSend.append("tIdentificacion", formData.identificacionProducto);
    formDataToSend.append("tLugarSolicitud", formData.lugarSolicitud);
    if (formData.montoReclamado) {
      formDataToSend.append("dMonto", formData.montoReclamado);
    }

    formDataToSend.append("tRazon", formData.razon);

    // Descripción de los Hechos
    formDataToSend.append("tDetalle", formData.detalleQueja);
    formDataToSend.append("tPedidoConcreto", formData.tPedidoConcreto);

    // Solo agregar campos opcionales si no están vacíos
    if (formData.codigoReserva.trim()) {
      formDataToSend.append("tCodReserva", formData.codigoReserva);
    }
    if (formData.ruc.trim()) {
      formDataToSend.append("tRuc", formData.ruc);
    }
    if (formData.empresaReserva.trim()) {
      formDataToSend.append("tEmpresaReserva", formData.empresaReserva);
    }

    // Agregar archivos
    archivos.forEach((file) => {
      formDataToSend.append("files", file, file.name);
    });

    try {
      console.log("Datos a enviar (FormData):");
      for (let pair of formDataToSend.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
      }

      const response = await fetch("https://api.jsconsulting.pe/complaint", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Hubo un problema en el servidor.");
      }

      const responseData = await response.json();
      const serverMessage =
        responseData?.message || "Su reclamo se envió correctamente.";

      setModalState({
        status: "success",
        title: "Envío Exitoso",
        message: serverMessage,
      });

      // Limpiar formulario
      setFormData({
        nombre: "",
        apellido: "",
        tipoDocumento: "DNI",
        numeroDocumento: "",
        paisResidencia: "",
        direccion: "",
        tEmpresa: "",
        codigoPais: "+51",
        telefono: "",
        email: "",
        menorDeEdad: false,
        tipoSolicitud: 0,
        identificacionProducto: "",
        lugarSolicitud: "",
        montoReclamado: "",
        razon: "",
        detalleQueja: "",
        tPedidoConcreto: "",
        codigoReserva: "",
        ruc: "",
        empresaReserva: "",
        archivos: [],
      });

      // Limpiar archivos adjuntos
      if (uploadButtonRef.current) {
        uploadButtonRef.current.clearFiles();
      }
    } catch (error) {
      setModalState({
        status: "error",
        title: "Error al Enviar",
        message: error.message || "Error desconocido.",
      });
      console.log("Error en envío:", error);
    }
  };

  return (
    <div className="Reclamos">
      {/* Render condicional del Modal */}
      {modalState.status && (
        <ModalForm
          status={modalState.status}
          title={modalState.title}
          message={modalState.message}
          onClose={handleCloseModal}
        />
      )}

      <div className="Reclamos__contentall">
        <div className="Reclamos__texts">
          <div>
            <img src={logoBuzon} alt="Buzón" />
            <h1>Buzón de quejas, reclamos y sugerencias</h1>
          </div>
          <p>
            Para realizar una queja, reclamo o sugerencia, siga los pasos
            indicados a continuación:
          </p>
        </div>

        {/* Formulario Unificado */}
        <form className="Reclamos__formglobal" onSubmit={handleSubmit}>
          {/* Datos del Cliente */}
          <div className="form-section">
            <div className="Reclamos__form">
              <h2>Datos Del Cliente</h2>
              <div className="Reclamos__form-grid">
                <InputField
                  className="Reclamos__form-grig-input Reclamos__form-grig-input-inpt1"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={(value) => handleInputChange("nombre", value)}
                  // Permitir letras, tildes, ñ
                  validate={(value) =>
                    /^[a-zA-ZÁÉÍÓÚáéíóúñÑÜü\s]+$/.test(value.trim()) &&
                    value.trim().length > 0
                  }
                  errorMessage="El nombre es obligatorio y solo debe contener letras válidas."
                />

                <InputField
                  className="Reclamos__form-grig-input Reclamos__form-grig-input-inpt2"
                  placeholder="Apellido"
                  value={formData.apellido}
                  onChange={(value) => handleInputChange("apellido", value)}
                  validate={(value) =>
                    /^[a-zA-ZÁÉÍÓÚáéíóúñÑÜü\s]+$/.test(value.trim()) &&
                    value.trim().length > 0
                  }
                  errorMessage="El apellido es obligatorio y solo debe contener letras válidas."
                />

                <div className="Reclamos__form-grig-Group Reclamos__form-grig-input-group">
                  <DropdownSelect
                    className="custom_select-Documento Reclamos__form-grig-input-inptip"
                    options={[
                      { value: "DNI", label: "DNI" },
                      { value: "RUC", label: "RUC" },
                    ]}
                    placeholder="Tipo de Documento"
                    value={formData.tipoDocumento}
                    onChange={handleChangeTipoDocumento}
                  />

                  <InputField
                    className="Reclamos__form-grig-input Reclamos__form-grig-input--wd Reclamos__form-grig-input-inptDoc"
                    placeholder="Número de documento"
                    value={formData.numeroDocumento}
                    type="text"
                    inputMode="numeric"
                    pattern={
                      formData.tipoDocumento === "DNI"
                        ? "[0-9]{8}"
                        : "[0-9]{11}"
                    }
                    onChange={(value) => {
                      if (/^\d*$/.test(value)) {
                        handleInputChange(
                          "numeroDocumento",
                          value.slice(
                            0,
                            formData.tipoDocumento === "DNI" ? 8 : 11
                          )
                        );
                      }
                    }}
                    maxLength={formData.tipoDocumento === "DNI" ? 8 : 11}
                    errorMessage={
                      formData.tipoDocumento === "DNI"
                        ? "El DNI debe tener 8 dígitos numéricos."
                        : "El RUC debe tener 11 dígitos numéricos."
                    }
                  />
                </div>

                <InputField
                  className="Reclamos__form-grig-input"
                  placeholder="País de residencia"
                  value={formData.paisResidencia}
                  onChange={(value) =>
                    handleInputChange("paisResidencia", value)
                  }
                  validate={(value) => value.trim().length > 0}
                  errorMessage="El país de residencia es obligatorio"
                />

                <InputField
                  className="Reclamos__form-grig-input Reclamos__form-grig-input-inpt3"
                  placeholder="Dirección"
                  value={formData.direccion}
                  onChange={(value) => handleInputChange("direccion", value)}
                  validate={(value) => value.trim().length > 0}
                  errorMessage="La dirección es obligatoria"
                />

                <div className="Reclamos__form-grig-input-inptEmpresa">
                  <InputField
                    className="Reclamos__form-grig-input6"
                    placeholder="Empresa"
                    value={formData.tEmpresa}
                    onChange={(value) => handleInputChange("tEmpresa", value)}
                    // Validar sólo si el tipoDocumento es RUC, sino puede quedar vacío
                  />
                </div>
              </div>

              <div className="Reclamos__form-grig-title">
                <h2>Datos del Contacto</h2>
              </div>

              <div className="Reclamos__form-grid-2">
                <div className="Reclamos__form-grig-Group Reclamos__form-grig-telf">
                  <CountryDropdown
                    className="dropdown"
                    onSelect={(country) =>
                      handleInputChange("codigoPais", country.code)
                    }
                    defaultValue={formData.codigoPais}
                  />
                  <InputField
                    className="Reclamos__form-grig-input Reclamos__form-grig-input--wd"
                    placeholder="Teléfono"
                    inputMode="numeric"
                    type="text"
                    maxLength={9}
                    value={formData.telefono}
                    onChange={(value) => handleInputChange("telefono", value)}
                    validate={(value) => /^[0-9]{9}$/.test(value)}
                    errorMessage="El teléfono debe tener 9 dígitos"
                  />
                </div>

                <InputField
                  className="Reclamos__form-grig-input Reclamos__form-grig-input-inpt5"
                  placeholder="Correo electrónico"
                  type="email"
                  value={formData.email}
                  onChange={(value) => handleInputChange("email", value)}
                  validate={(value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)}
                  errorMessage="Ingrese un email válido"
                />
              </div>

              <div className="Reclamos__label">
                <input
                  type="checkbox"
                  id="check"
                  checked={formData.menorDeEdad}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="check">Soy menor de edad</label>
              </div>
            </div>
          </div>

          {/* Información del Reclamo */}
          <div className="form-section">
            <div className="informacion-reclamo">
              <h2 className="informacion-reclamo__title">
                Información del reclamo o queja
              </h2>

              <div className="informacion-reclamo__section">
                <h3 className="informacion-reclamo__subtitle">
                  Tipo de solicitud
                </h3>
                {/* <RadioGroup
                  name="tipoSolicitud"
                  value={formData.tipoSolicitud}
                  onChange={(value) =>
                    handleInputChange("tipoSolicitud", Number(value))
                  }
                  options={[
                    { value: 1, label: "Reclamo" },
                    { value: 2, label: "Queja" },
                    { value: 3, label: "Sugerencia" },
                  ]}
                /> */}
                <RadioGroup
                  name="tipoSolicitud"
                  value={formData.tipoSolicitud}
                  onChange={(value) => {
                    handleInputChange("tipoSolicitud", Number(value));

                    // Si cambia a Reclamo (1) o Queja (2), forzar la validación del monto
                    if (value === 1 || value === 2) {
                      getMontoErrorMessage();
                    }
                  }}
                  options={[
                    { value: 1, label: "Reclamo" },
                    { value: 2, label: "Queja" },
                    { value: 3, label: "Sugerencia" },
                  ]}
                />
              </div>

              <div className="informacion-reclamo__descripciones">
                <div className="informacion-reclamo__descripcion">
                  <strong>Reclamo:</strong> Disconformidad relacionada a los
                  productos o servicios.
                </div>
                <div className="informacion-reclamo__descripcion">
                  <strong>Queja:</strong> Disconformidad no relacionada a los
                  productos o servicios; malestar o descontento en relación a la
                  atención al público.
                </div>
                <div className="informacion-reclamo__descripcion">
                  <strong>Sugerencia:</strong> Una sugerencia es algo que se
                  propone, insinúa o sugiere.
                </div>
              </div>

              <div className="informacion-reclamo__sectiontwo">
                <InputField
                  className="informacion-reclamo__input"
                  placeholder="Identificación del producto / servicio"
                  value={formData.identificacionProducto}
                  onChange={(val) =>
                    handleInputChange("identificacionProducto", val)
                  }
                />

                <InputField
                  className="informacion-reclamo__input"
                  placeholder="Lugar de la solicitud"
                  value={formData.lugarSolicitud}
                  onChange={(val) => handleInputChange("lugarSolicitud", val)}
                />

                <InputField
                  className="informacion-reclamo__input"
                  placeholder="Monto del servicio reclamado"
                  value={formData.montoReclamado}
                  validate={() => {
                    /^[a-zA-ZÁÉÍÓÚáéíóúñÑÜü\s]+$/.test(value.trim()) &&
                      value.trim().length > 0;
                  }}
                  onChange={(val) => {
                    // Permitir solo números con hasta 2 decimales
                    if (/^\d+(\.\d{0,2})?$/.test(val) || val === "") {
                      handleInputChange("montoReclamado", val);
                    }
                  }}
                  errorMessage={getMontoErrorMessage()} // Mensaje de error dinámico
                />

                <InputField
                  className="informacion-reclamo__input"
                  placeholder="Razón"
                  value={formData.razon}
                  onChange={(val) => handleInputChange("razon", val)}
                />
              </div>
            </div>
          </div>

          {/* Descripción de los Hechos */}
          <div className="form-section">
            <div className="descripcion-hechos">
              <div className="descripcion-hechos__contents">
                <h3 className="descripcion-hechos__title">
                  Descripción de los hechos
                </h3>
                <div className="descripcion-hechos__r1">
                  <p>Detalle del reclamo</p>
                  <TextAreaField
                    placeholder=""
                    value={formData.detalleQueja}
                    onChange={(value) =>
                      handleInputChange("detalleQueja", value)
                    }
                    minHeight="50px"
                  />
                </div>
                <div className="descripcion-hechos__r2">
                  <p>Pedido concreto que motiva el reclamo o queja</p>
                  <TextAreaField
                    placeholder=""
                    value={formData.tPedidoConcreto}
                    onChange={(value) =>
                      handleInputChange("tPedidoConcreto", value)
                    }
                    minHeight="50px"
                  />
                </div>

                <p className="descripcion-hechos__info">
                  Si su reclamo o queja está asociado a una reserva, ingresa la
                  siguiente información
                </p>

                <div className="descripcion-hechos__content">
                  <InputField
                    className="descripcion-hechos__input"
                    placeholder="Código de reserva"
                    value={formData.codigoReserva}
                    onChange={(value) =>
                      handleInputChange("codigoReserva", value)
                    }
                  />

                  <InputField
                    className="descripcion-hechos__input"
                    placeholder="RUC"
                    value={formData.ruc}
                    onChange={(value) => handleInputChange("ruc", value)}
                  />

                  <InputField
                    className="descripcion-hechos__input"
                    placeholder="Empresa"
                    value={formData.empresaReserva}
                    onChange={(value) =>
                      handleInputChange("empresaReserva", value)
                    }
                  />
                </div>
              </div>

              <div className="descripcion-hechos__contents">
                <h3>Datos Adjuntos</h3>
                <p>
                  Si dispones de documentos relacionados a tu caso, puedes
                  adjuntarlos. Es opcional. Puedes adjuntar máximo 3 archivos.
                  Formatos permitidos: pdf, doc, jpeg, jpg, png.
                </p>

                <UploadButton ref={uploadButtonRef}>
                  {({ selectedFiles, error }) => (
                    <>
                      <img src={uploadicon} alt="Subir archivo" />
                      <span className="text">
                        {selectedFiles.length > 0
                          ? `${selectedFiles.length} archivo(s) listo(s)`
                          : "Adjuntar Archivo"}
                      </span>
                      {error && <div className="error">{error}</div>}
                    </>
                  )}
                </UploadButton>
              </div>
            </div>
          </div>

          {/* Botón Enviar */}
          <SubmitButton className="submit-buttonreclamos">Enviar</SubmitButton>
        </form>
      </div>
    </div>
  );
};
