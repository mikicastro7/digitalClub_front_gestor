import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ContextoEquipos from "../../Contextos/ContextoEquipos";
import Equipo from "../../Components/Equipos/Equipo";

const Equipos = () => {
  const { datosEquipos } = useContext(ContextoEquipos);
  return (
    <section>
      <ToastContainer autoClose={2000} />
      <h2>Equipos</h2>
      <div className="add-noticia">
        <Link to="/equipos/crear-equipo">
          Crear equipo
          {" "}
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </div>
      {datosEquipos
        ? (
          <ul>
            {datosEquipos.datos.map((equipo) => <Equipo key={equipo._id} equipo={equipo} />)}
          </ul>
        ) : <ClipLoader color="#007bff" css={{ margin: "100px auto", display: "block" }} size={300} />}
    </section>
  );
};

export default Equipos;
