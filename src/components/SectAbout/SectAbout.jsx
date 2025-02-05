// export const SectAbout = () => {
//   return (
//     <section className="about-us-section">
//       <div className="about-us-section__contentall">
//         <div className="about-us-section__container-card">
//           <div className="about-us-section__card">
//             <div className="about-us-section__card-contentTitle">
//               <h3 className="about-us-section__card-title">
//                 ¿Porqué capacitarse con nosotros
//               </h3>
//             </div>

//             <p className="about-us-section__card-paragraph">
//               En JS Consulting, contamos con más de 10 años de experiencia
//               mejorando las operaciones de nuestros clientes en los sectores
//               minero e industrial. Nuestra certificación ISO 9001 refleja
//               nuestro compromiso con la calidad y la mejora continua,
//               garantizando seguridad y excelencia en cada capacitación. Nuestro
//               equipo de profesionales altamente capacitados se apoya en un
//               moderno centro de entrenamiento para ofrecer formación de
//               vanguardia. Además, brindamos acompañamiento personalizado a
//               través de centros de entrenamiento in house, y aprovechamos la
//               tecnología para impartir cursos en línea, adaptando siempre
//               nuestra metodología a las necesidades específicas de cada empresa.
//             </p>
//           </div>

//           <div className="about-us-section__contentIMG">
//             <div className="about-us-section__content-videos">
//               <video
//                 className="about-us-section__videos"
//                 id="video-Nosotros1"
//                 src="https://jsconsulting.pe/videos/principal.mp4"
//                 // poster="/Assets/Img/Nosotros/caratulavideo2.svg"
//                 muted
//                 controls
//                 playsInline
//               >
//                 {/* Aquí puedes incluir contenido alternativo si el navegador no soporta videos */}
//                 Tu navegador no soporta la etiqueta de video.
//               </video>
//             </div>
//           </div>
//         </div>

//         <div className="about-us-section__container-card  about-us-section__container-card--reverse">
//           <div className="about-us-section__card  about-us-section__card--mt">
//             <div className="about-us-section__card-contentTitle">
//               <h3 className="about-us-section__card-title">
//                 ¿Qué opinan nuestros estudiantes de JS CONSULTING?
//               </h3>
//             </div>

//             <p className="about-us-section__card-paragraph">
//               En JS Consulting, nos enfocamos en cumplir con las expectativas de
//               todos nuestros participantes. Por eso, ofrecemos modalidades y
//               horarios adaptables, además de contar con instalaciones de primer
//               nivel que facilitan el desarrollo de nuestras capacitaciones.
//             </p>
//           </div>
//           <div className="about-us-section__contentIMG about-us-section__contentIMG--order">
//             <div className="about-us-section__content-videos">
//               <video
//                 className="about-us-section__videos"
//                 id="video-Nosotros1"
//                 src="https://res.cloudinary.com/dyg9ifqo2/video/upload/v1736279781/oanttjiavhz3ijlqh4k0.mp4"
//                 // poster="/Assets/Img/Nosotros/caratulavideo2.svg"
//                 muted
//                 controls
//                 playsInline
//               >
//                 {/* Aquí puedes incluir contenido alternativo si el navegador no soporta videos */}
//                 Tu navegador no soporta la etiqueta de video.
//               </video>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
import { useState, useRef, useEffect } from "react";

export const SectAbout = () => {
  // Estados independientes para cada video
  const [isVideoClicked1, setIsVideoClicked1] = useState(false);
  const [isVideoClicked2, setIsVideoClicked2] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Usar referencias separadas para cada video
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  // Función para manejar el clic en el video
  const handleVideoClick = (videoRef, setIsVideoClicked) => {
    setIsVideoClicked(true);
    if (videoRef.current) {
      videoRef.current.play(); // Reproduce el video al hacer clic
    }

    // Después de 2 segundos, mostrar los controles
    setTimeout(() => {
      setShowControls(true);
    }, 2000);
  };

  return (
    <section className="about-us-section">
      <div className="about-us-section__contentall">
        <div className="about-us-section__container-card">
          <div className="about-us-section__card">
            <div className="about-us-section__card-contentTitle">
              <h3 className="about-us-section__card-title">
                ¿Por qué capacitarse con nosotros?
              </h3>
            </div>

            <p className="about-us-section__card-paragraph">
              En JS Consulting, contamos con más de 10 años de experiencia
              mejorando las operaciones de nuestros clientes en los sectores
              minero e industrial. Nuestra certificación ISO 9001 refleja
              nuestro compromiso con la calidad y la mejora continua,
              garantizando seguridad y excelencia en cada capacitación. Nuestro
              equipo de profesionales altamente capacitados se apoya en un
              moderno centro de entrenamiento para ofrecer formación de
              vanguardia. Además, brindamos acompañamiento personalizado a
              través de centros de entrenamiento in house, y aprovechamos la
              tecnología para impartir cursos en línea, adaptando siempre
              nuestra metodología a las necesidades específicas de cada empresa.
            </p>
          </div>

          <div className="about-us-section__contentIMG">
            <div className="about-us-section__content-videos">
              {!isVideoClicked1 && (
                <div className="video-overlay">
                  <p className="video-text">
                    <img
                      src="/assets/Nosotros/iconplayvideo.svg"
                      alt="play icono video"
                    />
                    Ver video corporativo
                  </p>
                </div>
              )}
              <video
                ref={videoRef1} // Usar el primer ref
                className="about-us-section__videos"
                id="video-Nosotros1"
                src="https://jsconsulting.pe/videos/principal.mp4"
                poster="/assets/Nosotros/portada_video_1.svg"
                controls={showControls} // Los controles solo se mostrarán después de 2 segundos
                playsInline
                onClick={() => handleVideoClick(videoRef1, setIsVideoClicked1)} // Detecta el clic para ocultar el texto
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </div>
        </div>

        <div className="about-us-section__container-card about-us-section__container-card--reverse">
          <div className="about-us-section__card about-us-section__card--mt">
            <div className="about-us-section__card-contentTitle">
              <h3 className="about-us-section__card-title">
                ¿Qué opinan nuestros estudiantes de JS CONSULTING?
              </h3>
            </div>

            <p className="about-us-section__card-paragraph">
              En JS Consulting, nos enfocamos en cumplir con las expectativas de
              todos nuestros participantes. Por eso, ofrecemos modalidades y
              horarios adaptables, además de contar con instalaciones de primer
              nivel que facilitan el desarrollo de nuestras capacitaciones.
            </p>
          </div>
          <div className="about-us-section__contentIMG about-us-section__contentIMG--order">
            <div className="about-us-section__content-videos">
              {!isVideoClicked2 && (
                <div className="video-overlay">
                  <p className="video-text">
                    <img
                      src="/assets/Nosotros/iconplayvideo.svg"
                      alt="play icono video"
                    />
                    Ver video
                  </p>
                </div>
              )}
              <video
                ref={videoRef2} // Usar el segundo ref
                className="about-us-section__videos"
                id="video-Nosotros2"
                src="https://jsconsulting.pe/videos/barcelona.mp4"
                controls={showControls} // Los controles solo se mostrarán después de 2 segundos
                poster="/assets/Nosotros/portada_video_2.svg"
                playsInline
                onClick={() => handleVideoClick(videoRef2, setIsVideoClicked2)} // Detecta el clic para ocultar el texto
              >
                Tu navegador no soporta la etiqueta de video.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
