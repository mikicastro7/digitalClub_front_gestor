import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/UIcomponents/Navbar";
import Noticias from "./paginas/Noticias";
import AddNoticia from "./Components/Noticias/AddNoticia";

const App = () => (
  <>
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/noticias" exact>
            <Noticias />
          </Route>
          <Route path="/noticias/crear-noticia" exact>
            <AddNoticia />
          </Route>
        </Switch>
      </div>
    </Router>
  </>
);

export default App;
