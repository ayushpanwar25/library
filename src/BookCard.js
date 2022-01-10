import React from 'react';
import './BookCard.css';
import PropTypes from 'prop-types';

class BookCard extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='book-card'>
        <div className="card-wrapper">
          <img src={this.props.image} alt={this.props.title} />
          <div className='bcard-body'>
            <div className="book-title">{this.props.title}</div>
            <div className="book-author">{this.props.author}</div>
          </div>
        </div>
        <div className="card-buttons">
          <button className="delete-book">Delete</button>
          <button className="mark-read">Mark Read</button>
        </div>
      </div>
    )
  }
}

BookCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string
}

export default BookCard;