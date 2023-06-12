import React from "react";
import './intro.css';
import logo from "../../Images/profile.JPG";

const Intro= () => {
    return (
        <div className="main-box">
        <div className="main-box-content-left">
            <span className="user-id">Pranjal Singh</span>
        </div>
        
        <div className="main-box-content-right">
            <img className="profile-picture" src={logo} alt="hello"/>
        </div>
       
        </div>
    )
}

export default Intro;


