export const BrochureItem = ({ brochure }) => {
  const { id, title, image, alt, description, pdf } = brochure;

  return (
    <article className="brochure-card" aria-labelledby={`brochure-${id}-title`}>
      <header className="brochure-card__header">
        <img
          src="/assets/home/IconplayBrouche.svg" // Usamos la propiedad icon del brochure
          alt=""
          aria-hidden="true"
          className="brochure-card__icon"
        />
        <h3 id={`brochure-${id}-title`} className="brochure-card__title">
          {title}
        </h3>
      </header>

      <div className="brochure-card__content">
        <div className="brochure-card__image-container">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="brochure-card__img"
          />
        </div>

        <div className="brochure-card__text">
          <p className="brochure-card__description">{description}</p>

          <a
            href={pdf}
            download
            className="brochure-card__download"
            aria-label={`Descargar ${title}`}
          >
            (PDF)
          </a>
        </div>
      </div>
    </article>
  );
};
