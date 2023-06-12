import React from "react";
import './intro.css';
import logo from "../../Images/profile.JPG";

const Intro= () => {
    return (
        //Main box of introdunction page
        <div className="main-box">
            {/* left side of the div */}
        <div className="main-box-content-left">
            <span className="first-name">Pranjal</span>
            <span className="last-name">Singh </span>
            <div className="about-user">Hello World! ldfvedskjdsnpranjl singh jdfbunjdvcs ipranjla pranjal singh prabnjsbdasn bjbdfusujdfbnieeurehgbvjs </div>
        </div>
        {/* Right side of the div */}
        <div className="main-box-content-right">
            <img className="profile-picture" src={logo} alt="hello"/>
        </div>
        
        </div>
    )
}

export default Intro;


