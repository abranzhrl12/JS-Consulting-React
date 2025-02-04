// import { ContactButton } from "../ContactButton/ContactButton";
// import { InputField } from "../InputField/InputField";
// import { SubmitButton } from "../SubmitButton/SubmitButton";
// import "./headetemariocurso.scss";
// export const HeaderTemario = ({ title, banner, tDescripcion, loading }) => {
//   return (
//     <header className="curso-horarios-details">
//       {/* Imagen de fondo con Skeleton */}
//       {loading ? (
//         <div className="curso-horarios-details__skeleton curso-horarios-details__bg"></div>
//       ) : (
//         <img className="curso-horarios-details__bg" src={banner} alt={title} />
//       )}

//       <div className="curso-horarios-details__contentall">
//         <div className="curso-horarios-details__contentText">
//           {loading ? (
//             <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton-title"></div>
//           ) : (
//             <h1 className="curso-horarios-details__title">{title}</h1>
//           )}

//           {loading ? (
//             <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton-text"></div>
//           ) : (
//             <p className="curso-horarios-details__paragraph">{tDescripcion}</p>
//           )}

//           <div className="curso-horarios-details__btn">
//             {!loading && <ContactButton />}
//           </div>
//         </div>
//         <div className="curso-horarios-details__contentForm">
//           {/* Formulario con Skeleton */}
//           {loading ? (
//             <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton-form"></div>
//           ) : (
//             <form action="" className="curso-horarios-details__form">
//               <h2>Contáctanos</h2>
//               <p className="curso-horarios-details__formparagraph">
//                 Déjenos sus datos y nos pondremos en contacto
//               </p>
//               <div className="curso-horarios-details__formInputs">
//                 <InputField placeholder={"Nombre y Apellido"} />
//                 <InputField placeholder={"DNI"} />
//                 <InputField placeholder={"EMAIL"} />
//                 <InputField placeholder={"Teléfono Celular"} />
//                 <InputField placeholder={"Curso"} />
//                 <SubmitButton className="curso-horarios-details__formSubtmit">
//                   <span className="curso-horarios-details__formSubtmit-span">
//                     Contizar
//                   </span>
//                 </SubmitButton>
//               </div>
//             </form>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

import { ContactButton } from "../ContactButton/ContactButton";
import { InputField } from "../InputField/InputField";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import "./headetemariocurso.scss";

export const HeaderTemario = ({ title, banner, tDescripcion, loading }) => {
  return (
    <header className="curso-horarios-details">
      {/* Background Image Skeleton */}
      {loading ? (
        <div className="curso-horarios-details__skeleton curso-horarios-details__bg" />
      ) : (
        <img className="curso-horarios-details__bg" src={banner} alt={title} />
      )}

      <div className="curso-horarios-details__contentall">
        <div className="curso-horarios-details__contentText">
          {/* Title Skeleton */}
          {loading ? (
            <>
              <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--title" />
              <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--text" />
              <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--text" />
              <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--text" />
            </>
          ) : (
            <>
              <h1 className="curso-horarios-details__title">{title}</h1>
              <p className="curso-horarios-details__paragraph">
                {tDescripcion}
              </p>
            </>
          )}

          <div className="curso-horarios-details__btn">
            {!loading && <ContactButton />}
          </div>
        </div>

        <div className="curso-horarios-details__contentForm">
          {/* Form Skeleton */}
          {loading ? (
            <div className="curso-horarios-details__skeleton curso-horarios-details__skeleton--form" />
          ) : (
            <form action="" className="curso-horarios-details__form">
              <h2>Contáctanos</h2>
              <p className="curso-horarios-details__formparagraph">
                Déjenos sus datos y nos pondremos en contacto
              </p>
              <div className="curso-horarios-details__formInputs">
                <InputField placeholder={"Nombre y Apellido"} />
                <InputField placeholder={"DNI"} />
                <InputField placeholder={"EMAIL"} />
                <InputField placeholder={"Teléfono Celular"} />
                <InputField placeholder={"Curso"} />
                <SubmitButton className="curso-horarios-details__formSubtmit">
                  <span className="curso-horarios-details__formSubtmit-span">
                    Cotizar
                  </span>
                </SubmitButton>
              </div>
            </form>
          )}
        </div>
      </div>
    </header>
  );
};
