"use client";
import "./GrupoMedidas.css";

interface GrupoMedidasProps {
  height: string;
  weight: string;
  chest: string;
  waist: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function GrupoMedidas({
  height,
  weight,
  chest,
  waist,
  onChange,
}: GrupoMedidasProps) {
  return (
    <div className="grupo-medidas">
      <span className="grupo-medidas__label">Measurement -:</span>
      <div className="grupo-medidas__grid">
        <label className="grupo-medidas__item">
          <span>Height:</span>
          <input
            name="height"
            value={height}
            onChange={onChange}
            className="grupo-medidas__input"
          />
        </label>
        <label className="grupo-medidas__item">
          <span>Weight:</span>
          <input
            name="weight"
            value={weight}
            onChange={onChange}
            className="grupo-medidas__input"
          />
        </label>
        <label className="grupo-medidas__item">
          <span>Chest:</span>
          <input
            name="chest"
            value={chest}
            onChange={onChange}
            className="grupo-medidas__input"
          />
        </label>
        <label className="grupo-medidas__item">
          <span>Waist:</span>
          <input
            name="waist"
            value={waist}
            onChange={onChange}
            className="grupo-medidas__input"
          />
        </label>
      </div>
    </div>
  );
}