/* eslint-disable react/prop-types */
import React from "react";
import PersonaStaff from "./PersonaStaff";

const Staff = ({ staff }) => (
  <section>
    <h4 className="text-center">Staff</h4>
    <table className="tabla-personas">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Fecha de Nacimiento</th>
          <th className="ultima-fila">Rol</th>
        </tr>
      </thead>
      <tbody>
        {staff.map(personaStaff => <PersonaStaff key={personaStaff._id} personaStaff={personaStaff} />)}
      </tbody>
    </table>
  </section>
);

export default Staff;
