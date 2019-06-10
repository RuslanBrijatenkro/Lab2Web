import React from 'react';
import RouteSignIn from './RouteSignIn';
import RouteConcerts from './RouteConcerts';
import RouterTheaters from './RouteTheaters';
import RouteFestivals from './RouteFestivals';
import RouteForChildren from './RouteForChildren';
import RouteRegistration from './RouteRegistration';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import { logOut } from './actions';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = '/' component={RouteConcerts}></Route>
        <Route exact path = '/signIn' component={({history})=><RouteSignIn history={history}/>}></Route>
        <Route exact path = '/registration' component={RouteRegistration}></Route>
        <Route exact path = '/theaters' component={RouterTheaters}></Route>
        <Route exact path = '/festivals' component={RouteFestivals}></Route>
        <Route exact path = '/forchildren' component={RouteForChildren}></Route>
      </Switch>
    </Router>
  );
}

export default App;
