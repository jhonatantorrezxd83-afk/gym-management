import CabeceraFormulario from "../moleculas/CabeceraFormulario";
import FormularioAddMember from "../moleculas/FormularioAddMember";
import "./VistaAddMember.css";

export default function VistaAddMember() {
  return (
    <main className="vista-add-member">
      <CabeceraFormulario />
      <FormularioAddMember />
    </main>
  );
}