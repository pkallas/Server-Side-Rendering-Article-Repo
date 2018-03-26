import React, { Component } from 'react';
import axios from 'axios';

export default class GithubSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
      githubResult: {},
      hasRequestFinished: false,
      error: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchBar: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    return axios.get(`https://api.github.com/users/${this.state.searchBar}`)
    .then(result => result.data)
    .then(data => {
      this.setState({
        githubResult: data,
        hasRequestFinished: true,
      });
    })
    .catch(error => {
      console.log('🔥🔥error (╯°□°）╯︵ ┻━┻🔥🔥', error);
      this.setState({
        error: true,
      });
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='searchbar'>Search by Github username</label>
          <input
            id='searchbar'
            type='text'
            placeholder='Search...'
            value={this.state.searchBar}
            onChange={this.handleChange} />
          <button type='submit'>Search</button>
        </form>
        { this.state.hasRequestFinished ? (
          <img src={this.state.githubResult.avatar_url} alt='Github Profile Picture' />
        ) : (
          <div>
            { this.state.error ? (
              <h3>Your search returned no results. Make sure the username is valid.</h3>
            ) : (
              <h3>Search for a Github user's profile picture</h3>
            )}
          </div>
        ) }
      </div>
    );
  }
}
