"use client";
import "./BotonUpload.css";

interface BotonUploadProps {
  nombreArchivo: string;
  onFileChange: (nombre: string, base64: string) => void;
}

export default function BotonUpload({
  nombreArchivo,
  onFileChange,
}: BotonUploadProps) {
  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const size = 120;
        canvas.width = size;
        canvas.height = size;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(img, 0, 0, size, size);
          const comprimida = canvas.toDataURL("image/jpeg", 0.7);
          onFileChange(file.name, comprimida);
        }
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

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
          onChange={handleFile}
        />
      </label>
    </div>
  );
}