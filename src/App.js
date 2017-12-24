import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import FestivalDetailPage from './component/FestivalDetailPage/FestivalDetailPage';
import HeaderMenu from './component/HeaderMenu/HeaderMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMenu/>
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
