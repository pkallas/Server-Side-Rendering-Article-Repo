import React, { Component, Fragment } from 'react';
import LocalAPIButton from '../LocalAPIButton';
import GithubSearch from '../GithubSearch';
import { withFetch } from '../withFetch';

const LocalAPIButtonWithUrl = withFetch(LocalAPIButton, '/api/localAPIButton');

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.GithubSearchWithUrl = withFetch(GithubSearch,
    `https://api.github.com/users/${this.props.match.url.replace(/\/searchresult\//, '')}`);
  }

  render() {
    return (
      <Fragment>
        <div>
          <this.GithubSearchWithUrl />
        </div>
        <div>
          <LocalAPIButtonWithUrl />
        </div>
      </Fragment>
    );
  }
}
