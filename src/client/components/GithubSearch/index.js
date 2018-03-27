import React, { Component } from 'react';

export default class GithubSearch extends Component {
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
        <button onClick={this.handleClick}>Click me to see your Github search result</button>
        { this.state.buttonClicked ? (
          <img src={this.props.data.avatar_url} alt='Github profile picture'></img>
        ) : (
          null
        ) }
      </div>
    );
  }
}
