import React from 'react';
import MapsBody from './mapsBody';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapsNav from './mapsNav';

function MapsApp(props) {
  return (
      <React.Fragment>
      <Router>
      <MapsNav/>
      <Switch>
      <Route exact path="/" component={MapsBody} />
      <Route exact path="/country/" component={MapsBody} />
      <Route exact path="/country/:name" component={MapsBody} />
      <Route exact path="/code/:countryCode" component={MapsBody} />
      </Switch>
      </Router>
      </React.Fragment>
  );
}

export default MapsApp;
