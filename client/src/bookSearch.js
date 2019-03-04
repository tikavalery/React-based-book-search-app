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
    const styles = {
      container: {
       marginRight:150,
       marginLeft:150,
       height:"90%",
       border:"1px solid black"
    
      },
    
      header: {
        border:"1px solid black"
      },
      headeritems: {
        marginRight:30,
        padding:"10px",
       
      },
      mainheader: {
        border:"1px solid black",
        marginRight:"30px",
        marginLeft:"30px",
        marginBottom:"20px",
      }
    };
    return (
      <div style={styles.container} >
        <h3 style={styles.header}>
        <spam style={styles.headeritems} >Google Books </spam><spam style={styles.headeritems} >Searched</spam><spam style={styles.headeritems} >Saved </spam>
        </h3>
        <div style={styles.mainheader}>
          <h1>(React) Google Books Search</h1>
          <h1>Search for and save Books of Interest</h1>
        </div>
        
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
