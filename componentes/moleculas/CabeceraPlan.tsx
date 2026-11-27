import LogoGimnasio from "../atomos/LogoGimnasio";
import "./CabeceraPlan.css";

export default function CabeceraPlan() {
  return (
    <header className="cabecera-plan">
      <LogoGimnasio size="lg" />
      <h1 className="cabecera-plan__titulo">Select Your Plan</h1>
      <p className="cabecera-plan__subtitulo">7 Days Free Trial</p>
    </header>
  );
}