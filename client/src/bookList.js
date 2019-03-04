import React from 'react';
import Book from './book';

const bookList = (props) => {
  return (
    <div>
      {props.bookList.map((book) => {
        return (
          <Book key={book.id} book={book.volumeInfo} className="Book"
          />
        )
      })
      }
    </div>
  );
}

export default bookList;
