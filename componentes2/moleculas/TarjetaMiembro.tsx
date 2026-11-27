import AvatarMiembro from "../atomos/AvatarMiembro";
import BotonAccionMiembro from "../atomos/BotonAccionMiembro";
import "./TarjetaMiembro.css";

export interface Miembro {
  id: number;
  nombre: string;
  expiracion: string;
  deuda: number;
}

interface TarjetaMiembroProps {
  miembro: Miembro;
}

export default function TarjetaMiembro({ miembro }: TarjetaMiembroProps) {
  return (
    <article className="tarjeta-miembro">
      <button className="tarjeta-miembro__borrar" title="Eliminar">
        🗑
      </button>

      <AvatarMiembro nombre={miembro.nombre} />

      <div className="tarjeta-miembro__datos">
        <p>
          <span className="tarjeta-miembro__label">Name : </span>
          <span className="tarjeta-miembro__valor">{miembro.nombre}</span>
        </p>
        <p>
          <span className="tarjeta-miembro__label">M ID : </span>
          <span className="tarjeta-miembro__valor">{miembro.id}</span>
        </p>
        <p>
          <span className="tarjeta-miembro__label">Plan Expiry : </span>
          <span className="tarjeta-miembro__valor">{miembro.expiracion}</span>
        </p>
        <p>
          <span className="tarjeta-miembro__label">Due Amount : </span>
          <span className="tarjeta-miembro__valor">{miembro.deuda}</span>
        </p>
      </div>

      <div className="tarjeta-miembro__acciones">
        <BotonAccionMiembro icono="📞" etiqueta="Call" />
        <BotonAccionMiembro icono="💬" etiqueta="WhatsApp" />
        <BotonAccionMiembro icono="↻" etiqueta="Renew" />
        <BotonAccionMiembro icono="✉" etiqueta="Message" />
        <BotonAccionMiembro icono="⊘" etiqueta="Block" />
      </div>
    </article>
  );
}