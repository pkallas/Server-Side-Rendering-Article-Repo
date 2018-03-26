import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../HomePage';
import { LinkedPage } from '../LinkedPage';
import ErrorBoundary from '../ErrorBoundary';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/linkedpage' component={LinkedPage} />
          </Switch>
        </ErrorBoundary>
      </Fragment>
    );
  }
}
