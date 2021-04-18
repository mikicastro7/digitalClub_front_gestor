import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Noticia from "../../Components/Noticias/Noticia";
import ContextoNoticias from "../../Contextos/ContextoNoticias";

const MostrarNoticias = () => {
  const { datosNoticias } = useContext(ContextoNoticias);
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
      {datosNoticias
        ? (
          <ul>
            {datosNoticias.datos.map((noticia) => <Noticia key={noticia._id} noticia={noticia} />)}
          </ul>
        ) : <p>cargando</p>}
    </section>
  );
};

export default MostrarNoticias;
