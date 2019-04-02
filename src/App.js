import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ValidationSchemaExample from "./pages/ValidationSchemaExample";
import ComponenteClasse from "./pages/ComponenteClasse";
import ComponenteHooks from "./pages/ComponenteHooks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={ValidationSchemaExample} />
          <Route path="/componente-classe" exact component={ComponenteClasse} />
          <Route path="/componente-hooks" exact component={ComponenteHooks} />
        </Switch>
      </div>
    );
  }
}

export default App;
