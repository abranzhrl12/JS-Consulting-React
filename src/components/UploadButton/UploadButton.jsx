// import { useState, useRef } from "react";
// import { FileItem } from "../FileItem/FileItem";
// import "./buttonupload.scss";

// export const UploadButton = ({
//   onSyncFiles,
//   maxFiles = 3,
//   allowedTypes = [
//     "image/jpeg",
//     "image/png",
//     "application/pdf",
//     "application/msword",
//     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
//   ],
//   children,
// }) => {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [error, setError] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [isSyncing, setIsSyncing] = useState(false);
//   const fileInputRef = useRef(null);

//   // Abrir selector de archivos
//   const handleButtonClick = () => {
//     // Sólo abrir el selector si no se ha alcanzado el límite
//     if (selectedFiles.length < maxFiles) {
//       fileInputRef.current.click();
//     }
//   };

//   // Validar los archivos seleccionados
//   const validateFiles = (files) => {
//     if (files.length + selectedFiles.length > maxFiles) {
//       setError(`Máximo ${maxFiles} archivos permitidos`);
//       return false;
//     }

//     const invalidFiles = Array.from(files).filter(
//       (file) => !allowedTypes.includes(file.type)
//     );
//     if (invalidFiles.length > 0) {
//       setError("Formatos permitidos: PDF, DOC, DOCX, JPEG, JPG, PNG");
//       return false;
//     }
//     return true;
//   };

//   // Manejar selección de archivos
//   const handleFileChange = (e) => {
//     const files = e.target.files;
//     if (!files || files.length === 0) return;

//     if (!validateFiles(files)) return;

//     setError(null);
//     setIsUploading(true);
//     setTimeout(() => {
//       setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
//       setIsUploading(false);
//     }, 500);
//   };

//   // Función para sincronizar archivos
//   const handleSyncFiles = () => {
//     if (selectedFiles.length === 0) {
//       setError("No hay archivos para enviar");
//       return;
//     }

//     setIsSyncing(true);
//     setTimeout(() => {
//       setIsSyncing(false);
//       onSyncFiles?.(selectedFiles);
//       setSelectedFiles([]);
//     }, 6000);
//   };

//   // Eliminar un archivo específico
//   const handleRemoveFile = (fileToRemove) => {
//     setSelectedFiles((prevFiles) =>
//       prevFiles.filter((file) => file.name !== fileToRemove.name)
//     );
//   };

//   return (
//     <div className="upload-button">
//       {/* Contenedor del botón de carga */}
//       <div
//         className={`upload-button__container ${
//           isUploading ? "progress" : isSyncing ? "syncing" : ""
//         } ${selectedFiles.length >= maxFiles ? "disabled" : ""}`}
//         onClick={handleButtonClick}
//       >
//         <input
//           type="file"
//           ref={fileInputRef}
//           multiple
//           accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//           onChange={handleFileChange}
//           className="upload-button__input"
//           disabled={selectedFiles.length >= maxFiles}
//         />

//         <div className="upload-button__content">
//           {children && children({ selectedFiles, error })}
//         </div>
//       </div>

//       {/* Mostrar archivos seleccionados */}
//       <div className="upload-button__files">
//         {selectedFiles.map((file) => (
//           <FileItem key={file.name} file={file} onRemove={handleRemoveFile} />
//         ))}
//       </div>

//       {/* Mensaje de error */}
//       {error && <div className="upload-button__error">{error}</div>}
//     </div>
//   );
// };
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
        (file) => file.type && !allowedTypes.includes(file.type) // Asegurarse que `file.type` está definido antes de usar `includes()`
      );

      if (invalidFiles.length > 0) {
        setError("Formatos permitidos: PDF, DOC, DOCX, JPEG, JPG, PNG");
        return false;
      }

      return true;
    };

    // Manejar selección de archivos
    const handleFileChange = (e) => {
      console.log("allowedTypes:", allowedTypes); // Verificación para depurar
      const files = e.target.files;
      if (!files || files.length === 0) return;

      // Verificar que los archivos sean válidos
      if (!validateFiles(files)) return;

      setError(null);
      setSelectedFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
    };

    // Eliminar un archivo de la lista
    const handleRemoveFile = (fileToRemove, e) => {
      e.preventDefault(); // Evitar que se recargue la página si se dispara un submit

      const updatedFiles = selectedFiles.filter(
        (file) => file.name !== fileToRemove.name
      );
      setSelectedFiles(updatedFiles);
    };

    // Exponer `getFiles()` para que `DescripcionHechos` pueda obtener los archivos
    useImperativeHandle(ref, () => ({
      getFiles: () => selectedFiles,
    }));

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

// Definir `displayName` para evitar advertencias en React DevTools
UploadButton.displayName = "UploadButton";
