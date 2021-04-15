import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Noticias = () => (
  <section>
    <h2>Noticias</h2>
    <div className="add-noticia">
      <Link to="/noticias/añadir-noticia">
        Añadir noticia
        {" "}
        <FontAwesomeIcon icon={faPlus} />
      </Link>
    </div>
  </section>
);

export default Noticias;
