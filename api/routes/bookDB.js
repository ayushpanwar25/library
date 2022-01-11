const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const async = require("async");

const Book = require("../models/Book");

mongoose
  .connect("mongodb://localhost:27017/projects", { useNewUrlParser: true })
  .then(() => {
    const app = express()

    app.listen(5000, () => {
      console.log("Server has started!")
    })
  })

router.get('/', async (req, res, next) => {
  const books = await Book.find();
  res.send(books);
});

module.exports = router;