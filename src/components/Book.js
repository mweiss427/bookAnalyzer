import React, {useState} from "react";
import axios from "axios";
const Book=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);

    //TODO move to an onClick()
    const searchBook=(event)=>{
        if(event.key === "Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q=1680680587&key=AIzaSyBib_TBHVgNa7eaCduwzOJJDh20ve1hZHU')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            {/*<div className="book">
                <img src="./images/we_are_bob.jpg" alt="" />
                <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
            </div>*/}
            <div> books go here</div>
        </>
    )
}

export default Book;