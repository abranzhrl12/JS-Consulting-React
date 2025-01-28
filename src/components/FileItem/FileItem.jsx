import { useState } from "react";
import pdfIcon from "../../assets/icofilepdf.svg";
import imageIcon from "../../assets/iconimage.svg";
import wordIcon from "../../assets/icondoc.svg";
import removeIcon from "../../assets/iconoremovefile.svg"; // Icono de eliminar
import "./fileitem.scss";

const getFileIcon = (type) => {
  if (type.includes("pdf")) return pdfIcon;
  if (type.includes("image")) return imageIcon;
  if (type.includes("word")) return wordIcon;
  return pdfIcon; // Icono por defecto
};

export const FileItem = ({ file, onRemove }) => {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = (e) => {
    e.preventDefault(); // Evita recarga si es un form
    setIsRemoving(true);
    setTimeout(() => {
      onRemove(file); // Solo envío el file
    }, 300);
  };

  return (
    <div className={`file-item ${isRemoving ? "removing" : ""}`}>
      <div className="file-item__icon">
        <img
          src={getFileIcon(file.type)}
          alt="File icon"
          className="file-icon"
        />
      </div>
      <div className="file-item__info">
        <span className="file-item__name">{file.name}</span>
      </div>
      <span className="file-item__size">
        {(file.size / 1024).toFixed(2)} KB
      </span>
      <button className="file-item__remove" onClick={handleRemove}>
        <img src={removeIcon} alt="Remove" className="remove-icon" />
      </button>
    </div>
  );
};
