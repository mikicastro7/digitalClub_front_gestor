import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ContextoNoticias from "../../Contextos/ContextoNoticias";

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

  const eliminarNoticiaOnClick = (id) => {
    eliminarNoticiaHandler(id);
  };

  const formatDate = () => {
    const date = new Date(createdAt);
    const minutos = date.getMinutes();
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${minutos >= 9 ? minutos : `0${minutos}`}`;
  };

  return (
    <li className="noticia list-unstyled">
      <div className="row align-items-center">
        <h3 role="presentation" onKeyDown={noticiaDesplegarHandler} onClick={noticiaDesplegarHandler} style={{ cursor: "pointer" }} className="noticia-title col-12 col-lg-9 text-center text-md-center text-lg-left">{titulo}</h3>
        <div className="noticia-functional-buttons col-12 col-lg-3 text-center text-md-center text-lg-right">
          <button type="button">
            <Link to={`/noticias/editar-noticia/${_id}`}><FontAwesomeIcon className="button-normal-colors" icon={faEdit} /></Link>
          </button>
          <button onClick={() => eliminarNoticiaOnClick(_id)} type="button">
            <FontAwesomeIcon className="button-normal-colors" icon={faTrashAlt} />
          </button>
          <button type="button" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon className="blue-colors" icon={faCaretDown} />
          </button>
        </div>
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
