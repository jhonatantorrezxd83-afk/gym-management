"use client";
import "./SelectorRadio.css";

interface SelectorRadioProps {
  label: string;
  name: string;
  opciones: string[];
  seleccionado: string;
  onChange: (valor: string) => void;
}

export default function SelectorRadio({
  label,
  name,
  opciones,
  seleccionado,
  onChange,
}: SelectorRadioProps) {
  return (
    <div className="selector-radio">
      <span className="selector-radio__label">{label}</span>
      <div className="selector-radio__opciones">
        {opciones.map((opcion) => (
          <label key={opcion} className="selector-radio__opcion">
            <input
              type="radio"
              name={name}
              value={opcion}
              checked={seleccionado === opcion}
              onChange={() => onChange(opcion)}
            />
            <span>{opcion}</span>
          </label>
        ))}
      </div>
    </div>
  );
}