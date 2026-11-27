import LogoGimnasio from "@/componentes/atomos/LogoGimnasio";
import InputBusqueda from "../atomos/InputBusqueda";
import BotonSMS from "../atomos/BotonSMS";
import "./CabeceraMiembros.css";

interface CabeceraMiembrosProps {
  busqueda: string;
  onBuscar: (valor: string) => void;
}

export default function CabeceraMiembros({
  busqueda,
  onBuscar,
}: CabeceraMiembrosProps) {
  return (
    <header className="cabecera-miembros">
      <div className="cabecera-miembros__superior">
        <button className="cabecera-miembros__menu">☰</button>
        <LogoGimnasio size="sm" />
        <div className="cabecera-miembros__espaciador" />
      </div>
      <div className="cabecera-miembros__buscador">
        <InputBusqueda valor={busqueda} onChange={onBuscar} />
        <BotonSMS />
      </div>
    </header>
  );
}