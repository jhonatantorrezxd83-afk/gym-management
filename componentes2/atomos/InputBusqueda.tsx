"use client";
import "./InputBusqueda.css";

interface InputBusquedaProps {
  valor: string;
  onChange: (valor: string) => void;
}

export default function InputBusqueda({ valor, onChange }: InputBusquedaProps) {
  return (
    <div className="input-busqueda">
      <span className="input-busqueda__icono">🔍</span>
      <input
        type="text"
        className="input-busqueda__campo"
        placeholder="Name/ Mobile"
        value={valor}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}