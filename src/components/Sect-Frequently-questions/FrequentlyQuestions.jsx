import { useState } from "react";

export const FrequentlyQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null); // Estado para la pregunta activa

  // Función para alternar preguntas
  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      className="frequently-questions"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="frequently-questions__texts">
        <h2 id="faq-title" className="frequently-questions__title">
          Preguntas Frecuentes
        </h2>
        <div className="frequently-questions__line"></div>
      </div>

      <div className="frequently-questions__contentall">
        <div className="frequently-questions__container">
          {/* Primera columna de preguntas */}
          <div className="frequently-questions__content">
            <div
              className={`frequently-questions__item ${
                activeIndex === 0 ? "active" : ""
              }`}
            >
              <div
                className="frequently-questions__header"
                onClick={() => toggleItem(0)}
              >
                <img
                  src="/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿Cómo me inscribo en los cursos?</p>
              </div>
              {activeIndex === 0 && (
                <p className="frequently-questions__paragraph">
                  Entrar a la opción Sigecap en nuestra página web. Si es la
                  primera vez que deseas inscribirte ingresa a la opción
                  “Registrarme” y seguir los pasos indicados. Si ya cuentas con
                  usuario, completa tus datos y haz click en “Ingresar”.
                </p>
              )}
            </div>
            <div
              className={`frequently-questions__item ${
                activeIndex === 1 ? "active" : ""
              }`}
            >
              <div
                className="frequently-questions__header"
                onClick={() => toggleItem(1)}
              >
                <img
                  src="/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>
                  Si la inducción es para un día lunes ¿Hasta que día podría
                  realizar la inscripción?
                </p>
              </div>
              {activeIndex === 1 && (
                <p className="frequently-questions__paragraph">
                  Hasta el día sábado en el horario de 07:00 am a 4:00 pm.
                </p>
              )}
            </div>
            <div
              className={`frequently-questions__item ${
                activeIndex === 2 ? "active" : ""
              }`}
            >
              <div
                className="frequently-questions__header"
                onClick={() => toggleItem(2)}
              >
                <img
                  src="/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿Puedo inscribirme a un curso de forma particular?</p>
              </div>
              {activeIndex === 2 && (
                <p className="frequently-questions__paragraph">
                  Si, no es necesario pertenecer a una empresa para poder
                  inscribirte en un curso.
                </p>
              )}
            </div>

            <div
              className={`frequently-questions__item ${
                activeIndex === 7 ? "active" : ""
              }`}
            >
              <div
                className="frequently-questions__header"
                onClick={() => toggleItem(7)}
              >
                <img
                  src="/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿En cuánto tiempo obtengo mi certificado?</p>
              </div>
              {activeIndex === 7 && (
                <p className="frequently-questions__paragraph">
                  Se podrán visualizar los certificados 24 horas después
                  culminado el curso (previo pago realizado).
                </p>
              )}
            </div>
          </div>

          {/* Segunda columna de preguntas */}
          <div className="frequently-questions__content">
            <div
              className={`frequently-questions__item ${
                activeIndex === 3 ? "active" : ""
              }`}
            >
              <div
                className="frequently-questions__header"
                onClick={() => toggleItem(3)}
              >
                <img
                  src="/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>
                  Si tengo un reclamo ¿Existe un número al cual pueda
                  comunicarme?
                </p>
              </div>
              {activeIndex === 3 && (
                <p className="frequently-questions__paragraph">
                  Si, para quejas, reclamos y/o sugerencias el número es +51 936
                  381 634 para atención al cliente. Comunícate con nosotros vía
                  llamada o whatsapp.
                </p>
              )}
            </div>
            <div
              className={`frequently-questions__item ${
                activeIndex === 4 ? "active" : ""
              }`}
            >
              <div
                className="frequently-questions__header"
                onClick={() => toggleItem(4)}
              >
                <img
                  src="/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿Qué debo llevar para mi curso presencial?</p>
              </div>
              {activeIndex === 4 && (
                <p className="frequently-questions__paragraph">
                  Debes llevar de forma obligatoria tu DNI (sin ello no podrás
                  ingresar) un lapicero y un cuaderno donde podrás colocar tus
                  apuntes en el transcurso de la capacitación.
                </p>
              )}
            </div>
            <div
              className={`frequently-questions__item ${
                activeIndex === 5 ? "active" : ""
              }`}
            >
              <div
                className="frequently-questions__header"
                onClick={() => toggleItem(5)}
              >
                <img
                  src="/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿Existe tolerancia para el ingreso a capacitaciones?</p>
              </div>
              {activeIndex === 5 && (
                <p className="frequently-questions__paragraph">
                  Si, tienes tolerancia de 15 minutos para tu ingreso. Luego de
                  ello no podrás ingresar a nuestras instalaciones.
                </p>
              )}
            </div>

            <div
              className={`frequently-questions__item ${
                activeIndex === 6 ? "active" : ""
              }`}
            >
              <div
                className="frequently-questions__header"
                onClick={() => toggleItem(6)}
              >
                <img
                  src="/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿En cuánto tiempo podré ver mis facturas en el sistema?</p>
              </div>
              {activeIndex === 6 && (
                <p className="frequently-questions__paragraph">
                  Las facturas estarán disponibles en nuestra plataforma SIGECAP
                  dentro de un máximo de 3 días después de haber culminado el
                  curso de capacitación.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
