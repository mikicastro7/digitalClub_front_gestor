import React from "react";

// eslint-disable-next-line react/prop-types
const TablaJugadoresCrear = ({ jugadores, changeCampoJugadorHandler, deleteFilaJugadorHandler }) => (
  <table className="tabla-personas">
    <thead>
      <tr>
        <th>Dorsal</th>
        <th>Nombre</th>
        <th>Fecha de Nacimiento</th>
        <th>Rol</th>
        <th className="ultima-fila">Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        // eslint-disable-next-line react/prop-types
        jugadores.map(jugador => (
          <tr key={jugador._id}>
            <td><input onChange={(e) => changeCampoJugadorHandler(e, jugador._id, "dorsal")} value={jugador.dorsal} type="text" /></td>
            <td><input onChange={(e) => changeCampoJugadorHandler(e, jugador._id, "nombre")} value={jugador.nombre} type="text" /></td>
            <td><input onChange={(e) => changeCampoJugadorHandler(e, jugador._id, "fecha_nacimiento")} value={jugador.fecha_nacimiento} type="date" /></td>
            <td><input onChange={(e) => changeCampoJugadorHandler(e, jugador._id, "rol")} value={jugador.rol} type="text" /></td>
            <td className="ultima-fila"><button tabIndex="-1" onClick={() => deleteFilaJugadorHandler(jugador._id)} type="button">X</button></td>
          </tr>
        ))
      }
    </tbody>
  </table>
);
export default TablaJugadoresCrear;
