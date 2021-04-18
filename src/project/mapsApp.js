import React from 'react';
import MapsBody from './mapsBody';
import { BrowserRouter as Route, Router, Switch } from 'react-router-dom';
import MapsNav from './mapsNav';

function MapsApp() {
  return (
      <Router>
      <MapsNav/>
      <Switch>
      <Route exact path={"/"} component={MapsBody} />
      <Route exact path={"/country/"} component={MapsBody} />
      <Route exact path={"/country/:name"} component={MapsBody} />
      <Route exact path={"/country/:countryCode"} component={MapsBody} />
      </Switch>
      </Router>
  );
}

export default MapsApp;
