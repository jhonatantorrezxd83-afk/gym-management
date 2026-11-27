import Link from "next/link";
import "./BotonFlotanteAgregar.css";

export default function BotonFlotanteAgregar() {
  return (
    <Link href="/members/add" className="boton-flotante" aria-label="Add Member">
      +
    </Link>
  );
}