"use client";
import { useEffect, useState } from "react";
import CabeceraMiembros from "../moleculas/CabeceraMiembros";
import BarraFiltros from "../moleculas/BarraFiltros";
import TarjetaMiembro, { Miembro } from "../moleculas/TarjetaMiembro";
import BotonFlotanteAgregar from "../atomos/BotonFlotanteAgregar";
import BarraNavegacionInferior from "../moleculas/BarraNavegacionInferior";
import "./VistaListadoMiembros.css";

const API_URL = "https://6b091b5b6a4ecd58b006ec11.mockapi.io/api/v1/miembros";

const MIEMBROS_INICIALES: Miembro[] = [
  { id: 1, nombre: "Robert Fox", foto: "/01_persona_1.png", expiracion: "01 Sep 2023", deuda: 0 },
  { id: 2, nombre: "Jacob Jones", foto: "/02_persona_2.png", expiracion: "15 Sep 2023", deuda: 0 },
  { id: 3, nombre: "Rose Bell", foto: "/03_persona_3.png", expiracion: "01 Sep 2023", deuda: 0 },
  { id: 4, nombre: "Albert Flores", foto: "/04_persona_4.png", expiracion: "10 Sep 2023", deuda: 0 },
  { id: 5, nombre: "Kristin Watson", foto: "/rostro_nitido.png", expiracion: "01 Sep 2023", deuda: 0 },
  { id: 6, nombre: "Jenny Wilson", foto: "/03_persona_3.png", expiracion: "12 Sep 2023", deuda: 0 },
];

const FOTOS_DEFAULT = [
  "/01_persona_1.png",
  "/02_persona_2.png",
  "/03_persona_3.png",
  "/04_persona_4.png",
  "/rostro_nitido.png",
];

const MESES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatearFecha(fecha: string) {
  if (!fecha || !fecha.includes("/")) return fecha || "01 Sep 2023";
  const [dia, mes, anio] = fecha.split("/");
  const diaPad = dia.padStart(2, "0");
  const nombreMes = MESES[Number(mes) - 1] || "Jan";
  const anioCompleto = anio.length === 2 ? `20${anio}` : anio;
  return `${diaPad} ${nombreMes} ${anioCompleto}`;
}

export default function VistaListadoMiembros() {
  const [miembros, setMiembros] = useState<Miembro[]>(MIEMBROS_INICIALES);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const deApi: Miembro[] = data.map((item, idx) => ({
            id: MIEMBROS_INICIALES.length + idx + 1,
            apiId: String(item.id),
            nombre: item.nombre || "Sin nombre",
            foto:
              item.foto?.startsWith("/") || item.foto?.startsWith("data:image")
                ? item.foto
                : FOTOS_DEFAULT[idx % FOTOS_DEFAULT.length],
            expiracion: formatearFecha(item.expiracion),
            deuda: Number(item.deuda) || 0,
          }));
          setMiembros([...MIEMBROS_INICIALES, ...deApi]);
        }
      })
      .catch(() => {});
  }, []);

  const handleEliminar = async (id: number) => {
    const objetivo = miembros.find((m) => m.id === id);
    if (objetivo?.apiId) {
      try {
        await fetch(`${API_URL}/${objetivo.apiId}`, { method: "DELETE" });
      } catch {
        alert("Error al eliminar miembro en MockAPI.");
        return;
      }
    }
    setMiembros((prev) => prev.filter((m) => m.id !== id));
  };

  const miembrosFiltrados = miembros.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <main className="vista-miembros">
      <CabeceraMiembros busqueda={busqueda} onBuscar={setBusqueda} />
      <BarraFiltros />
      <section className="vista-miembros__grid">
        {miembrosFiltrados.map((miembro) => (
          <TarjetaMiembro
            key={miembro.id}
            miembro={miembro}
            onEliminar={handleEliminar}
          />
        ))}
      </section>
      <BotonFlotanteAgregar />
      <BarraNavegacionInferior />
    </main>
  );
}