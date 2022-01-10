import React from "react";
import './NewBook.css';

class NewBook extends React.Component {
  render() {
    return (
      <div className="new-book">
        <div className="new-book-form">
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="author" placeholder="Author" />
          <select id="read" name="read">
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <button className="add-book">Add Book</button>
      </div>

    )
  }
}

export default NewBook;