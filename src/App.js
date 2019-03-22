import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import Dashboard from './Components/Dashboard'
import GamePage from './Components/GamePage'
import GameSetupPage from './Components/GameSetupPage'
import LandingPage from './Components/LandingPage'
import NotFoundPage from './Components/NotFoundPage'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Math Monsters</h1>
          <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={LandingPage}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/game" component={GamePage}/>
            <Route path="/gamesetup" component={GameSetupPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
          </BrowserRouter>
         
        </header>
      </div>
    );
  }
}

export default App;
