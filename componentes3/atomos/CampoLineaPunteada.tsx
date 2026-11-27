"use client";
import "./CampoLineaPunteada.css";

interface CampoLineaPunteadaProps {
  label: string;
  name: string;
  valor: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  tipo?: string;
  placeholder?: string;
}

export default function CampoLineaPunteada({
  label,
  name,
  valor,
  onChange,
  tipo = "text",
  placeholder = "",
}: CampoLineaPunteadaProps) {
  return (
    <div className="campo-linea">
      <label className="campo-linea__label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={tipo}
        value={valor}
        onChange={onChange}
        placeholder={placeholder}
        className="campo-linea__input"
      />
    </div>
  );
}