import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";

const AddEquipo = () => {
  const [jugadors, setJugadors] = ([{
    id: uuid(),
    campos: [
      {
        nombre: {
          value: "",
          required: true,
        },
        dorsal: "",
        nacimiento: "",
        rol: ""
      }]

  },
  {
    id: uuid(),
    campos: [
      {
        nombre: {
          value: "",
          required: true,
        },
        dorsal: "",
        nacimiento: "",
        rol: ""
      }]
  }
  ]);

  const generarInputsJugador = () => {
    const inputs = jugadors.map(jugador => jugador.campos.map(campo => {
      const arrayInputs = [];
      arrayInputs.push(<input type="text" />);
      return arrayInputs;
    }));
    return inputs;
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
        <button type="submit" className="btn btn-primary">Crear equipo </button>
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
            <tr>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td><input type="text" /></td>
              <td className="ultima-fila"><input type="text" /></td>
            </tr>
            {generarInputsJugador()}
          </tbody>
        </table>
      </form>
    </section>
  );
};

export default AddEquipo;
