import React from "react";
import "./footer.css";
import "../../App.css";
import ld from "../../Images/linkedin.svg"
import tw from "../../Images/twitter.svg"
import gh from "../../Images/github.svg"


const Footer = () => {
    return (
        <footer className="text-center">
        <div className=" text-muted py-4 py-lg-5">
            <ul className="list-inline">
                <li className="list-inline-item me-4"><a className="link-secondary" href="/">Web design</a></li>
                <li className="list-inline-item me-4"><a className="link-secondary" href="/">Development</a></li>
                <li className="list-inline-item"><a className="link-secondary" href="/">Hosting</a></li>
            </ul>
            <ul className="list-inline">
                <li className="list-inline-item me-4"> <img classNameName="image-foot" src={ld} alt="facebook" /></li>
                <li className="list-inline-item me-4"><img classNameName="image-foot" src={tw} alt="" /></li>
                <li className="list-inline-item"><img className="image-foot" src={gh} alt="" /></li>
            </ul>
            <p className="text-center">Design and Build by Pranjal singh</p>
        </div>
    </footer>
    );
}

export default Footer;