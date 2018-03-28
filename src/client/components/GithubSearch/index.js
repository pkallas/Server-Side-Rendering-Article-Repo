import React, { Component, Fragment } from 'react';
import axios from 'axios';

export default class GithubSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
      githubResult: {},
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
      this.setState({ githubResult: data });
    })
    .catch(error => {
      console.log('🔥🔥error (╯°□°）╯︵ ┻━┻🔥🔥', error);
      throw error;
    });
  }

  render() {
    return (
      <Fragment>
        <div className='flex-center'>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='searchbar' >Search by Github username</label>
            <input id='searchbar' type='text' placeholder='Search...' onChange={this.handleChange} />
            <button type='submit'>Search</button>
          </form>
        </div>
        <div className='flex-center'>
        { this.state.githubResult.avatar_url ? (
          <img src={this.state.githubResult.avatar_url} alt='Github Profile Picture' />
        ) : (
            <h3>Search for a Github user's profile picture</h3>
        ) }
      </div>
      </Fragment>
    );
  }
}
