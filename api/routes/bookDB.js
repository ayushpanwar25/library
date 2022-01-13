const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Book = require("../models/Book");

mongoose
  .connect("mongodb://localhost:27017/projects", { useNewUrlParser: true })
  .then(() => {
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  })


router.post("/create", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book.title);
});

router.get("/delete/:id", async (req, res) => {
  const book = await Book.findByIdAndRemove(req.params.id);
  res.send(book.title);
});

router.get("/update/:id", async (req, res) => {
  await Book.findById(req.params.id).exec(async function (err, book) {
    book.read = !book.read;
    await book.save();
  });
  res.send("updated");
});

router.get('/get/:id', async (req, res) => {
  await Book.findById(req.params.id).exec((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

router.get('/getAll', async (req, res) => {
  await Book.find({}).sort({ title: 1 }).exec((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

router.get('/getRead', async (req, res) => {
  await Book.find({ read: true }).sort({ title: 1 }).exec((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

router.get('/getUnread', async (req, res) => {
  await Book.find({ read: false }).sort({ title: 1 }).exec((err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;