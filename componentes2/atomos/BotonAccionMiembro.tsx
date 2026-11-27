import "./BotonAccionMiembro.css";

interface BotonAccionMiembroProps {
  icono?: string;
  etiqueta: string;
  esRenew?: boolean;
}

export default function BotonAccionMiembro({
  icono,
  etiqueta,
  esRenew = false,
}: BotonAccionMiembroProps) {
  return (
    <button className="boton-accion" title={etiqueta}>
      {esRenew ? (
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12a9 9 0 1 1-2.64-6.36" />
          <polyline points="21 3 21 9 15 9" />
        </svg>
      ) : (
        <img src={icono} alt={etiqueta} width={15} height={15} />
      )}
      <span className="boton-accion__texto">{etiqueta}</span>
    </button>
  );
}