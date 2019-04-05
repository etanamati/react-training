import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ValidationSchemaExample from "./pages/ValidationSchemaExample";
import CustomHooks from "./pages/CustomHooks";
import CustomHooksFetchData from "./pages/CustomHooksFetchData";
import ExemploClasse from "./pages/ExemploClasse";
import ExemploState from "./pages/ExemploState";
import ExemploEffect from "./pages/ExemploEffect";
import ExemploHookStateObject from "./pages/ExemploHookStateObject";
import Hooks from "./pages/Hooks";
import UseStateExample from "./pages/UseStateExample";
import UseEffectExample from "./pages/UseEffectExample";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" exact component={ValidationSchemaExample} />
          <Route path="/classe" exact component={ExemploClasse} />
          <Route path="/state" exact component={ExemploState} />
          <Route
            path="/state-object"
            exact
            component={ExemploHookStateObject}
          />
          <Route path="/effect" exact component={ExemploEffect} />
          <Route path="/hooks" exact component={Hooks} />
          <Route path="/custom-hooks" exact component={CustomHooks} />
          <Route path="/custom-fetch" exact component={CustomHooksFetchData} />
          <Route path="/use-state" exact component={UseStateExample} />
          <Route path="/use-effect" exact component={UseEffectExample} />
        </Switch>
      </div>
    );
  }
}

export default App;
