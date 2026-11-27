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
      <img src={icono} alt={etiqueta} width={15} height={15} />
      <span className="boton-accion__texto">{etiqueta}</span>
    </button>
  );
}