"use client";
import "./SelectorDesplegable.css";

interface SelectorDesplegableProps {
  label: string;
  name: string;
  valor: string;
  opciones: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function SelectorDesplegable({
  label,
  name,
  valor,
  opciones,
  onChange,
}: SelectorDesplegableProps) {
  return (
    <div className="selector-desplegable">
      <label className="selector-desplegable__label" htmlFor={name}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={valor}
        onChange={onChange}
        className="selector-desplegable__select"
      >
        {opciones.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
}