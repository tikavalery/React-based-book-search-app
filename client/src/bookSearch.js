import React, { Component } from 'react';

export default class bookSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  handleSearch = () => {
    const base_url = 'https://www.googleapis.com/books/v1/volumes?q='

    if (this.state.searchTerm !== '') {
      fetch(`${base_url}${this.state.searchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          this.props.onSearchResult(data.items);
        });
    }
  }

  handleEvent = (event) => {
    this.setState({ searchTerm: event.target.value });

    event.key === 'Enter' && this.handleSearch()
  }

  render() {
    //console.log(this.props.onSearchResult(data.items));
    return (
      <div>
        <input
          placeholder="Search for a book..."
          type="text"
          onKeyPress={event => this.handleEvent(event)}
        />
        <button onClick={this.handleSearch}>
          Search
        </button>
      </div>
    );
  }
}
