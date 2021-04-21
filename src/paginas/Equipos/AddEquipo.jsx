/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

const AddEquipo = () => {
  const [jugadores, setJugadores] = useState([{
    id: uuid(),
    nombre: "",
    dorsal: "",
    nacimiento: "",
    rol: ""
  }]);

  const changeCampoHandler = (e, id, campo) => {
    setJugadores(jugadores.map(jugador => ((jugador.id === id) ? { ...jugador, [campo]: e.target.value } : jugador)));
    checkAddJugador();
  };

  const checkAddJugador = () => {
    const ultimoJugador = jugadores[jugadores.length - 1];
    if (ultimoJugador.nombre.trim() !== "" && ultimoJugador.dorsal.trim() !== "" && ultimoJugador.nacimiento.trim() !== "" && ultimoJugador.rol.trim() !== "") {
      addFilaJugador();
    }
  };

  const addFilaJugador = () => {
    setJugadores([...jugadores, {
      id: uuid(),
      nombre: "",
      dorsal: "",
      nacimiento: "",
      rol: ""
    }]);
  };

  return (
    <section>
      <h2>Crear equipos</h2>
      <form className="form-crear-noticia">
        <TextareaAutosize name="titulo" className="input-noticia input-titular-noticia" placeholder="Nombre del equipo" />
        <label className="label-img-noticia" htmlFor="imagen">
          {" "}
          :
          {" "}
          <span><FontAwesomeIcon icon={faUpload} /></span>
        </label>
        <input className="input-img-noticia" id="imagen" name="imagen" accept="image/png,image/jpeg" type="file" />
        <TextareaAutosize name="alt" className="input-noticia" placeholder="pequeña descripcion de la foto ej: niño montado a caballo" />
        <h4>Jugadores</h4>
        <table className="tabla-personas">
          <thead>
            <tr>
              <th>Dorsal</th>
              <th>Nombre</th>
              <th>Fecha de Nacimiento</th>
              <th>Rol</th>
              <th className="ultima-fila">Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              jugadores.map(jugador => (
                <tr key={jugador.id}>
                  <td><input onChange={(e) => changeCampoHandler(e, jugador.id, "dorsal")} value={jugador.dorsal} type="text" /></td>
                  <td><input onChange={(e) => changeCampoHandler(e, jugador.id, "nombre")} value={jugador.nombre} type="text" /></td>
                  <td><input onChange={(e) => changeCampoHandler(e, jugador.id, "nacimiento")} value={jugador.nacimiento} type="text" /></td>
                  <td><input onChange={(e) => changeCampoHandler(e, jugador.id, "rol")} value={jugador.rol} type="text" /></td>
                  <td className="ultima-fila"><button type="button">X</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <button type="submit" className="btn btn-primary">Crear equipo </button>
      </form>
    </section>
  );
};

export default AddEquipo;
