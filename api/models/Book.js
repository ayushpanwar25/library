const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  image: String
}, {
  collection: 'books'
});

BookSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;