import "./header-dinamico.scss";

export const HeaderDinamico = ({ banner }) => {
  return (
    <header className="header-dinamico">
      {/* Asegúrate de que se pase una imagen válida para el banner */}
      {banner && (
        <img
          className="header-dinamico__img"
          src={banner}
          alt="header de cursos"
        />
      )}
    </header>
  );
};
