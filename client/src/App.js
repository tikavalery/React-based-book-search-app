import React, { Component } from 'react';
import './App.css';

import BookSearch from './bookSearch';
import BookList from './bookList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookList: []
    }
  }

  handleBookList = (bookList) => {
    this.setState({ bookList });
  }

  render() {
    return (
      <div className="App">
        <BookSearch onSearchResult={this.handleBookList}/>
        <BookList bookList={this.state.bookList}/>
      </div>
    );
  }
}

export default App;
