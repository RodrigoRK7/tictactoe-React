import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./componentes/home/Home";
import Nosotros from "./componentes/Nosotros";
import Servicios from "./componentes/Servicios";
import Contacto from "./componentes/Contacto";

ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/servicios" component={Servicios} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </div>
  </Router>,
  document.getElementById("root")
);
