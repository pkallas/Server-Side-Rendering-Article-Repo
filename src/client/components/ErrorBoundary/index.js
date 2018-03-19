import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    console.error('An error occurred ---> ', error);
    console.log('Here is the info for the above error ---> ', info);
    this.setState({
      hasError: true,
    });
  }

  render() {
    return this.state.hasError ? (
        <p>There was an error</p>
      ) : (
        this.props.children
      );
  }
}
