import React from 'react';

const book = (props) => {
  const { book } = props;

  return (
    <div className={props.className}>
      <div>
        { book.imageLinks !== undefined &&
          <img src={book.imageLinks.smallThumbnail} alt=""/>
        }
      </div>
      <div>
        <div>Title: {book.title}</div>
        <div>Publisher: {book.publisher || 'N/A'}</div>
        <div>Published on: {book.publishedDate || 'N/A'}</div>
        <div>Description: {book.description || 'N/A'}</div>
      </div>
    </div>
  )
}

export default book;
