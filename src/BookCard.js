import React from 'react';
import './BookCard.css';
import PropTypes from 'prop-types';

class BookCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { image, title, author, id, added, read } = this.props.book;
    const { deleteBook, markRead } = this.props;

    return (
      <div className='book-card'>
        <div className="card-wrapper">
          <img src={image} alt={title} />
          <div className='bcard-body'>
            <div className="book-title">{title}</div>
            <div className="book-author">{author}</div>
            <div className="book-author">{read} {added}</div>
          </div>
        </div>
        <div className="card-buttons">
          <button className="delete-book" onClick={() => {
            deleteBook(id);
          }}
          >Delete</button>
          <button className="mark-read" onClick={() => {
            markRead(id);
          }}
          >Mark Read</button>
        </div>
      </div>
    )
  }
}

BookCard.propTypes = {
  book: PropTypes.object,
  deleteBook: PropTypes.func,
  markRead: PropTypes.func
}

export default BookCard;