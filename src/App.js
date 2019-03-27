import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import './App.css';
import configureStore from './store/configureStore';

import * as routes from './constants/routes';
import DashboardPage from './components/DashboardPage';
import GamePage from './components/GamePage';
import GameSetupPage from './components/GameSetupPage';
import LandingPage from './components/LandingPage';
import NotFoundPage from './components/NotFoundPage';

// I assume we won't need these for production, so I will put them here for removal later.
import {
  additionComplete,
  subtractionComplete,
  multiplicationComplete,
  divisionComplete,
} from './actions/achievementsActions';
import { characterChoice } from './actions/gameStateActions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route
                path={routes.LANDING}
                exact={true}
                component={LandingPage}
              />
              <Route path={routes.DASHBOARD} component={DashboardPage} />
              <Route path={routes.GAME} component={GamePage} />
              <Route path={routes.GAME_SETUP} component={GameSetupPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

const store = configureStore();

store.subscribe(() => {
  // console.log(store.getState());
});

store.dispatch(additionComplete(true));
store.dispatch(additionComplete(false));
store.dispatch(subtractionComplete(true));
store.dispatch(multiplicationComplete(true));
store.dispatch(divisionComplete(true));
store.dispatch(characterChoice(1));

export default App;
