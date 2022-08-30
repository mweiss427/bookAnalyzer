import React from "react";
const Main=()=>{
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1> quote machine</h1> 
                </div>
                <div className="row2">
                    <h2> Book information </h2> 
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"/>
                        <button><i class="fa-solid fa-telescope"></i></button>
                    </div>
                    <img src="./images/book-art1.jpg" alt=""/>
                </div>
            </div>
        </>
    )
}
export default Main;