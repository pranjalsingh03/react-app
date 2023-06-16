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
                        "Hello, I'm Pranjal Singh! Originally from [Your Hometown], I bring a vibrant blend of experiences and passions to everything I do. With a curious and adventurous spirit, I'm constantly seeking new knowledge and embracing diverse perspectives. Integrity, empathy, and creativity are at the core of my being, shaping the way I interact with others and navigate the world. I find great joy in exploring the intersection of art and technology, as well as promoting sustainable practices for a greener future. In my free time, you'll often find me immersed in photography, capturing the beauty of everyday moments, or playing my guitar to unwind and express my emotions. With a background in Cybersecurity, including Bachelor degree of technology, I've had the privilege of working on various projects that have allowed me to combine my expertise with my passion for making a positive impact. Thank you for taking the time to get to know me!"
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
