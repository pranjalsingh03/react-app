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
                        "Hello, I'm Pranjal Singh! Originally from Gorkhpur, I bring a vibrant blend of experiences and passions to everything I do. With a curious and adventurous spirit, I'm constantly seeking new knowledge and embracing diverse perspectives. Integrity, empathy, and creativity are at the core of my being, shaping the way I interact with others and navigate the world. I find great joy in exploring the intersection of art and technology, as well as promoting sustainable practices for a greener future. In my free time, you'll often find me immersed in photography, capturing the beauty of everyday moments, or playing my guitar to unwind and express my emotions. Thank you for taking the time to get to know me!"
                        </span>
                    </div>
                </div>

            </div>
           
                    <img className="profile-picture" src={profile} alt="hello" />
                </div>
        
    )
}

export default Home;
