import React, { useState } from 'react';
import './style.css'
import BookDetail from './BookDetail'
import MyBookList from './MyBookList';
import AuthorDetail from './AuthorDetail';

function Main(args) {
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col">
          <h2>My Books</h2>
          <MyBookList></MyBookList>
        </div>
        <div className="col">
          <h2>Book Detail</h2>
          <BookDetail></BookDetail>
        </div>
        <div className="col">
          <h2>Author Detail</h2>
          <AuthorDetail></AuthorDetail>
        </div>
      </div>
    </div>
    </>
  );
}

export default Main;