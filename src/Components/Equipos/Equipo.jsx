/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import Jugadores from "./Jugadores";
import Staff from "./Staff";

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
        <div className="noticia-functional-buttons col-12 col-lg-3 text-center text-md-center text-lg-right">
          <button type="button">
            <FontAwesomeIcon className="button-normal-colors" icon={faEdit} />
          </button>
          <button onClick={handleShow} type="button">
            <FontAwesomeIcon className="button-normal-colors" icon={faTrashAlt} />
          </button>
          <button type="button" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon className="blue-colors" icon={faCaretDown} />
          </button>
        </div>
      </div>
      <Collapse in={open}>
        <ul className="noticia-content text-justify list-unstyled">
          {img && <img src={img.link} alt={img.alt} />}
          <Jugadores jugadores={jugadores} />
          <Staff staff={staff} />
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
