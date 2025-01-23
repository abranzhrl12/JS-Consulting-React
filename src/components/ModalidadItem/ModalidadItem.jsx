export const ModalidadItem = ({ imgSrc, altText, text }) => {
  return (
    <div className="Item-Modalidad">
      <img src={imgSrc} alt={altText} loading="lazy" />
      <p className="Item-Modalidad__name">{text}</p>
    </div>
  );
};
