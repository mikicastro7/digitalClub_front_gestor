/* eslint-disable react/prop-types */
import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalEliminarEquipo = ({ show, handleClose, eliminarEquipoOnClick }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Borrar noticia</Modal.Title>
    </Modal.Header>
    <Modal.Body>Estas seguro de que quieres eliminar el equipo</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="danger" onClick={eliminarEquipoOnClick}>
        Eliminar
      </Button>
    </Modal.Footer>
  </Modal>
);

export default ModalEliminarEquipo;
