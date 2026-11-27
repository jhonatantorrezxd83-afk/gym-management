"use client";
import "./BotonUpload.css";

interface BotonUploadProps {
  nombreArchivo: string;
  onFileChange: (nombre: string) => void;
}

export default function BotonUpload({
  nombreArchivo,
  onFileChange,
}: BotonUploadProps) {
  return (
    <div className="campo-upload">
      <span className="campo-upload__label">Upload Photo -:</span>
      <label className="campo-upload__boton">
        <span>⬆</span>
        <span>{nombreArchivo || "Upload"}</span>
        <input
          type="file"
          accept="image/*"
          className="campo-upload__input"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) onFileChange(file.name);
          }}
        />
      </label>
    </div>
  );
}