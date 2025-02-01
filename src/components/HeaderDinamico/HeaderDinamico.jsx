import { useState } from "react";
import "./header-dinamico.scss";

export const HeaderDinamico = ({ banner }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <header className="header-dinamico">
      {banner ? (
        <div className="header-dinamico__img-wrapper">
          <img
            className="header-dinamico__img"
            src={banner}
            alt="header de cursos"
            onLoad={() => setLoaded(true)}
          />
          {/* Si la imagen aún no se ha cargado, mostramos el skeleton */}
          {!loaded && <div className="header-dinamico__skeleton" />}
        </div>
      ) : (
        <div className="header-dinamico__skeleton" />
      )}
    </header>
  );
};
