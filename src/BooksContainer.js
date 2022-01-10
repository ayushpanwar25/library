import React, { Component } from "react";
import BookCard from "./BookCard";
import './BooksContainer.css';

class BooksContainer extends Component {

  render() {

    const books = [
      {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://images-na.ssl-images-amazon.com/images/I/710+HcoP38L.jpg"
      },
      {
        id: 2,
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        image: "https://images-na.ssl-images-amazon.com/images/I/41tA1m6+5dL._SX308_BO1,204,203,200_.jpg"
      }];

    return (
      <div className="book-container">
        {books.map(book => (
          <BookCard
            key={book.id}
            image={book.image}
            title={book.title}
            author={book.author}
          />
        ))}
      </div>
    );
  }
}

export default BooksContainer;