import { datatemarioCursos } from "../../data/datatemario.js";

// Función para obtener el día de la semana a partir de una fecha
const getDayOfWeek = (dateString) => {
  const options = { weekday: "long" }; // Opción para obtener el día de la semana
  const date = new Date(dateString);
  return date.toLocaleDateString("es-ES", options); // Usamos "es-ES" para obtener el día en español
};

export const ItemTemariodetail = ({ courseId }) => {
  // Buscar el curso correspondiente a partir de su ID
  const course = datatemarioCursos.find((curso) => curso.id === courseId);

  // Si no se encuentra el curso, retornar un mensaje de error
  if (!course) {
    return <p>Curso no encontrado</p>;
  }

  const { titulo, date, time, duration, modality } = course;
  const dayOfWeek = date ? getDayOfWeek(date) : null; // Obtener el día de la semana solo si la fecha está presente

  // Detalles del curso
  const courseDetails = [
    {
      label: "Inicio",
      value: date ? `${dayOfWeek}, ${date}` : "Fecha no disponible",
    },
    { label: "Horario", value: time || "Hora no disponible" },
    { label: "Duración", value: duration || "Duración no disponible" },
    { label: "Modalidad", value: modality || "Modalidad no disponible" },
  ];

  return (
    <div className="course-cardinfo">
      {/* Imagen del curso */}
      <img
        src={`https://via.placeholder.com/200x150`} // Cambiar por imagen real si la tienes
        alt="Curso"
        className="course-card__image"
      />
      <div className="course-card__content">
        <h3 className="course-card__title">{titulo}</h3>

        {/* Detalles del curso */}
        <div className="course-card__details">
          {courseDetails.map((detail, index) => (
            <div key={index} className="course-card__item">
              <span className="course-card__label">{detail.label}:</span>
              <span className="course-card__value">{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
