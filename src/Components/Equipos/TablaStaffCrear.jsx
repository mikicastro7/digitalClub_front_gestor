/* eslint-disable react/prop-types */
import React from "react";

const TablaStaffCrear = ({ staff, changeCampoStaffHandler, deleteFilaStaffHandler }) => (
  <table className="tabla-personas">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Fecha de Nacimiento</th>
        <th>Rol</th>
        <th className="ultima-fila">Delete</th>
      </tr>
    </thead>
    <tbody>
      {
        // eslint-disable-next-line react/prop-types
        staff.map(miembro => (
          <tr key={miembro.id}>
            <td><input onChange={(e) => changeCampoStaffHandler(e, miembro.id, "nombre")} value={miembro.nombre} type="text" /></td>
            <td><input type="date" onChange={(e) => changeCampoStaffHandler(e, miembro.id, "nacimiento")} value={miembro.nacimiento} /></td>
            <td><input onChange={(e) => changeCampoStaffHandler(e, miembro.id, "rol")} value={miembro.rol} type="text" /></td>
            <td className="ultima-fila"><button tabIndex="-1" onClick={() => deleteFilaStaffHandler(miembro.id)} type="button">X</button></td>
          </tr>
        ))
      }
    </tbody>
  </table>
);

export default TablaStaffCrear;
