/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useContext } from "react";
import useForm from "../hooks/useForm";
import useFetch from "../hooks/useFetch";
import ContextoUsuario from "../Contextos/ContextoUsuario";

const Login = () => {
  const { loginUsuario, errorLogin } = useContext(ContextoUsuario);

  const { formDatos, modificarDatos } = useForm({
    user: "",
    password: ""
  });

  const submitLogin = (e) => {
    loginUsuario(e, formDatos);
  };

  return (
    <section>
      <div className="centerForm">
        <div className="topBar">
          <div className="topBarContainer">
            <p className="login">Login</p>
          </div>
        </div>
        <div className="bodyForm">
          <h3 className="formTitle">Bienvenido Login</h3>
          {errorLogin && <p style={{ textAlign: "center", color: "red" }}>Error de credenciales</p>}
          <form onSubmit={(e) => submitLogin(e)} autoComplete="off">
            <label htmlFor="usuario" className="formLabel">Usuario</label>
            <input
              name="user"
              value={formDatos.user}
              onChange={modificarDatos}
              id="usuario"
              placeholder="Usuario"
              className="formInput"
              type="text"
            />

            <label htmlFor="password" style={{ marginTop: "20px" }} className="formLabel">Contraseña</label>
            <input
              name="password"
              value={formDatos.password}
              onChange={modificarDatos}
              id="password"
              placeholder="Contraseña"
              className="formInput"
              type="password"
            />
            <button type="submit" className="formButton">Login</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
