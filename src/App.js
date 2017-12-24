import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import FestivalDetailPage from './component/FestivalDetailPage/FestivalDetailPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Switch>
          <Route exact path="/" render={() => (
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>)}
          />
          <Route path="/festivals/:festivalId" component={FestivalDetailPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
