import "./AvatarMiembro.css";

interface AvatarMiembroProps {
  nombre: string;
}

export default function AvatarMiembro({ nombre }: AvatarMiembroProps) {
  const iniciales = nombre
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return <div className="avatar-miembro">{iniciales}</div>;
}