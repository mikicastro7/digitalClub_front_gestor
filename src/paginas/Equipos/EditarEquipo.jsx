import React, { useContext, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import EquipoForm from "../../Components/Equipos/EquipoForm";
import ContextoEquipos from "../../Contextos/ContextoEquipos";
import useFetch from "../../hooks/useFetch";

const EditarEquipo = () => {
  const { datos: datosEquipo, pedirDatos: pedirEquipo } = useFetch();
  const { id } = useParams();
  const { modificarEquipoHandler } = useContext(ContextoEquipos);
  useEffect(() => {
    pedirEquipo(`https://digitalclub.herokuapp.com/equipos/equipo/${id}`);
  }, [pedirEquipo]);
  return (
    <section>
      <h2>Editar Equipo</h2>
      <ToastContainer autoClose={2000} />
      {datosEquipo ? <EquipoForm datosEquipo={datosEquipo} tipo="Edit" formAction={modificarEquipoHandler} />
        : <ClipLoader color="#007bff" css={{ margin: "100px auto", display: "block" }} size={300} />}
    </section>
  );
};

export default EditarEquipo;
