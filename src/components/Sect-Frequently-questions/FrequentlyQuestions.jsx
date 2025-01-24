export const FrequentlyQuestions = () => {
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
          <div className="frequently-questions__content">
            <div className="frequently-questions__item">
              <div className="frequently-questions__header">
                <img
                  src="/public/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿Cómo me inscribo en los cursos?</p>
              </div>
              <p className="frequently-questions__paragraph">
                Accede a la opción Sigecap en nuestra página web. Si es tu
                primera vez, selecciona “Registrarme” y sigue los pasos
                indicados. Si ya tienes usuario, completa tus datos y haz clic
                en “Ingresar”.
              </p>
            </div>
            <div className="frequently-questions__item">
              <div className="frequently-questions__header">
                <img
                  src="/public/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>
                  Si la inducción es para un día lunes ¿Hasta qué día podría
                  realizar la inscripción?
                </p>
              </div>
              <p className="frequently-questions__paragraph">
                Hasta el sábado anterior, en el horario de 07:00 am a 4:00 pm.
              </p>
            </div>
            <div className="frequently-questions__item">
              <div className="frequently-questions__header">
                <img
                  src="/public/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿Puedo inscribirme a un curso de forma particular?</p>
              </div>
              <p className="frequently-questions__paragraph">
                Sí, no es necesario pertenecer a una empresa para inscribirte en
                un curso.
              </p>
            </div>
            <div className="frequently-questions__item">
              <div className="frequently-questions__header">
                <img
                  src="/public/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿En cuánto tiempo obtengo mi certificado?</p>
              </div>
              <p className="frequently-questions__paragraph">
                Los certificados estarán disponibles 24 horas después de
                culminar el curso (previo pago realizado).
              </p>
            </div>
          </div>

          <div className="frequently-questions__content">
            <div className="frequently-questions__item">
              <div className="frequently-questions__header">
                <img
                  src="/public/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>
                  Si tengo un reclamo ¿Existe un número al cual pueda
                  comunicarme?
                </p>
              </div>
              <p className="frequently-questions__paragraph">
                Sí, para quejas, reclamos y sugerencias puedes comunicarte al
                +51 936 381 634 vía llamada o WhatsApp.
              </p>
            </div>
            <div className="frequently-questions__item">
              <div className="frequently-questions__header">
                <img
                  src="/public/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿Qué debo llevar para mi curso presencial?</p>
              </div>
              <p className="frequently-questions__paragraph">
                Lleva tu DNI (obligatorio), un lapicero y un cuaderno para
                apuntes durante la capacitación.
              </p>
            </div>
            <div className="frequently-questions__item">
              <div className="frequently-questions__header">
                <img
                  src="/public/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿Existe tolerancia para el ingreso a capacitaciones?</p>
              </div>
              <p className="frequently-questions__paragraph">
                Sí, se permite una tolerancia de 15 minutos. Luego de este
                tiempo no se podrá ingresar a las instalaciones.
              </p>
            </div>
            <div className="frequently-questions__item">
              <div className="frequently-questions__header">
                <img
                  src="/public/assets/Nosotros/arrrowQuestionRed.svg"
                  alt="Pregunta sobre inscripción"
                />
                <p>¿En cuánto tiempo podré ver mis facturas en el sistema?</p>
              </div>
              <p className="frequently-questions__paragraph">
                Las facturas estarán disponibles en la plataforma SIGECAP dentro
                de un máximo de 3 días tras finalizar el curso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
