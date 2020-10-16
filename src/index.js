import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" to={Home} component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
