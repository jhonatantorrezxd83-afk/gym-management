import ChipFiltro from "../atomos/ChipFiltro";
import "./BarraFiltros.css";

export default function BarraFiltros() {
  return (
    <div className="barra-filtros">
      <ChipFiltro etiqueta="All Member" />
      <ChipFiltro etiqueta="All Plans" />
      <ChipFiltro etiqueta="Select Batch" />
    </div>
  );
}