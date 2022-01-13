import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import './BooksContainer.css';

export default function BooksContainer() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks();
    return;
  }, [books.length]);

  async function getBooks() {
    const res = await fetch(`http://192.168.0.10:3002/bookdb/getAll`);
    const books = await res.json();
    setBooks(books);
  }

  async function deleteBook(id) {
    await fetch(`http://192.168.0.10:3002/bookdb/delete/${id}`);
    getBooks();
  }

  async function changeRead(id) {
    await fetch(`http://192.168.0.10:3002/bookdb/update/${id}`);
    getBooks();
  }

  return (
    <div className="book-container">
      {books.map(book => (
        <BookCard
          key={book.id}
          deleteBook={() => deleteBook(book.id)}
          changeRead={() => changeRead(book.id)}
          book={book}
        />
      ))}
    </div>
  );
}