import React from 'react'
import Book from './Book'

function RenderLists() {
    const bookList = ["Crime and punishment", "1984", "a brave new world"]

    const books = [{name:"Crime and Punishment", author: "Dostekevsky", date: 1933},{name:"1984",author:"Orwell",date:1945},{name:"a brave new world",author:"dunno",date:1944}]
  return (
    <div>
      {bookList.map(book =>{
        return <h2 key={book}>{book}</h2>
      })}
      <hr></hr>
      {books.map(book=>{
        return (
            <Book key={book.title} book={book}></Book>
        )
      })}
    </div>
  )
}

export default RenderLists
