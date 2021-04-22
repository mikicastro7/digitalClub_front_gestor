import React, { useEffect } from "react";
import { toast } from "react-toastify";
import useHttp from "../hooks/useHttp";
import useFetch from "../hooks/useFetch";
import ContextoNoticias from "./ContextoNoticias";

const ContextoNoticiasProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const { datos: datosNoticias, pedirDatos: pedirNoticias, setDatos: setNoticias } = useFetch();
  const { sendRequest: sendNoticiaRequest } = useHttp();
  const { sendRequest: editNoticiaRequest } = useHttp();
  const { sendRequest: eliminarNoticiaRequest } = useHttp();

  const addNoticia = (titulo, texto, alt, noticiaData) => {
    toast("Noticia creada");
    let nuevaNoticia = {};
    if (alt) {
      nuevaNoticia = {
        _id: noticiaData.respuesta._id,
        texto,
        titulo,
        img: {
          link: noticiaData.respuesta.img.link,
          alt
        },
        created_at: new Date().toString()
      };
    } else {
      nuevaNoticia = {
        _id: noticiaData.respuesta._id,
        texto,
        titulo,
        created_at: new Date().toString()
      };
    }
    setNoticias((prevState) => ({ ...prevState, datos: [nuevaNoticia, ...datosNoticias.datos] }));
  };

  const enterNoticiaHandler = async (titulo, texto, foto, alt) => {
    const datos = new FormData();
    datos.append("foto", foto);
    datos.append("titulo", titulo);
    datos.append("texto", texto);
    datos.append("alt", alt);

    sendNoticiaRequest(
      {
        url: "https://digitalclub.herokuapp.com/noticias",
        method: "POST",
        body: datos,
      },
      addNoticia.bind(null, titulo, texto, alt)
    );
  };

  const editNoticia = (titulo, texto, id, alt = "una imagen", datosNoticia) => {
    console.log(datosNoticia);
    toast("Noticia editada");
    let noticiaEditada = {};
    if (datosNoticia.img) {
      noticiaEditada = {
        titulo,
        texto,
        _id: id,
        img: {
          link: datosNoticia.img.link,
          alt
        },
      };
    }
    setNoticias({ total: datosNoticias.total, datos: datosNoticias.datos.map(noticia => (noticia._id === id ? noticiaEditada : noticia)) });
  };

  const editNoticiaHandler = async (titulo, texto, foto, alt, id) => {
    const datos = new FormData();
    datos.append("foto", foto);
    datos.append("titulo", titulo);
    datos.append("texto", texto);
    datos.append("alt", alt);

    editNoticiaRequest(
      {
        url: `https://digitalclub.herokuapp.com/noticias/${id}`,
        method: "PUT",
        body: datos,
      },
      editNoticia.bind(null, titulo, texto, id, alt)
    );
  };

  const eliminarNoticia = (id) => {
    toast("Noticia eliminada");
    setNoticias({ total: datosNoticias.total, datos: datosNoticias.datos.filter(noticia => noticia._id !== id) });
  };

  const eliminarNoticiaHandler = async (id) => {
    eliminarNoticiaRequest(
      {
        url: `https://digitalclub.herokuapp.com/noticias/${id}`,
        method: "DELETE",
      },
      eliminarNoticia.bind(null, id)
    );
  };
  return (
    <ContextoNoticias.Provider value={{
      datosNoticias, enterNoticiaHandler, editNoticiaHandler, eliminarNoticiaHandler
    }}
    >
      { children}
    </ContextoNoticias.Provider>
  );
};

export default ContextoNoticiasProvider;
