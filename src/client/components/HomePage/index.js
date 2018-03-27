import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchbar: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchbar: event.target.value,
    });
  }

  render() {
    return (
      <div className='flex-center'>
        <label htmlFor='searchbar'>Search for a Github username</label>
        <input onChange={this.handleChange}
          id='searchbar'
          type='text'
          value={this.state.searchbar} />
        <Link to={`/searchresult/${this.state.searchbar}`}>
          <button onClick={this.handleSubmit} type='button'>Submit</button>
        </Link>
      </div>
  );
  }
}
