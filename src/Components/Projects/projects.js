import React from "react";
import "./project.css";
import Projectone from "../../Images/profile.JPG"

const Projects = () => {

    return (
        <div className="main-content-area-box">
            <h2 className="headline">Projects</h2>
            <div className="project-box">
                <img className="project1" src={Projectone} alt="project" />
                <div className="project-discription">
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Projects;