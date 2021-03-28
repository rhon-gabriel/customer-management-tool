import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./containers/Homepage/Homepage";
import AppContainer from "./containers/AppContainer/AppContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/customer" component={AppContainer} />
      </Switch>
    </Router>
  );
};

export default App;
