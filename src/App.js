import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ValidationSchemaExample from "./pages/ValidationSchemaExample";
import ComponenteClasse from "./pages/ComponenteClasse";
import Hooks from "./pages/Hooks";
import CustomHooks from "./pages/CustomHooks";
import UseStateExample from './pages/UseStateExample';
import UseEffectExample from './pages/UseEffectExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={ValidationSchemaExample} />
          <Route path="/componente-classe" exact component={ComponenteClasse} />
          <Route path="/hooks" exact component={Hooks} />
          <Route path="/custom-hooks" exact component={CustomHooks} />
          <Route path="/use-state" exact component={UseStateExample} />
          <Route path="/use-effect" exact component={UseEffectExample} />
        </Switch>
      </div>
    );
  }
}

export default App;
