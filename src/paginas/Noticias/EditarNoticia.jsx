import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import useFetch from "../../hooks/useFetch";
import NoticiaForm from "../../Components/Noticias/NoticiaForm";
import ContextoNoticias from "../../Contextos/ContextoNoticias";

const EditarNoticia = () => {
  const { datos: datosNoticia, pedirDatos: pedirNoticia } = useFetch();
  const { id } = useParams();
  const { editNoticiaHandler } = useContext(ContextoNoticias);
  useEffect(() => {
    pedirNoticia(`https://digitalclub.herokuapp.com/noticias/noticia/${id}`);
  }, [pedirNoticia]);
  return (
    <section>
      <h2>Editar</h2>
      {datosNoticia ? <NoticiaForm datosNoticia={datosNoticia} tipo="Edit" formAction={editNoticiaHandler} />
        : <ClipLoader color="#007bff" css={{ margin: "100px auto", display: "block" }} size={300} />}
    </section>
  );
};

export default EditarNoticia;
