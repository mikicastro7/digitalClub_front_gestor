/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
// eslint-disable-next-line camelcase
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router";
import ContextoUsuario from "./ContextoUsuario";
import useFetch from "../hooks/useFetch";

const ContextoUsuarioProvider = (props) => {
  const history = useHistory();
  const { datos, pedirDatos } = useFetch();
  const { children } = props;
  const [infoUsuario, setInfoUsuario] = useState("cargando");
  const [errorLogin, setErrorLogin] = useState(false);
  console.log(infoUsuario);
  const [token, setToken] = useState(localStorage.getItem("token-acceso-api"));

  const loginUsuario = (e, formDatos) => {
    e.preventDefault();
    pedirDatos(`${process.env.REACT_APP_HEROKU_URL}/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDatos)
    });
  };

  const logoutUsuario = () => {
    setInfoUsuario("cargando");
    setErrorLogin(false);
    localStorage.clear();
    history.push("/home");
  };

  useEffect(() => {
    if (datos) {
      if (datos.error) {
        setErrorLogin(true);
      } else if (datos.token) {
        setToken(datos.token);
        setInfoUsuario(token ? jwt_decode(token) : false);
        localStorage.setItem("token-acceso-api", datos.token);
        history.push("/home");
      }
    }
  }, [datos, history, token]);
  useEffect(() => {
    setInfoUsuario(token ? jwt_decode(token) : false);
  }, [token]);
  return (
    <ContextoUsuario.Provider value={{
      infoUsuario, loginUsuario, logoutUsuario, errorLogin
    }}
    >
      { children}
    </ContextoUsuario.Provider>
  );
};

export default ContextoUsuarioProvider;
