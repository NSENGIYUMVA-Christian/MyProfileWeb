import React from "react"
import ReactDOM from "react-dom"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function Page(){
    return (
        <div>
          <Header/>
           <Main/>
           <Footer/>
           <marquee className="end">THANKS FOR VISITING 🥰</marquee>
        </div>
    )
}

ReactDOM.render(<Page/>, document.getElementById("root"))