import React from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

const ModalEliminarNoticia = ({ show, handleClose, eliminarNoticiaOnClick }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Borrar noticia</Modal.Title>
    </Modal.Header>
    <Modal.Body>Estas seguro de que quieres eliminar la noticia</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="danger" onClick={eliminarNoticiaOnClick}>
        Eliminar
      </Button>
    </Modal.Footer>
  </Modal>
);

ModalEliminarNoticia.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  eliminarNoticiaOnClick: PropTypes.func.isRequired
};

export default ModalEliminarNoticia;
