"use client";
import { useState } from "react";
import CabeceraMiembros from "../moleculas/CabeceraMiembros";
import BarraFiltros from "../moleculas/BarraFiltros";
import TarjetaMiembro, { Miembro } from "../moleculas/TarjetaMiembro";
import BotonFlotanteAgregar from "../atomos/BotonFlotanteAgregar";
import BarraNavegacionInferior from "../moleculas/BarraNavegacionInferior";
import "./VistaListadoMiembros.css";

const MIEMBROS_INICIALES: Miembro[] = [
  { id: 1, nombre: "Robert Fox", foto: "/01_persona_1.png", expiracion: "01 Sep 2023", deuda: 0 },
  { id: 2, nombre: "Jacob Jones", foto: "/02_persona_2.png", expiracion: "15 Sep 2023", deuda: 0 },
  { id: 3, nombre: "Rose Bell", foto: "/03_persona_3.png", expiracion: "01 Sep 2023", deuda: 0 },
  { id: 4, nombre: "Albert Flores", foto: "/04_persona_4.png", expiracion: "10 Sep 2023", deuda: 0 },
  { id: 5, nombre: "Kristin Watson", foto: "/rostro_nitido.png", expiracion: "01 Sep 2023", deuda: 0 },
  { id: 6, nombre: "Jenny Wilson", foto: "/03_persona_3.png", expiracion: "12 Sep 2023", deuda: 0 },
];

export default function VistaListadoMiembros() {
  const [busqueda, setBusqueda] = useState("");

  const miembrosFiltrados = MIEMBROS_INICIALES.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="vista-miembros">
      <CabeceraMiembros busqueda={busqueda} onBuscar={setBusqueda} />
      <BarraFiltros />
      <section className="vista-miembros__grid">
        {miembrosFiltrados.map((miembro) => (
          <TarjetaMiembro key={miembro.id} miembro={miembro} />
        ))}
      </section>
      <BotonFlotanteAgregar />
      <BarraNavegacionInferior />
    </main>
  );
}