import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import FestivalDetailPage from './component/FestivalDetailPage/FestivalDetailPage';
import HeaderMenu from './component/HeaderMenu/HeaderMenu';
import FestivalCarrousel from './component/FestivalCarrousel/FestivalCarrousel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderMenu/>

        <Switch>
          <Route exact path="/" component={FestivalCarrousel} />
          <Route path="/festivals/:festivalId" component={FestivalDetailPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
