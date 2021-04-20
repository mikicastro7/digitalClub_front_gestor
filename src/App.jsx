import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import React from "react";
import ContextoNoticiasProvider from "./Contextos/ContextoNoticiasProvider";
import Navbar from "./Components/UIcomponents/Navbar";
import MostrarNoticias from "./paginas/Noticias/MostrarNoticias";
import AddNoticia from "./paginas/Noticias/AddNoticia";
import EditarNoticia from "./paginas/Noticias/EditarNoticia";
import PaginaPrincipalAuth from "./paginas/PaginaPrincipal/PaginaPrincipalAuth";

const App = () => (

  <Router>
    <Navbar />
    <div className="container">
      <ContextoNoticiasProvider>
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
      </ContextoNoticiasProvider>
    </div>
  </Router>
);

export default App;
