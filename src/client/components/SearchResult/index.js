import React, { Component, Fragment } from 'react';
import LocalAPIButton from '../LocalAPIButton';
import GithubSearch from '../GithubSearch';
import { withUrl } from '../withUrl';

const LocalAPIButtonWithUrl = withUrl(LocalAPIButton, '/api/localAPIButton');

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.GithubSearchWithUrl = withUrl(GithubSearch,
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
