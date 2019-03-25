import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import GamePage from './components/GamePage';
import GameSetupPage from './components/GameSetupPage';
import LandingPage from './components/LandingPage';
import NotFoundPage from './components/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Switch>
              <Route path="/" exact={true} component={LandingPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/game" component={GamePage} />
              <Route path="/gamesetup" component={GameSetupPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
