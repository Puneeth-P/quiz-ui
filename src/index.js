import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
    <Switch>
      <Route path="/" name="Home" component={App} />
    </Switch>
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
