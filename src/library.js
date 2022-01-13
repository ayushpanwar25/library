import React from 'react';

import logo from './logo.svg';
import './library.css';
import NewBook from './NewBook';
import BooksContainer from './BooksContainer';
import { FaGithub } from 'react-icons/fa'

function Library() {
  return (
    <div className="library">
      <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        Library
      </header>
      <NewBook />
      <BooksContainer></BooksContainer>
      <footer className="footer">
        <div className="footer-text">
          by Ayush Panwar
          <a href="https://www.github.com/payyup"><FaGithub /></a>
        </div>
      </footer>
    </div>
  );
}

export default Library;
