import Link from "next/link";
import LogoGimnasio from "@/componentes/atomos/LogoGimnasio";
import "./CabeceraFormulario.css";

export default function CabeceraFormulario() {
  return (
    <header className="cabecera-form">
      <LogoGimnasio size="sm" />
      <div className="cabecera-form__fila">
        <Link href="/members" className="cabecera-form__volver" aria-label="Volver">
          ‹
        </Link>
        <h1 className="cabecera-form__titulo">Add Member</h1>
        <div className="cabecera-form__espaciador" />
      </div>
    </header>
  );
}