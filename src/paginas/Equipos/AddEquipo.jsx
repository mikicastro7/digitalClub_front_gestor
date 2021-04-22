/* eslint-disable react/jsx-closing-tag-location */
import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import EquipoForm from "../../Components/Equipos/EquipoForm";
import ContextoEquipos from "../../Contextos/ContextoEquipos";

const AddEquipo = () => {
  const { enterEquipoHandler } = useContext(ContextoEquipos);
  return (
    <section>
      <ToastContainer autoClose={2000} />
      <h2>Crear equipos</h2>
      <EquipoForm formAction={enterEquipoHandler} />
    </section>
  );
};

export default AddEquipo;
