import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  render() {
    return (
      <Link to='/linkedpage'>
      <button type='button'>Click me to go somewhere cool!</button>
    </Link>
  );
  }
}
