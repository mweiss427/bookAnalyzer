import React, { useState } from 'react';
import './style.css'
import BookDetail from './BookDetail'
import MyBookList from './MyBookList';
import AuthorDetail from './AuthorDetail';
import axios from "axios";

function Main(args) {

  const [search,setSearch]=useState("");
  const [bookData,setData]=useState([]);

  const searchBook = (event) => {
    if(event.key === "Enter"){
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyBib_TBHVgNa7eaCduwzOJJDh20ve1hZHU')
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
        console.log(bookData)
    }
  }

  return (
    <>
      <div className="container">
        <div> Search
        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>

        </div>
        <div className="row">
          <div className="col">
            <h2>My Books</h2>
            <MyBookList></MyBookList>
          </div>
          <div className="col">
            <h2>Book Detail</h2>
            <BookDetail book={bookData}></BookDetail>
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