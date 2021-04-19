import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "../Components/UIcomponents/Navbar";
import PaginaPrincipalAuth from "../paginas/PaginaPrincipal/PaginaPrincipalAuth";

const HomeContainer = () => (
  <>
    <Navbar />
    <div className="container">
      <Switch>
        <Route path="/home" exact>
          <PaginaPrincipalAuth />
        </Route>
        <Route path="/">
          <Redirect to="/home" exact />
        </Route>
      </Switch>
    </div>
  </>
);

export default HomeContainer;
