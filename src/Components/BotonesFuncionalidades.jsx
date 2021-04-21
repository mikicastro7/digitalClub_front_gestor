/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const BotonesNoticia = ({
  handleShow, setOpen, _id, open, tipo
}) => {
  const link = tipo === "equipo" ? `/equipos/editar-equipo/${_id}` : `/noticias/editar-noticia/${_id}`;
  return (
    <div className="noticia-functional-buttons col-12 col-lg-3 text-center text-md-center text-lg-right">
      <button type="button">
        <Link to={link}><FontAwesomeIcon className="button-normal-colors" icon={faEdit} /></Link>
      </button>
      <button onClick={handleShow} type="button">
        <FontAwesomeIcon className="button-normal-colors" icon={faTrashAlt} />
      </button>
      <button type="button" onClick={() => setOpen(!open)}>
        <FontAwesomeIcon className="blue-colors" icon={faCaretDown} />
      </button>
    </div>
  );
};

export default BotonesNoticia;
