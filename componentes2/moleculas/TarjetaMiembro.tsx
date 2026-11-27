import AvatarMiembro from "../atomos/AvatarMiembro";
import BotonAccionMiembro from "../atomos/BotonAccionMiembro";
import "./TarjetaMiembro.css";

export interface Miembro {
  id: number;
  apiId?: string;
  nombre: string;
  foto: string;
  expiracion: string;
  deuda: number;
}

interface TarjetaMiembroProps {
  miembro: Miembro;
  onEliminar?: (id: number) => void;
}

export default function TarjetaMiembro({
  miembro,
  onEliminar,
}: TarjetaMiembroProps) {
  return (
    <article className="tarjeta-miembro">
      <button
        className="tarjeta-miembro__borrar"
        title="Eliminar"
        onClick={() => onEliminar?.(miembro.id)}
      >
        <img src="/basurero.svg" alt="Eliminar" width={13} height={13} />
      </button>

      <AvatarMiembro nombre={miembro.nombre} foto={miembro.foto} />

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
        <BotonAccionMiembro icono="/llamada.svg" etiqueta="Call" />
        <BotonAccionMiembro icono="/whatsap.svg" etiqueta="WhatsApp" />
        <BotonAccionMiembro esRenew etiqueta="Renew Plan" />
        <BotonAccionMiembro icono="/mensaje.svg" etiqueta="Message" />
        <BotonAccionMiembro icono="/prohibido.svg" etiqueta="Block" />
      </div>
    </article>
  );
}