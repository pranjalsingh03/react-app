import React from "react";
import './intro.css';
import "./stars.css";
import github from "../../Images/github.svg";
import linkedin from "../../Images/linkedin.svg";
import instagram from "../../Images/instagram.svg";
import facebook from "../../Images/facebook.svg"
import twitter from "../../Images/twitter.svg";
const Intro = () => {
    return (

        //Main box of introdunction page
        // <div id="home" className="intro route bg-image background">
        // <div id="stars" />
        // <div id="stars2" />
        // <div id="stars3" />
        <div className="main-box">
        
        {/* left side of the div */}
            <div className="main-box-content-left">
                <span className="first-name">Pranjal Singh</span>
                <div className="about-user">Brings ideas to life with code.
                </div>
                <div orientation="left"
                    class="side__StyledContainer-sc-18y99l7-0 gXnnBS">
                    <div 
                    class="email__StyledLinkWrapper-sc-1fu3fru-0 dvseSq fade-enter-done">
                        <a href="https://github.com/pranjalsingh03">
                        <img src={github} alt="github" className="Image-logo imagelogo"/>
                        </a>
                        <a href="https://www.linkedin.com/in/pranjalsingh03/">
                        <img src={linkedin} alt="linkedin" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://www.instagram.com/sanatani_magan09/">
                        <img src={instagram} alt="instagram" className="Image-logo imagelogo"/>
                        </a>
                        <a href="https://www.instagram.com/sanatani_magan09/">
                        <img src={twitter} alt="twiter" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://www.facebook.com/magan728">
                        <img src={facebook} alt="facebook" className="facebook-logo imagelogo" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Right side of the div */}
                
                <div orientation="right" class="side__StyledContainer-sc-18y99l7-0 lbtSgG"><div class="email__StyledLinkWrapper-sc-1fu3fru-0 dvseSq fade-enter-done"><a href="mailto:pranjalmagansingh9304@gmail.com" class="email__StyledEmailLink-sc-1fu3fru-1 gduzAh">pranjalmagansingh9304@gmail.com</a></div></div>
            </div>
            // </div>
    )
}

export default Intro;


