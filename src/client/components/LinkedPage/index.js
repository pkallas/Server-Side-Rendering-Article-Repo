import React, { Component } from 'react';
import axios from 'axios';

export default class LinkedPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasServerResponded: false,
      response: '',
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(event) {
    return axios.get('/api/coolButtonPressed')
      .then(response => response.data)
      .then(data => {
        this.setState({
          hasServerResponded: true,
          response: data,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick}>Cool button</button>
        { this.state.hasServerResponded ? (
          <p>{this.state.response}</p>
        ) : (
          null
        ) }
      </div>
    );
  }
}
