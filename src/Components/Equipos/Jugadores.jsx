/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from "react";
import Jugador from "./Jugador";

// eslint-disable-next-line react/prop-types
const Jugadores = ({ jugadores }) => (
  <section>
    <h4 className="text-center titulo-jugadores">Jugadores</h4>
    <table className="tabla-personas">
      <thead>
        <tr>
          <th>Num</th>
          <th>Nombre</th>
          <th>Fecha de Nacimiento</th>
          <th className="ultima-fila">Rol</th>
        </tr>
      </thead>
      <tbody>
        {jugadores.map(jugador => <Jugador key={jugador._id} jugador={jugador} />)}
      </tbody>
    </table>
  </section>
);

export default Jugadores;
