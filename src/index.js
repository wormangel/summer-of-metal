import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'typeface-roboto'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider theme={createMuiTheme()}>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>, document.getElementById('root')
);
registerServiceWorker();
