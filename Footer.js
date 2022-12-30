import React from "react"

// developing header component
export default function Footer(){
    return(
        <nav className="nav-foot" >
           <h4>ADDRESS</h4>
           
           <p><a href = "https://mail.google.com/"> <img src="./emailLogo.jpeg" width="15px"/> </a>cristiannsengi@gmail.com <br/>
            <img src="PhoneLogo.jpeg" width="15px"/>  +250786457338 <br/>
            <img src="locationIcon.png" width="15px"/>  Kigali-Rwanda
           </p>
           
            <p className="copyPara">© 2022 ChrisDev Technology. All rights reserved.</p>
        </nav>
    )
}