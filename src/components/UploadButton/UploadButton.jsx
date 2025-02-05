// UploadButton.displayName = "UploadButton";
import { useState, useRef, forwardRef, useImperativeHandle } from "react";
import { FileItem } from "../FileItem/FileItem";
import "./buttonupload.scss";

export const UploadButton = forwardRef(
  (
    {
      maxFiles = 3,
      allowedTypes = [
        "image/jpeg",
        "image/png",
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ],
      children,
    },
    ref
  ) => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [error, setError] = useState(null);
    const fileInputRef = useRef(null);

    // 🔥 Exponer métodos al padre
    useImperativeHandle(ref, () => ({
      getFiles: () => selectedFiles,
      clearFiles: () => {
        console.log("Limpiando archivos..."); // Debugging
        setSelectedFiles([]); // 🧹 Limpia archivos
        setError(null); // 🧹 Borra error
        if (fileInputRef.current) {
          fileInputRef.current.value = ""; // 🧹 Resetea input file
        }
      },
    }));

    // Abrir selector de archivos
    const handleButtonClick = () => {
      if (selectedFiles.length < maxFiles) {
        fileInputRef.current.click();
      }
    };

    // Validar archivos seleccionados
    const validateFiles = (files) => {
      if (files.length + selectedFiles.length > maxFiles) {
        setError(`Máximo ${maxFiles} archivos permitidos`);
        return false;
      }

      const invalidFiles = Array.from(files).filter(
        (file) => file.type && !allowedTypes.includes(file.type)
      );

      if (invalidFiles.length > 0) {
        setError("Formatos permitidos: PDF, DOC, DOCX, JPEG, JPG, PNG");
        return false;
      }

      return true;
    };

    // Manejar selección de archivos
    const handleFileChange = (e) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      if (!validateFiles(files)) return;

      setError(null);
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    };

    // Eliminar un archivo de la lista
    const handleRemoveFile = (fileToRemove) => {
      const updatedFiles = selectedFiles.filter(
        (file) => file.name !== fileToRemove.name
      );
      setSelectedFiles(updatedFiles);
    };

    return (
      <div className="upload-button">
        <div
          className={`upload-button__container ${
            selectedFiles.length >= maxFiles ? "disabled" : ""
          }`}
          onClick={handleButtonClick}
        >
          <input
            type="file"
            ref={fileInputRef}
            multiple
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            onChange={handleFileChange}
            className="upload-button__input"
            disabled={selectedFiles.length >= maxFiles}
          />

          <div className="upload-button__content">
            {children && children({ selectedFiles, error })}
          </div>
        </div>

        {/* Mapeo de archivos seleccionados */}
        {selectedFiles.length > 0 && (
          <div className="upload-button__files">
            {selectedFiles.map((file) => (
              <FileItem
                key={file.name}
                file={file}
                onRemove={handleRemoveFile}
              />
            ))}
          </div>
        )}

        {error && <div className="upload-button__error">{error}</div>}
      </div>
    );
  }
);

UploadButton.displayName = "UploadButton";
