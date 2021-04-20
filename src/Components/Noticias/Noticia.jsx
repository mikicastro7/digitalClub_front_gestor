import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Collapse } from "react-bootstrap";
import ModalEliminarNoticia from "./ModalEliminarNoticia";
import ContextoNoticias from "../../Contextos/ContextoNoticias";
import BotonesFuncionalidades from "../BotonesFuncionalidades";

const Noticia = ({
  noticia: {
    _id, img, created_at: createdAt, texto, titulo
  }
}) => {
  const { eliminarNoticiaHandler } = useContext(ContextoNoticias);
  const [open, setOpen] = useState(false);
  const noticiaDesplegarHandler = () => {
    setOpen(!open);
  };

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const eliminarNoticiaOnClick = () => {
    eliminarNoticiaHandler(_id);
    handleClose();
  };

  const formatDate = () => {
    const date = new Date(createdAt);
    const minutos = date.getMinutes();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${minutos >= 9 ? minutos : `0${minutos}`}`;
  };

  return (
    <li className="noticia list-unstyled">
      <ModalEliminarNoticia show={showModal} handleClose={handleClose} eliminarNoticiaOnClick={eliminarNoticiaOnClick} />
      <div className="row align-items-center">
        <h3 role="presentation" onKeyDown={noticiaDesplegarHandler} onClick={noticiaDesplegarHandler} style={{ cursor: "pointer" }} className="noticia-title col-12 col-lg-9 text-center text-md-center text-lg-left">{titulo}</h3>
        <BotonesFuncionalidades open={open} _id={_id} handleShow={handleShow} setOpen={setOpen} />
      </div>
      <Collapse in={open}>
        <ul className="noticia-content text-justify list-unstyled">
          <li>
            <p>{texto}</p>
          </li>
          {img && <img src={img.link} alt={img.alt} />}
          <p className="noticia-dates">
            <span>Creada el: </span>
            {createdAt && formatDate()}
          </p>
        </ul>
      </Collapse>
    </li>
  );
};
Noticia.propTypes = {
  noticia: PropTypes.shape({
    titulo: PropTypes.string.isRequired,
    img: PropTypes.shape({
      link: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }),
    created_at: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    texto: PropTypes.string,
  })
};

export default Noticia;
