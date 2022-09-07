import React from "react";
import { useState } from "react";


const BookDetail = ({book}) => {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    let weAreBoB = [];
    console.log(book);

    function renderBook(book){
        /*weAreBoB = book.filter(item => item.volumeInfo.title == "We Are Legion (We Are Bob)");
        console.log("BOB + " + weAreBoB)
        weAreBoB.map((item) => {
            let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            if(thumbnail!= undefined && amount !=undefined)
            {
                return (
                    <>
                        <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                            <img src={thumbnail} alt="" />
                            <div className="bottom">
                                <h3 className="title">{item.volumeInfo.title}</h3>
                                <p className="amount">${amount}</p>
                            </div>
                        </div>
                    </>
                )
            }
        })*/
        return( <div> sup </div>);
           
    }

    return(
        <>
            <div> lets go </div>
            {
                renderBook()
            }
                
        </>
    )
}

export default BookDetail;

{/*
            <div>book title: {title()}</div>
             <div className="bookDetail">
                <h3 className="title">"We Are Legion (We are Bob)"</h3>
                <img src="./images/we_are_bob.jpg" alt="" />
                <div> 
                    Amazon - 
                </div>
                <div>
                    Google - 
                </div> 
                <div className="bottom">
                    <p className="amount">$6969</p>
                    <p className="description"> A baller book about ...</p>
                </div>
                <div> 
                    reddit
                </div>
                <div> 
                    Quotes - 
                </div>
            </div>*/}