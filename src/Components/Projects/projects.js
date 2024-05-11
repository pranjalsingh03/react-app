import React, { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";
import Projectone from "../../Images/webcalendar.png";
import Projecttwo from "../../Images/kavachphoto.jpg";
import Projectthree from "../../Images/flipkartclone.jpg";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const projectImages = [Projectone, Projecttwo, Projectthree, Projectone];

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/pranjalsingh03/repos', {
                    headers: {
                        Authorization: `Bearer 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`
                    }
                });
                // setProjects(response.data);
                const selectedProjects = response.data.filter(project => (
                    project.topics.includes("project")
                ));
                setProjects(selectedProjects);
                setCurrentProjectIndex(prevIndex=>
                    (prevIndex+1)%projectImages.length);
            } catch (error) {
                console.error('Error fetching GitHub projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="main-content-area-box">
            <h3 className="Heading-sc-16ftyqo-0 gRQVKa" data-sr-id="3">
                Some Things I've Built
            </h3>
            {projects.map((project, index) => (
                <div key={index} className="featured__StyledProject-sc-19vdtah-9 VhaEB" data-sr-id="4">
                    <img src={projectImages[currentProjectIndex]} alt={`project${index + 1}`} className={`project${index + 1}`} />
                    <div className="featured__StyledContent-sc-19vdtah-1 gWlhZI">
                        <h4 className="featured__StyledLabel-sc-19vdtah-2 dZTpBf">Featured Project</h4>
                        <h5 className="featured__StyledProjectName-sc-19vdtah-3 jRnWTV">
                            <a href={project.html_url} target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">
                                {project.name}
                            </a>
                        </h5>
                        <div className="featured__StyledDescription-sc-19vdtah-4 hwxmov">
                            <p>{project.description}</p>
                        </div>
                        <div className="project-links">
                            <a href={project.homepage} target="_blank" rel="nofollow noopener noreferrer" className="live-preview">Live Preview</a>
                            <a href={project.html_url} target="_blank" rel="nofollow noopener noreferrer" className="github-link">Source Code
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Projects;
