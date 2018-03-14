import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import LinkedPage from '../LinkedPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/linkedpage' component={LinkedPage} />
        </Switch>
      </div>
    );
  }
}
