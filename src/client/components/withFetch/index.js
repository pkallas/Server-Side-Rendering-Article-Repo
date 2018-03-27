import React, { Component } from 'react';
import axios from 'axios';

export function withFetch(WrappedComponent, url) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {},
      };
    }

    componentDidMount() {
      return axios.get(url)
        .then(response => response.data)
        .then(data => {
          this.setState({ data });
        })
        .catch(error => {
          console.log('🔥🔥error (╯°□°）╯︵ ┻━┻🔥🔥', error);
          throw error;
        });
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}
