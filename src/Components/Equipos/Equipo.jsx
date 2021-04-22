/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import Jugadores from "./Jugadores";
import Staff from "./Staff";
import BotonesFuncionalidades from "../BotonesFuncionalidades";

const Equipo = ({
  equipo: {
    _id, img, nombre, jugadores, staff, created_at: createdAt
  }
}) => {
  const [open, setOpen] = useState(false);
  const noticiaDesplegarHandler = () => {
    setOpen(!open);
  };
  const formatDate = () => {
    const date = new Date(createdAt);
    const minutos = date.getMinutes();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${minutos >= 9 ? minutos : `0${minutos}`}`;
  };
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  return (
    <li className="noticia list-unstyled">
      <div className="row align-items-center">
        <h3 role="presentation" onKeyDown={noticiaDesplegarHandler} onClick={noticiaDesplegarHandler} style={{ cursor: "pointer" }} className="noticia-title col-12 col-lg-9 text-center text-md-center text-lg-left">{nombre}</h3>
        <BotonesFuncionalidades tipo="equipo" open={open} _id={_id} handleShow={handleShow} setOpen={setOpen} />
      </div>
      <Collapse in={open}>
        <ul className="noticia-content text-justify list-unstyled">
          {img && <img src={img.link} alt={img.alt} />}
          {jugadores.length !== 0 ? <Jugadores jugadores={jugadores} /> : ""}
          {staff.length !== 0 ? <Staff staff={staff} /> : ""}
          <p className="noticia-dates">
            <span>Creada el: </span>
            {createdAt && formatDate()}
          </p>
        </ul>
      </Collapse>
    </li>
  );
};

export default Equipo;
