import React, { useState } from "react";
import PropTypes from "prop-types";
import { Collapse } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";

const Noticia = ({
  noticia: {
    // eslint-disable-next-line camelcase
    img, create_add, texto, titulo
  }
}) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="noticia list-unstyled">
      <div className="row align-items-center">
        <h3 className="noticia-title col-12 col-lg-9 text-center text-md-center text-lg-left">{titulo}</h3>
        <div className="noticia-functional-buttons col-12 col-lg-3 text-center text-md-center text-lg-right">
          <button type="button">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button type="button">
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <button type="button" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
        </div>
      </div>
      <Collapse in={open}>
        <ul className="noticia-content text-justify list-unstyled">
          <li>
            <p>{texto}</p>
          </li>
          <img src="https://images.alphacoders.com/943/thumb-1920-943148.jpg" alt={img.alt} />
          <p className="noticia-dates">
            <span>Creada el: </span>
            26-11-2000
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
    create_add: PropTypes.number,
    texto: PropTypes.string.isRequired,
  })
};

export default Noticia;
