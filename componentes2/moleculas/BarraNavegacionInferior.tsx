import Link from "next/link";
import "./BarraNavegacionInferior.css";

export default function BarraNavegacionInferior() {
  return (
    <nav className="barra-inferior">
      <Link href="/members" className="barra-inferior__item barra-inferior__item--activo">
        <img src="/2personas.svg" alt="Members" width={20} height={20} />
        <span>Members</span>
      </Link>
      <Link href="/" className="barra-inferior__item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v18h18" />
          <path d="M7 16v-4" />
          <path d="M12 16v-8" />
          <path d="M17 16v-5" />
        </svg>
        <span>Dashboard</span>
      </Link>
      <div className="barra-inferior__item">
        <img src="/dinero.svg" alt="Collection" width={20} height={20} />
        <span>Collection</span>
      </div>
      <div className="barra-inferior__item">
        <img src="/edificio.svg" alt="Gym" width={20} height={20} />
        <span>Gym</span>
      </div>
      <div className="barra-inferior__item">
        <img src="/papel.svg" alt="Today Report" width={20} height={20} />
        <span>Today Report</span>
      </div>
    </nav>
  );
}