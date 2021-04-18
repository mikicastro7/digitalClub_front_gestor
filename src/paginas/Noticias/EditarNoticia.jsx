import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import NoticiaForm from "../../Components/Noticias/NoticiaForm";

const EditarNoticia = () => {
  const { datos: datosNoticia, pedirDatos: pedirNoticia } = useFetch();
  const { id } = useParams();
  useEffect(() => {
    pedirNoticia(`https://digitalclub.herokuapp.com/noticias/noticia/${id}`);
  }, [pedirNoticia]);
  console.log(datosNoticia);
  return (
    <section>
      <h2>Editar</h2>

    </section>
  );
};

export default EditarNoticia;
