export const Hamburger = ({ isOpen, onClick }) => {
  console.log(isOpen);
  return (
    <button
      className={`hamburger navbar__Icon ${isOpen ? "active" : ""}`}
      aria-label="Abrir menú de navegación"
      aria-controls="navbarMenu"
      aria-expanded={isOpen}
      onClick={onClick}
    >
      <div className="line line1"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
    </button>
  );
};
