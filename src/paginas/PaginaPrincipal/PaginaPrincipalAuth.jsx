import React from "react";
import { Link } from "react-router-dom";

const PaginaPrincipalAuth = () => (
  <div>
    <section>
      <h1>Gestiona la web de tu club con nuestra ayuda</h1>
      <ul className="row list-unstyled lista-modulos">
        <li className="col-12 col-md-6 caja-modulo">
          <Link to="/noticias">
            Noticias
          </Link>
        </li>
        <li className="col-12 col-md-6 caja-modulo">
          <Link to="/equipos">
            Equipos
          </Link>
        </li>
      </ul>
    </section>
  </div>
);

export default PaginaPrincipalAuth;
