import React from "react";
import "./home.css"
import profile from "../../Images/profile.JPG"

const Home = () => {
    return (
        <div className="main-box-area">
            <div className="main-box-area-left">
                <div className="main-box-area-left-content">
                    <div className="main-box-area-left-content-heading">
                        <span
                            className="main-box-area-left-content-heading-text">
                            About Me</span>
                    </div>
                    <div className="main-box-area-left-content-para">
                        <span className="main-box-area-left-content-para-text">
                            Hello World! ldfvedskjdsnpranjl singh jdfbunjdvcs
                            ipranjla pranjal singh prabnjsbdasn
                            bjbdfusujdfbnieeurehgbvjs
                        </span>
                    </div>
                </div>
                
            </div>
            <div className="main-box-area-right">
                    <div className="main-box-area-right-content">
                    <img className="profile-picture" src={profile} alt="hello" />
                    </div>
                </div>
        </div>
    )
}

export default Home;
