import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ContextoEquipos from "../Contextos/ContextoEquipos";
import Equipo from "../Components/Equipos/Equipo";

const Equipos = () => {
  const { datosEquipos } = useContext(ContextoEquipos);

  return (
    <section>
      <h2>Equipos</h2>
      {datosEquipos
        ? (
          <ul>
            {datosEquipos.datos.map((equipo) => <Equipo key={equipo._id} equipo={equipo} />)}
          </ul>
        ) : <ClipLoader color="#007bff" css={{ margin: "100px auto", display: "block" }} size={300} />}
    </section>
  );
};

export default Equipos;
