import React from "react";
import "./project.css";
import Projectone from "../../Images/profile.JPG"

const Projects = () => {

    return (
        <div className="main-content-area-box">
            <h2 className="headline">Projects</h2>
            <div className="vertical" style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
            <div className="project-box">
                <div className="project-image kaam-dhaam">
                    <img className="project1" src={Projectone} alt="project"/>
                </div>
                <div className="project-discription">
                    <p></p>
                </div>
            </div>
        </div>
    );
}
export default Projects;