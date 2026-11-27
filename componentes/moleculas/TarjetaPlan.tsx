import Link from "next/link";
import ItemBeneficio from "../atomos/ItemBeneficio";
import "./TarjetaPlan.css";

interface TarjetaPlanProps {
  nombre: string;
  precio: string;
  beneficios: string[];
}

export default function TarjetaPlan({
  nombre,
  precio,
  beneficios,
}: TarjetaPlanProps) {
  return (
    <Link href="/members" className="tarjeta-plan">
      <h2 className="tarjeta-plan__titulo">{nombre}</h2>
      <p className="tarjeta-plan__precio">{precio}</p>
      <ul className="tarjeta-plan__lista">
        {beneficios.map((item, index) => (
          <ItemBeneficio key={index} texto={item} />
        ))}
      </ul>
    </Link>
  );
}