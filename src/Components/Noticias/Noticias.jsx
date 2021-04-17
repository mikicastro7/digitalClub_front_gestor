import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Noticias = () => {
  const [noticias, setNoticias] = useState();
  return (
    <section>
      <h2>Noticias</h2>
      <div className="add-noticia">
        <Link to="/noticias/crear-noticia">
          Añadir noticia
          {" "}
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>

    </section>
  );
};

export default Noticias;
