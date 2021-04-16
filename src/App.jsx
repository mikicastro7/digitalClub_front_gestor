import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/UIcomponents/Navbar";
import Noticias from "./Components/Noticias/Noticias";
import AddNoticia from "./Components/Noticias/AddNoticia";

const App = () => (
  <>
    <Navbar />
    <div className="container">
      <Router>
        <Switch>
          <Route path="/noticias" exact>
            <Noticias />
          </Route>
          <Route path="/noticias/crear-noticia" exact>
            <AddNoticia />
          </Route>
        </Switch>
      </Router>
    </div>
  </>
);

export default App;
