import React, { Component } from 'react';
import axios from 'axios';

export function withUrl(WrappedComponent, url) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {},
      };
      this.fetchData = this.fetchData.bind(this);
    }

    fetchData(event) {
      event.preventDefault();
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
      return (<WrappedComponent
              data={this.state.data}
              fetchData={this.fetchData} {...this.props} />);
    }
  };
}