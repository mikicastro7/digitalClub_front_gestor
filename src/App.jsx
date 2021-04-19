import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import useFetch from "./hooks/useFetch";
import ContextoNoticias from "./Contextos/ContextoNoticias";
import useHttp from "./hooks/useHttp";
import Navbar from "./Components/UIcomponents/Navbar";
import MostrarNoticias from "./paginas/Noticias/MostrarNoticias";
import AddNoticia from "./paginas/Noticias/AddNoticia";
import EditarNoticia from "./paginas/Noticias/EditarNoticia";
import PaginaPrincipalAuth from "./paginas/PaginaPrincipal/PaginaPrincipalAuth";

const App = () => {
  const { datos: datosNoticias, pedirDatos: pedirNoticias, setDatos: setNoticias } = useFetch();
  const { sendRequest: sendNoticiaRequest } = useHttp();
  const { sendRequest: editNoticiaRequest } = useHttp();
  const { sendRequest: eliminarNoticiaRequest } = useHttp();

  useEffect(() => {
    pedirNoticias("https://digitalclub.herokuapp.com/noticias");
  }, [pedirNoticias]);

  const addNoticia = (titulo, texto, noticiaData) => {
    toast("Noticia creada");
    const nuevaNoticia = {
      _id: noticiaData.id,
      texto,
      titulo,
      created_at: new Date().toString()
    };
    setNoticias((prevState) => ({ ...prevState, datos: [nuevaNoticia, ...datosNoticias.datos] }));
  };

  const enterNoticiaHandler = async (titulo, texto) => {
    sendNoticiaRequest(
      {
        url: "https://digitalclub.herokuapp.com/noticias",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { texto, titulo },
      },
      addNoticia.bind(null, titulo, texto)
    );
  };

  const editNoticia = (titulo, texto, id) => {
    toast("Noticia editada");
    setNoticias({ total: datosNoticias.total, datos: datosNoticias.datos.map(noticia => (noticia._id === id ? { ...noticia, titulo, texto } : noticia)) });
  };

  const editNoticiaHandler = async (titulo, texto, id) => {
    editNoticiaRequest(
      {
        url: `https://digitalclub.herokuapp.com/noticias/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: { texto, titulo },
      },
      editNoticia.bind(null, titulo, texto, id)
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

    <Router>
      <Navbar />
      <div className="container">
        <ContextoNoticias.Provider value={{
          datosNoticias, enterNoticiaHandler, editNoticiaHandler, eliminarNoticiaHandler
        }}
        >
          <Switch>
            <Route path="/noticias" exact>
              <MostrarNoticias />
            </Route>
            <Route path="/noticias/crear-noticia" exact>
              <AddNoticia />
            </Route>
            <Route path="/noticias/editar-noticia/:id" exact>
              <EditarNoticia />
            </Route>
            <Route path="/home" exact>
              <PaginaPrincipalAuth />
            </Route>
            <Route path="/">
              <Redirect to="/home" exact />
            </Route>
          </Switch>
        </ContextoNoticias.Provider>
      </div>
    </Router>

  );
};

export default App;
