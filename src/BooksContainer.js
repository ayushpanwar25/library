import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";
import './BooksContainer.css';

export default function BooksContainer() {

  const [books, setBooks] = useState([]);

  useEffect(() => {

    async function getBooks() {
      const res = await fetch(`http://192.168.0.10:3002/bookdb/getAll`);
      const books = await res.json();
      setBooks(books);
    }

    getBooks();
    return;
  }, [books.length]);

  async function deleteBook(id) {
    await fetch(`http://192.168.0.10:3002/bookdb/delete/${id}`);
    const newBooks = books.filter(book => book.id !== id);
    setBooks(newBooks);
  }

  async function markRead(id) {
    await fetch(`http://192.168.0.10:3002/bookdb/update/${id}`, {
      method: "POST"
    });
    setBooks(books);
  }

  return (
    <div className="book-container">
      {books.map(book => (
        <BookCard
          key={book.id}
          deleteBook={() => deleteBook(book.id)}
          markRead={() => markRead(book.id)}
          book={book}
        />
      ))}
    </div>
  );
}