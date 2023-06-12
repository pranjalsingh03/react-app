import React from "react";
import './intro.css';
import logo from "../../Images/profile.JPG";

const Intro = () => {
    return (
        //Main box of introdunction page
        <div className="main-box">
            {/* left side of the div */}
            <div className="main-box-content-left">
                <span className="first-name">Pranjal</span>
                <span className="last-name">Singh </span>
                <div className="about-user">Hello World! ldfvedskjdsnpranjl singh jdfbunjdvcs ipranjla pranjal singh prabnjsbdasn bjbdfusujdfbnieeurehgbvjs
                </div>
                <div orientation="left"             class="side__StyledContainer-sc-18y99l7-0 gXnnBS">
                </div>
            </div>
            {/* Right side of the div */}
            <div className="main-box-content-right">
                <img className="profile-picture" src={logo} alt="hello" />
                <div orientation="right" class="side__StyledContainer-sc-18y99l7-0 lbtSgG"><div class="email__StyledLinkWrapper-sc-1fu3fru-0 dvseSq fade-enter-done"><a href="mailto:pranjalmagansingh9304@gmail.com" class="email__StyledEmailLink-sc-1fu3fru-1 gduzAh">pranjalmagansingh9304@gmail.com</a></div></div>
            </div>

        </div>
    )
}

export default Intro;


