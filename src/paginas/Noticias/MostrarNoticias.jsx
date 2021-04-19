import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Noticia from "../../Components/Noticias/Noticia";
import ContextoNoticias from "../../Contextos/ContextoNoticias";

const MostrarNoticias = () => {
  const { datosNoticias } = useContext(ContextoNoticias);
  return (
    <section>
      <h2>Noticias</h2>
      <ToastContainer autoClose={2000} />
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
        ) : <ClipLoader color="#007bff" css={{ margin: "100px auto", display: "block" }} size={300} />}
    </section>
  );
};

export default MostrarNoticias;
