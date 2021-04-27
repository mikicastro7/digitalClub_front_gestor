import {
  BrowserRouter as Router, Switch, Route, Redirect
} from "react-router-dom";
import React from "react";
import RutaProtegida from "./Components/RutaProtegida";
import NavbarDisplay from "./Components/UIcomponents/NavbarDisplay";
import Footer from "./Components/UIcomponents/Footer";
import Login from "./paginas/Login";
import MostrarNoticias from "./paginas/Noticias/MostrarNoticias";
import AddNoticia from "./paginas/Noticias/AddNoticia";
import EditarNoticia from "./paginas/Noticias/EditarNoticia";
import Equipos from "./paginas/Equipos/MostrarEquipos";
import AddEquip from "./paginas/Equipos/AddEquipo";
import EditarEquipo from "./paginas/Equipos/EditarEquipo";
import PaginaPrincipalAuth from "./paginas/PaginaPrincipalAuth";
import NotFoundPage from "./paginas/NotFoundPage";
import ContextoEquiposProvider from "./Contextos/ContextoEquiposProvider";
import ContextoNoticiasProvider from "./Contextos/ContextoNoticiasProvider";
import ContextoUsuarioProvider from "./Contextos/ContextoUsuarioProvider";

const App = () => (

  <Router>
    <ContextoUsuarioProvider>
      <NavbarDisplay />
      <div className="container">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home" exact>
            <PaginaPrincipalAuth />
          </Route>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <RutaProtegida path="/noticias" exact>
            <ContextoNoticiasProvider>
              <MostrarNoticias />
            </ContextoNoticiasProvider>
          </RutaProtegida>
          <RutaProtegida path="/noticias/crear-noticia" exact>
            <ContextoNoticiasProvider>
              <AddNoticia />
            </ContextoNoticiasProvider>
          </RutaProtegida>
          <RutaProtegida path="/noticias/editar-noticia/:id" exact>
            <ContextoNoticiasProvider>
              <EditarNoticia />
            </ContextoNoticiasProvider>
          </RutaProtegida>
          <RutaProtegida path="/equipos" exact>
            <ContextoEquiposProvider>
              <Equipos />
            </ContextoEquiposProvider>
          </RutaProtegida>
          <RutaProtegida path="/equipos/crear-equipo" exact>
            <ContextoEquiposProvider>
              <AddEquip />
            </ContextoEquiposProvider>
          </RutaProtegida>
          <RutaProtegida path="/equipos/editar-equipo/:id" exact>
            <ContextoEquiposProvider>
              <EditarEquipo />
            </ContextoEquiposProvider>
          </RutaProtegida>
          <Route path="*" exact>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </ContextoUsuarioProvider>
  </Router>
);

export default App;
