import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ContextoEquipos from "./ContextoEquipos";

const ContextoEquiposProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const { datos: datosEquipos, pedirDatos: pedirEquipos, setDatos: setEquipos } = useFetch();

  useEffect(() => {
    pedirEquipos("https://digitalclub.herokuapp.com/equipos");
  }, [pedirEquipos]);

  return (
    <ContextoEquipos.Provider value={{
      datosEquipos
    }}
    >
      { children}
    </ContextoEquipos.Provider>
  );
};

export default ContextoEquiposProvider;
