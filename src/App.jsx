import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/UIcomponents/Navbar";
import Noticias from "./Containers/NoticiasContainer";

const App = () => (
  <>
    <Router>
      <Noticias />
    </Router>
  </>
);

export default App;
