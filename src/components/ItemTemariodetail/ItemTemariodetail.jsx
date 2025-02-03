import "./itemTemaridetail.scss";

// Mapeo de etiquetas con sus iconos fijos
const courseIcons = {
  Inicio: "/assets/cursotemario/iconCalendar.svg",
  Horario: "/assets/cursotemario/iconclock.svg",
  Duración: "/assets/cursotemario/iconTime.svg",
  Modalidad: "/assets/cursotemario/iconModality.svg",
};

export const ItemTemariodetail = ({ detalle }) => {
  if (!detalle) return <p>Detalle no encontrado</p>;

  const { tTitulo, tInicio, tHorario, tDuracion, tModalidad } = detalle;

  // Lista de detalles con iconos
  const courseDetails = [
    {
      label: "Inicio",
      icon: courseIcons["Inicio"],
      value: tInicio || "Fecha no disponible",
    },
    {
      label: "Horario",
      icon: courseIcons["Horario"],
      value: tHorario || "Hora no disponible",
    },
    {
      label: "Duración",
      icon: courseIcons["Duración"],
      value: tDuracion || "Duración no disponible",
    },
    {
      label: "Modalidad",
      icon: courseIcons["Modalidad"],
      value: tModalidad || "Modalidad no disponible",
    },
  ];

  return (
    <div className="course-cardinfo">
      {courseDetails.map((detail, index) => (
        <div key={index} className="course-detail">
          <img src={detail.icon} alt={detail.label} className="icon-img" />
          <div>
            <strong>{detail.label}:</strong>
            <p>{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
