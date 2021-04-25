/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useForm from "../hooks/useForm";
import useFetch from "../hooks/useFetch";

const Login = () => {
  const history = useHistory();
  const [errorLogin, setErrorLogin] = useState(false);
  const { datos, pedirDatos } = useFetch();
  const { formDatos, modificarDatos } = useForm({
    user: "",
    password: ""
  });
  const acceder = e => {
    e.preventDefault();
    pedirDatos(`${process.env.REACT_APP_HEROKU_URL}/usuarios/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDatos)
    });
  };
  useEffect(() => {
    if (datos) {
      if (datos.error) {
        setErrorLogin(true);
      } else if (datos.token) {
        console.log(datos.token);
        console.log(datos);
        localStorage.setItem("token-acceso-api", datos.token);
        history.push("/inicio");
      }
    }
  }, [datos, history]);

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
          <form onSubmit={acceder} autoComplete="off">
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
