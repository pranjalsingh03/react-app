import React from "react";
import './intro.css';
import "./stars.css";
import github from "../../Images/github.svg";
import linkedin from "../../Images/linkedin.svg";
import instagram from "../../Images/instagram.svg";
import facebook from "../../Images/facebook.svg"
import twitter from "../../Images/twitter.svg";
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Intro = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Front-end developer",
                "UI/UX Designer",
                "Student"
            ],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
        });

        // Destroying
        return () => {
            typed.destroy();
        };
    }, []);

    return (


        <div className="main-box">

            {/* left side of the div */}
            <div className="main-box-content-left">
                <span className="first-name">Pranjal Singh</span>
                <div className="about-user"><p className="about-me"> Brings ideas to life with code.</p>
                    <h1 className="typed-component">I am a <span className="typed-span" ref={el}></span>{" "}</h1>
                    <div className="jsUDeb">
                        <a href="https://github.com/pranjalsingh03">
                            <img src={github} alt="github" className="responsive-logo-intro" />
                        </a>
                        <a href="https://www.linkedin.com/in/pranjalsingh03/">
                            <img src={linkedin} alt="linkedin" className="responsive-logo-intro" />
                        </a>
                        <a href="https://twitter.com/pranjal_magan09">
                            <img src={twitter} alt="twiter" className="responsive-logo-intro" />
                        </a>
                    </div>
                </div>
                <div orientation="left"
                    className="gXnnBS">
                    <div
                        className="email__StyledLinkWrapper-sc-1fu3fru-0 dvseSq fade-enter-done">
                        <a href="https://github.com/pranjalsingh03">
                            <img src={github} alt="github" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://www.linkedin.com/in/pranjalsingh03/">
                            <img src={linkedin} alt="linkedin" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://www.instagram.com/sanatani_magan09/">
                            <img src={instagram} alt="instagram" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://twitter.com/pranjal_magan09">
                            <img src={twitter} alt="twiter" className="Image-logo imagelogo" />
                        </a>
                        <a href="https://www.facebook.com/magan728">
                            <img src={facebook} alt="facebook" className="facebook-logo imagelogo" />
                        </a>
                    </div>
                </div>
            </div>
            {/* Right side of the div */}

            <div orientation="right" class="lbtSgG"><div class="email__StyledLinkWrapper-sc-1fu3fru-0 dvseSq fade-enter-done"><a href="mailto:pranjalmagansingh9304@gmail.com" class="email__StyledEmailLink-sc-1fu3fru-1 gduzAh">pranjalmagansingh9304@gmail.com</a></div></div>
        </div>
        // </div>
    )
}

export default Intro;


