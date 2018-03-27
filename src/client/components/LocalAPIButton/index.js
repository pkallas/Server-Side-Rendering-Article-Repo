import React, { Component } from 'react';

export default class LocalAPIButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonClicked: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      buttonClicked: !this.state.buttonClicked,
    });
  }

  render() {
    return (
      <div className='flex-center'>
        <button onClick={this.handleClick}>Click me to see my API response</button>
        { this.state.buttonClicked ? (
          <p>{this.props.data}</p>
        ) : (
          null
        ) }
      </div>
    );
  }
}
