import React from "react";
import "./footer.css";
import "../../App.css";
import ld from "../../Images/linkedin.svg"
import tw from "../../Images/twitter.svg"
import gh from "../../Images/github.svg"


const Footer = () => {
    return (
        <footer className="text-center">
        <div>
            <ul className="list-inline">
                <li className="list-inline-item me-4"><a className="link-secondary" href="/">Web design</a></li>
                <li className="list-inline-item me-4"><a className="link-secondary" href="/">Development</a></li>
                <li className="list-inline-item"><a className="link-secondary" href="/">Hosting</a></li>
            </ul>
            <ul className="list-inline">
                <li className="list-inline-item me-4"> <a href="https://www.linkedin.com/in/pranjalsingh03/"><img className="image-foot" src={ld} alt="linkedin" /></a></li>
                <li className="list-inline-item me-4"><a href="/"><img className="image-foot" src={tw} alt="" /></a></li>
                        
                <li className="list-inline-item"><a href="https://github.com/pranjalsingh03"><img className="image-foot" src={gh} alt="" /></a></li>
            </ul>
            <p className="text-center">Design and Build by Pranjal singh</p>
        </div>
    </footer>
    );
}

export default Footer;