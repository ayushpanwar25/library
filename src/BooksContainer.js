import React, { Component } from "react";
import BookCard from "./BookCard";
import './BooksContainer.css';

class BooksContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3002/bookDB")
      .then(res => res.json())
      .then(res => this.setState({ books: res }))
      .catch(err => err);
  }

  render() {

    return (
      <div className="book-container">
        {this.state.books.map(book => (
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