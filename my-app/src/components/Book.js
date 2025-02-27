import React from 'react'

function Book(props) {
  const book = props.book;
  return (
    
    <div>
        <h2>{book.name}</h2>
        <p>{book.author}</p>
        <p>{book.date}</p>
    </div>
  )
}

export default Book
