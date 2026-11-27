"use client";
import "./GrupoFechaIngreso.css";

interface GrupoFechaIngresoProps {
  fechaInicio: string;
  fechaFin: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GrupoFechaIngreso({
  fechaInicio,
  fechaFin,
  onChange,
}: GrupoFechaIngresoProps) {
  return (
    <div className="grupo-fecha">
      <span className="grupo-fecha__label">Joining Date -:</span>
      <input
        name="fechaInicio"
        value={fechaInicio}
        onChange={onChange}
        className="grupo-fecha__input"
      />
      <span className="grupo-fecha__to">To</span>
      <input
        name="fechaFin"
        value={fechaFin}
        onChange={onChange}
        className="grupo-fecha__input"
      />
    </div>
  );
}