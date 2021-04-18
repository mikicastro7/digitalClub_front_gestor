import React, { useContext, useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MostrarNoticias from "../paginas/Noticias/MostrarNoticias";
import AddNoticia from "../paginas/Noticias/AddNoticia";
import useFetch from "../hooks/useFetch";
import ContextoNoticias from "../Contextos/ContextoNoticias";
import Navbar from "../Components/UIcomponents/Navbar";

const Noticias = () => {
  const { datos: datosNoticias, pedirDatos: pedirNoticias, setDatos: setNoticias } = useFetch();

  useEffect(() => {
    pedirNoticias("https://digitalclub.herokuapp.com/noticias");
  }, [pedirNoticias]);

  const addNoticiaHandler = (titulo, texto) => {
    const nuevaNoticia = {
      id: 1,
      texto,
      titulo
    };
    console.log(datosNoticias);
    setNoticias((prevState) => ({ ...prevState, datos: [...datosNoticias.datos, nuevaNoticia] }));
  };

  return (
    <ContextoNoticias.Provider value={{ datosNoticias, addNoticiaHandler }}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/noticias" exact>
              <MostrarNoticias />
            </Route>
            <Route path="/noticias/crear-noticia" exact>
              <AddNoticia />
            </Route>
          </Switch>
        </div>
      </Router>
    </ContextoNoticias.Provider>
  );
};

export default Noticias;
