import "./ItemBeneficio.css";

interface ItemBeneficioProps {
  texto: string;
}

export default function ItemBeneficio({ texto }: ItemBeneficioProps) {
  return (
    <li className="item-beneficio">
      <span className="item-beneficio__estrella">★</span>
      <span>{texto}</span>
    </li>
  );
}