/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import uuid from "react-uuid";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import TablaJugadores from "./TablaJugadoresCrear";
import TablaStaff from "./TablaStaffCrear";
import useForm from "../../hooks/useForm";

const EquipoForm = (props) => {
  const {
    datosEquipo: {
      _id, nombre: nombreProp, img: imgProps, jugadores: jugadoresProp = [], staff: staffProp = []
    } = {}, tipo, formAction
  } = props;
  const history = useHistory();
  const [img, setImg] = useState("");
  const [imgFile, setImgFile] = useState("");

  const { formDatos, modificarDatos } = useForm({
    titulo: nombreProp || "",
    alt: imgProps ? imgProps.alt : ""
  });

  let jugadoresMostrar = [];
  if (jugadoresProp) {
    jugadoresMostrar = jugadoresProp.map(jugador => ({
      ...jugador,
      fecha_nacimiento: jugador.fecha_nacimiento.split("/").reverse().join("-")
    }));
  }

  const enteredTitleIsValid = formDatos.titulo.trim() !== "";
  const enteredAltIsValid = formDatos.alt.trim().length > 5 || img === "";

  let formIsValid = false;

  if (enteredTitleIsValid && enteredAltIsValid) {
    formIsValid = true;
  }

  const changeImgHandler = (e) => {
    setImgFile(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg(reader.result);
      }
    };
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (formIsValid) {
      formAction(formDatos.titulo, imgFile, formDatos.alt, jugadores, staff);
      history.push("/equipos");
    }
    if (!enteredTitleIsValid) {
      toast.error("El camp nombre es obligatorio");
    }
    if (!enteredAltIsValid) {
      toast.error("Pon una pequeña descripcion de la imagen más de 5 caracteeres");
    }
  };

  const [jugadores, setJugadores] = useState([
    ...jugadoresMostrar,
    {
      _id: `uuid_${uuid()}`,
      nombre: "",
      dorsal: "",
      fecha_nacimiento: "",
      rol: ""
    }
  ]);

  console.log(jugadoresMostrar);

  const [staff, setStaff] = useState(staffProp ? [
    ...staffProp, {
      _id: `uuid_${uuid()}`,
      nombre: "",
      fecha_nacimiento: "",
      rol: ""
    }] : staffProp);

  const changeCampoStaffHandler = (e, id, campo) => {
    const staffModificado = staff.map(miembroStaff => ((miembroStaff._id === id) ? { ...miembroStaff, [campo]: e.target.value } : miembroStaff));
    setStaff(staffModificado);
    checkAddMiembroStaff(staffModificado);
  };

  const checkAddMiembroStaff = (staffModificado) => {
    const ultimoMiembro = staff[staff.length - 1];
    if (ultimoMiembro.nombre.trim() !== "" && ultimoMiembro.fecha_nacimiento.trim() !== "" && ultimoMiembro.rol.trim() !== "") {
      addFilaStaff(staffModificado);
    }
  };

  const addFilaStaff = (staffModificado) => {
    setStaff([...staffModificado, {
      _id: `uuid_${uuid()}`,
      nombre: "",
      fecha_nacimiento: "",
      rol: ""
    }]);
  };

  const changeCampoJugadorHandler = (e, id, campo) => {
    const jugadorModificado = jugadores.map(jugador => ((jugador._id === id) ? { ...jugador, [campo]: e.target.value } : jugador));
    setJugadores(jugadorModificado);
    checkAddJugador(jugadorModificado);
  };

  const checkAddJugador = (jugadoresModificados) => {
    const ultimoJugador = jugadores[jugadores.length - 1];
    if (ultimoJugador.nombre.trim() !== "" && ultimoJugador.dorsal.trim() !== "" && ultimoJugador.fecha_nacimiento.trim() !== "" && ultimoJugador.rol.trim() !== "") {
      addFilaJugador(jugadoresModificados);
    }
  };

  const addFilaJugador = (jugadoresModificados) => {
    setJugadores([...jugadoresModificados, {
      _id: `uuid_${uuid()}`,
      nombre: "",
      dorsal: "",
      fecha_nacimiento: "",
      rol: ""
    }]);
  };

  const deleteFilaJugadorHandler = (id) => {
    setJugadores(jugadores.filter(jugador => jugador._id !== id));
  };

  const deleteFilaStaffHandler = (id) => {
    setStaff(staff.filter(miembro => miembro._id !== id));
  };

  return (
    <form onSubmit={formSubmissionHandler} className="form-crear-noticia">
      <TextareaAutosize value={formDatos.titulo} onChange={modificarDatos} name="titulo" className="input-noticia input-titular-noticia" placeholder="Nombre del equipo" />
      <label className="label-img-noticia" htmlFor="imagen">
        {img ? <img className="crear-noticia-img" src={img} alt="" /> : <span><FontAwesomeIcon icon={faUpload} /></span>}
      </label>
      <input onChange={(e) => changeImgHandler(e)} className="input-img-noticia" id="imagen" name="imagen" accept="image/png,image/jpeg" type="file" />
      <TextareaAutosize value={formDatos.alt} onChange={modificarDatos} name="alt" className="input-noticia" placeholder="pequeña descripcion de la foto ej: niño montado a caballo" />
      <h4>Jugadores</h4>
      <TablaJugadores deleteFilaJugadorHandler={deleteFilaJugadorHandler} jugadores={jugadores} changeCampoJugadorHandler={changeCampoJugadorHandler} />
      <h4>Staff</h4>
      <TablaStaff deleteFilaStaffHandler={deleteFilaStaffHandler} staff={staff} changeCampoStaffHandler={changeCampoStaffHandler} />
      <button type="submit" className="btn btn-primary">Crear equipo </button>
    </form>
  );
};

export default EquipoForm;
