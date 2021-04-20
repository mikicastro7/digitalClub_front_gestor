/* eslint-disable react/prop-types */
import React from "react";

const Jugador = ({
  jugador: {
    nombre, dorsal, fecha_nacimiento: nacimiento, rol
  }
}) => (
  <tr>
    <td>{dorsal}</td>
    <td>{nombre}</td>
    <td>12/3/2000</td>
    <td className="ultima-fila">{rol}</td>
  </tr>
);

export default Jugador;
