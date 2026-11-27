import "./AvatarMiembro.css";

interface AvatarMiembroProps {
  nombre: string;
  foto: string;
}

export default function AvatarMiembro({ nombre, foto }: AvatarMiembroProps) {
  return (
    <div className="avatar-miembro">
      <img src={foto} alt={nombre} />
    </div>
  );
}