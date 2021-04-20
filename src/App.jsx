import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import React from "react";
import ContextoNoticiasProvider from "./Contextos/ContextoNoticiasProvider";
import Navbar from "./Components/UIcomponents/Navbar";
import MostrarNoticias from "./paginas/Noticias/MostrarNoticias";
import AddNoticia from "./paginas/Noticias/AddNoticia";
import EditarNoticia from "./paginas/Noticias/EditarNoticia";
import Equipos from "./paginas/Equipos";
import PaginaPrincipalAuth from "./paginas/PaginaPrincipalAuth";
import NotFoundPage from "./paginas/NotFoundPage";
import ContextoEquiposProvider from "./Contextos/ContextoEquiposProvider";

const App = () => (

  <Router>
    <Navbar />
    <div className="container">
      <ContextoNoticiasProvider>
        <ContextoEquiposProvider>
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

            <Route path="/equipos" exact>
              <Equipos />
            </Route>
            <Route path="/home" exact>
              <PaginaPrincipalAuth />
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            <Route path="*" exact>
              <NotFoundPage />
            </Route>
          </Switch>
        </ContextoEquiposProvider>
      </ContextoNoticiasProvider>
    </div>
  </Router>
);

export default App;
