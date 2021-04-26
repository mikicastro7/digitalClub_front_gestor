/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { Route } from "react-router";
import ContextoUsuario from "../Contextos/ContextoUsuario";

const RutaProtegida = (props) => {
  const { infoUsuario } = useContext(ContextoUsuario);
  return (
    <>
      {
        infoUsuario.id && <Route {...props} />
      }
    </>
  );
};
export default RutaProtegida;
