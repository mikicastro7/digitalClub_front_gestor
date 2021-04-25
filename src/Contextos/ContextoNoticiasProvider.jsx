import React, { useEffect } from "react";
import { toast } from "react-toastify";
import useHttp from "../hooks/useHttp";
import useFetch from "../hooks/useFetch";
import ContextoNoticias from "./ContextoNoticias";

const ContextoNoticiasProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  const { sendRequest: sendNoticiaRequest } = useHttp();
  const { sendRequest: editNoticiaRequest } = useHttp();
  const { sendRequest: eliminarNoticiaRequest } = useHttp();
  const { datos: datosNoticias, pedirDatos: pedirNoticias, setDatos: setNoticias } = useFetch();
  useEffect(() => {
    pedirNoticias(`${process.env.REACT_APP_HEROKU_URL}/noticias`);
  }, [pedirNoticias]);

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
        url: `${process.env.REACT_APP_HEROKU_URL}/noticias`,
        method: "POST",
        body: datos,
      },
      addNoticia.bind(null, titulo, texto, alt)
    );
  };

  const editNoticia = (titulo, texto, id, alt = "una imagen", foto, datosNoticia) => {
    toast("Noticia editada");
    if (foto) {
      const file = foto;
      const reader = new FileReader();
      reader.onloadend = function () {
        let imagen = {};
        if (datosNoticia.img) {
          imagen = {
            link: reader.result,
            alt
          };
        }
        setNoticias({
          total: datosNoticias.total,
          datos: datosNoticias.datos.map(noticia => (noticia._id === id ? {
            ...noticia, img: imagen, titulo, texto
          } : noticia))
        });
      };
      reader.readAsDataURL(file);
    } else {
      setNoticias({
        total: datosNoticias.total,
        datos: datosNoticias.datos.map(noticia => (noticia._id === id ? {
          ...noticia, titulo, texto
        } : noticia))
      });
    }
  };

  const editNoticiaHandler = async (titulo, texto, foto, alt, id) => {
    const datos = new FormData();
    datos.append("foto", foto);
    datos.append("titulo", titulo);
    datos.append("texto", texto);
    datos.append("alt", alt);

    editNoticiaRequest(
      {
        url: `${process.env.REACT_APP_HEROKU_URL}/noticias/${id}`,
        method: "PUT",
        body: datos,
      },
      editNoticia.bind(null, titulo, texto, id, alt, foto)
    );
  };

  const eliminarNoticia = (id) => {
    toast("Noticia eliminada");
    setNoticias({ total: datosNoticias.total, datos: datosNoticias.datos.filter(noticia => noticia._id !== id) });
  };

  const eliminarNoticiaHandler = async (id) => {
    eliminarNoticiaRequest(
      {
        url: `${process.env.REACT_APP_HEROKU_URL}/noticias/${id}`,
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
