import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import PlaceDetail from '../../containers/PlaceDetail';

export default function App() {
  return (
    <Router>
      <h1>Getaways</h1>
      <Switch>
        <Route 
          path="/"
          exact
          render={routerProps => <Getaways {...routerProps} />}
        />
        <Route 
          path="/:id"
          exact
          render={routerProps => <PlaceDetail {...routerProps} />}
        />
      </Switch>
    </Router>
  )
}
