import Link from "next/link";
import "./BarraNavegacionInferior.css";

export default function BarraNavegacionInferior() {
  return (
    <nav className="barra-inferior">
      <Link href="/members" className="barra-inferior__item barra-inferior__item--activo">
        <span className="barra-inferior__icono">👥</span>
        <span>Members</span>
      </Link>
      <Link href="/" className="barra-inferior__item">
        <span className="barra-inferior__icono">📊</span>
        <span>Dashboard</span>
      </Link>
      <div className="barra-inferior__item">
        <span className="barra-inferior__icono">💵</span>
        <span>Collection</span>
      </div>
      <div className="barra-inferior__item">
        <span className="barra-inferior__icono">🏋️</span>
        <span>Gym</span>
      </div>
      <div className="barra-inferior__item">
        <span className="barra-inferior__icono">📄</span>
        <span>Today Report</span>
      </div>
    </nav>
  );
}