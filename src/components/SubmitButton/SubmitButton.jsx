import "./SubmitButton.scss";
export const SubmitButton = ({
  onClick,
  disabled = false,
  className = "",
  children, // Admite contenido dinámico como texto e íconos
}) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className={`submit-button ${className} ${
        disabled ? "submit-button--disabled" : ""
      }`}
      style={{ cursor: disabled ? "not-allowed" : "pointer" }}
    >
      {children}
    </button>
  );
};
