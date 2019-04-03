import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ValidationSchemaExample from "./pages/ValidationSchemaExample";
import ComponenteClasse from "./pages/ComponenteClasse";
import ComponenteHooks from "./pages/ComponenteHooks";
import CustomHooks from "./pages/CustomHooks";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={ValidationSchemaExample} />
          <Route path="/componente-classe" exact component={ComponenteClasse} />
          <Route path="/componente-hooks" exact component={ComponenteHooks} />
          <Route path="/custom-hooks" exact component={CustomHooks} />
        </Switch>
      </div>
    );
  }
}

export default App;
