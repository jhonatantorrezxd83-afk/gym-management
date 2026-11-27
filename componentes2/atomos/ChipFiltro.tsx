import "./ChipFiltro.css";

interface ChipFiltroProps {
  etiqueta: string;
}

export default function ChipFiltro({ etiqueta }: ChipFiltroProps) {
  return (
    <button className="chip-filtro">
      <span>{etiqueta}</span>
      <span>▾</span>
    </button>
  );
}