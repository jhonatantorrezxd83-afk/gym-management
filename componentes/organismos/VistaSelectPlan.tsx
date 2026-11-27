import CabeceraPlan from "../moleculas/CabeceraPlan";
import TarjetaPlan from "../moleculas/TarjetaPlan";
import "./VistaSelectPlan.css";

const PLANES = [
  {
    nombre: "STANDARD",
    precio: "40$ Per Year",
    beneficios: [
      "Add unlimited members",
      "Dashboard",
      "Whats'up integration",
      "Data Backup every day",
      "Gym revenue report",
      "Email support",
    ],
  },
  {
    nombre: "PREMIUM",
    precio: "50$ Per Year",
    beneficios: [
      "All Features in STANDARD",
      "Workout Video page",
      "Diet Plan Page",
    ],
  },
  {
    nombre: "GOLDEN",
    precio: "60$ Per Year",
    beneficios: [
      "All Features in STANDARD",
      "All Features in PREMIUM",
      "Facebook integration",
      "Instgram marketing page integration",
      "Shop Page ( you can sell supplement & Protein )",
      "Email support",
    ],
  },
];

export default function VistaSelectPlan() {
  return (
    <main className="vista-select-plan">
      <CabeceraPlan />
      <section className="vista-select-plan__grid">
        {PLANES.map((plan) => (
          <TarjetaPlan
            key={plan.nombre}
            nombre={plan.nombre}
            precio={plan.precio}
            beneficios={plan.beneficios}
          />
        ))}
      </section>
    </main>
  );
}