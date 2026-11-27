import "./BotonAccionMiembro.css";

interface BotonAccionMiembroProps {
  icono: string;
  etiqueta: string;
}

export default function BotonAccionMiembro({
  icono,
  etiqueta,
}: BotonAccionMiembroProps) {
  return (
    <button className="boton-accion" title={etiqueta}>
      <span>{icono}</span>
      <span className="boton-accion__texto">{etiqueta}</span>
    </button>
  );
}