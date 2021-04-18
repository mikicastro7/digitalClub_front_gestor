import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/UIcomponents/Navbar";
import Noticias from "./Containers/NoticiasContainer";

const App = () => (
  <>
    <Noticias />
  </>
);

export default App;
