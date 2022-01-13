const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: String,
  author: String,
  image: String,
  read: { type: Boolean, default: false },
  added: { type: Date, default: Date.now() }
}, {
  collection: 'books'
});

BookSchema.method("toJSON", function () {
  const { _id, added, ...object } = this.toObject();
  object.id = _id;
  object.added = added.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata" });
  return object;
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;