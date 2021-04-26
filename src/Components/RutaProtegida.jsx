/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from "react";
import { Route, Redirect } from "react-router";
import ContextoUsuario from "../Contextos/ContextoUsuario";

const RutaProtegida = (props) => {
  const { infoUsuario } = useContext(ContextoUsuario);
  const getRoute = () => {
    if (infoUsuario !== "cargando") {
      return infoUsuario.id ? <Route {...props} /> : <Redirect to="/login" />;
    }
  };

  return (
    <>
      {
        getRoute()
      }
    </>
  );
};
export default RutaProtegida;
