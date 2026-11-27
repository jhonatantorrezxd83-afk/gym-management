import "./LogoGimnasio.css";

interface LogoGimnasioProps {
  size?: "sm" | "lg";
}

export default function LogoGimnasio({ size = "lg" }: LogoGimnasioProps) {
  return (
    <div className={`logo-gimnasio logo-gimnasio--${size}`}>
      <span>
        TRAINING
        <br />
        ⚡
        <br />
        CENTER
      </span>
    </div>
  );
}