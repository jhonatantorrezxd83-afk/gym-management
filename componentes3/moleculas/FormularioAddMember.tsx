"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CampoLineaPunteada from "../atomos/CampoLineaPunteada";
import BotonUpload from "../atomos/BotonUpload";
import SelectorRadio from "../atomos/SelectorRadio";
import SelectorDesplegable from "../atomos/SelectorDesplegable";
import BotonGuardar from "../atomos/BotonGuardar";
import GrupoMedidas from "./GrupoMedidas";
import GrupoFechaIngreso from "./GrupoFechaIngreso";
import "./FormularioAddMember.css";

export default function FormularioAddMember() {
  const router = useRouter();
  const [guardado, setGuardado] = useState(false);
  const [form, setForm] = useState({
    name: "",
    photo: "",
    mobile: "",
    gender: "Male",
    memberNo: "12",
    height: "",
    weight: "",
    chest: "",
    waist: "",
    dob: "",
    address: "",
    training: "Trainer",
    plan: "General [ 800 ]",
    batchTime: "6.00am to 7.00am",
    fechaInicio: "1/9/23",
    fechaFin: "1/10/23",
    paidAmount: "",
    dueAmount: "",
    paymentMethod: "Cash",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGuardado(true);
    setTimeout(() => {
      router.push("/members");
    }, 800);
  };

  return (
    <form className="formulario-miembro" onSubmit={handleSubmit}>
      <CampoLineaPunteada
        label="Name -:"
        name="name"
        valor={form.name}
        onChange={handleChange}
      />

      <BotonUpload
        nombreArchivo={form.photo}
        onFileChange={(nombre) => setForm({ ...form, photo: nombre })}
      />

      <CampoLineaPunteada
        label="Mobile No. -:"
        name="mobile"
        valor={form.mobile}
        onChange={handleChange}
        tipo="tel"
      />

      <SelectorRadio
        label="👫 -:"
        name="gender"
        opciones={["Male", "Female"]}
        seleccionado={form.gender}
        onChange={(valor) => setForm({ ...form, gender: valor })}
      />

      <CampoLineaPunteada
        label="Member No -:"
        name="memberNo"
        valor={form.memberNo}
        onChange={handleChange}
      />

      <GrupoMedidas
        height={form.height}
        weight={form.weight}
        chest={form.chest}
        waist={form.waist}
        onChange={handleChange}
      />

      <CampoLineaPunteada
        label="Date of Birth -:"
        name="dob"
        valor={form.dob}
        onChange={handleChange}
      />

      <CampoLineaPunteada
        label="Address -:"
        name="address"
        valor={form.address}
        onChange={handleChange}
      />

      <SelectorRadio
        label="Training -:"
        name="training"
        opciones={["Trainer", "Personal"]}
        seleccionado={form.training}
        onChange={(valor) => setForm({ ...form, training: valor })}
      />

      <SelectorDesplegable
        label="Plan -:"
        name="plan"
        valor={form.plan}
        opciones={[
          "General [ 800 ]",
          "General + Cardio [ 1500 ]",
          "Personal Training [ 2500 ]",
        ]}
        onChange={handleChange}
      />

      <SelectorDesplegable
        label="Batch Time -:"
        name="batchTime"
        valor={form.batchTime}
        opciones={[
          "6.00am to 7.00am",
          "7.00am to 8.00am",
          "5.00pm to 6.00pm",
          "6.00pm to 7.00pm",
        ]}
        onChange={handleChange}
      />

      <GrupoFechaIngreso
        fechaInicio={form.fechaInicio}
        fechaFin={form.fechaFin}
        onChange={handleChange}
      />

      <CampoLineaPunteada
        label="Paid Amount -:"
        name="paidAmount"
        valor={form.paidAmount}
        onChange={handleChange}
      />

      <CampoLineaPunteada
        label="Due Amount -:"
        name="dueAmount"
        valor={form.dueAmount}
        onChange={handleChange}
      />

      <CampoLineaPunteada
        label="Payment Method -:"
        name="paymentMethod"
        valor={form.paymentMethod}
        onChange={handleChange}
      />

      <BotonGuardar />

      {guardado && (
        <p className="formulario-miembro__mensaje">
          Miembro guardado correctamente. Redirigiendo...
        </p>
      )}
    </form>
  );
}