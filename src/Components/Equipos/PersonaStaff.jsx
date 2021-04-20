/* eslint-disable react/prop-types */
import React from "react";

const PersonaStaff = ({
  personaStaff: {
    nombre, fecha_nacimiento: nacimiento, rol
  }
}) => (
  <tr>
    <td>{nombre}</td>
    <td>{nacimiento}</td>
    <td className="ultima-fila">{rol}</td>
  </tr>
);

export default PersonaStaff;
