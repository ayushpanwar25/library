import React, { useState } from "react";
import './NewBook.css';

export default function NewBook() {
  const [form, setForm] = useState({
    title: "",
    author: "",
    image: "",
    read: false
  });

  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();

    const newBook = { ...form };

    await fetch("http://localhost:3002/bookdb/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    })

    setForm({ title: "", author: "", image: "", read: false });
  }

  return (
    <div className="new-book">
      <form onSubmit={onSubmit} className="new-book-form">
        <input
          type="text"
          className="form-control"
          id="title"
          value={form.title}
          onChange={(e) => updateForm({ title: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          id="author"
          value={form.author}
          onChange={(e) => updateForm({ author: e.target.value })}
        />
        <input
          type="text"
          className="form-control"
          id="image-url"
          value={form.image}
          onChange={(e) => updateForm({ image: e.target.value })}
        />
        <select id="read" name="read" onChange={(e) => updateForm({ read: e.target.value })}>
          <option value='true'>Yes</option>
          <option value='false'>No</option>
        </select>
        <input
          type="submit"
          value="Add Book"
          className="btn"
        />
      </form>
    </div>
  );
}