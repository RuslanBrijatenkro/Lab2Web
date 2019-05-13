import React from 'react';
import RouteConcerts from './RouteConcerts';
import RouterTheaters from './RouteTheaters';
import RouteFestivals from './RouteFestivals';
import RouteForChildren from './RouteForChildren';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={RouteConcerts}></Route>
        <Route exact path = '/theaters' component={RouterTheaters}></Route>
        <Route exact path = '/festivals' component={RouteFestivals}></Route>
        <Route exact path = '/forchildren' component={RouteForChildren}></Route>
      </Switch>
    </Router>
  );
}

export default App;
