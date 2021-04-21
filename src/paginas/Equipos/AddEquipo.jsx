/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";
import TablaJugadores from "../../Components/Equipos/TablaJugadoresCrear";
import TablaStaff from "../../Components/Equipos/TablaStaffCrear";

const AddEquipo = () => {
  const [jugadores, setJugadores] = useState([{
    id: `uuid_${uuid()}`,
    nombre: "",
    dorsal: "",
    nacimiento: "",
    rol: ""
  }]);

  const [staff, setStaff] = useState([{
    id: `uuid_${uuid()}`,
    nombre: "",
    nacimiento: "",
    rol: ""
  }]);
  console.log(staff);

  const changeCampoStaffHandler = (e, id, campo) => {
    setStaff(staff.map(miembroStaff => ((miembroStaff.id === id) ? { ...miembroStaff, [campo]: e.target.value } : miembroStaff)));
    checkAddMiembroStaff();
  };

  const checkAddMiembroStaff = () => {
    const ultimoMiembro = staff[staff.length - 1];
    if (ultimoMiembro.nombre.trim() !== "" && ultimoMiembro.nacimiento.trim() !== "" && ultimoMiembro.rol.trim() !== "") {
      addFilaStaff();
    }
  };

  const addFilaStaff = () => {
    setStaff([...staff, {
      id: `uuid_${uuid()}`,
      nombre: "",
      nacimiento: "",
      rol: ""
    }]);
  };

  const changeCampoJugadorHandler = (e, id, campo) => {
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
      id: `uuid_${uuid()}`,
      nombre: "",
      dorsal: "",
      nacimiento: "",
      rol: ""
    }]);
  };

  const deleteFilaJugadorHandler = (id) => {
    setJugadores(jugadores.filter(jugador => jugador.id !== id));
  };

  const deleteFilaStaffHandler = (id) => {
    setStaff(staff.filter(miembro => miembro.id !== id));
  };

  return (
    <section>
      <h2>Crear equipos</h2>
      <form className="form-crear-noticia">
        <TextareaAutosize name="titulo" className="input-noticia input-titular-noticia" placeholder="Nombre del equipo" />
        <label className="label-img-noticia" htmlFor="imagen">
          {" "}
          <span><FontAwesomeIcon icon={faUpload} /></span>
        </label>
        <input className="input-img-noticia" id="imagen" name="imagen" accept="image/png,image/jpeg" type="file" />
        <TextareaAutosize name="alt" className="input-noticia" placeholder="pequeña descripcion de la foto ej: niño montado a caballo" />
        <h4>Jugadores</h4>
        <TablaJugadores deleteFilaJugadorHandler={deleteFilaJugadorHandler} jugadores={jugadores} changeCampoJugadorHandler={changeCampoJugadorHandler} />
        <h4>Staff</h4>
        <TablaStaff deleteFilaStaffHandler={deleteFilaStaffHandler} staff={staff} changeCampoStaffHandler={changeCampoStaffHandler} />
        <button type="submit" className="btn btn-primary">Crear equipo </button>
      </form>
    </section>
  );
};

export default AddEquipo;
