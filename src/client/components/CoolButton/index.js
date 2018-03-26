import React, { Component } from 'react';
import axios from 'axios';

export default class CoolButton extends Component {
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
      .catch(error => {
        console.log('🔥🔥error (╯°□°）╯︵ ┻━┻🔥🔥', error);
        throw error;
      });
  }

  render() {
    return (
      <div className='flex-center'>
        <div>
          <button onClick={this.handleButtonClick}>Cool button</button>
        </div>
        { this.state.hasServerResponded ? (
          <div>
            <p>{this.state.response}</p>
          </div>
        ) : (
          null
        ) }
      </div>
    );
  }
}
