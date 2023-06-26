import React from "react";
import "./project.css";
import Projectone from "../../Images/profile.JPG"

const Projects = () => {

    return (
        <div className="main-content-area-box">
            <h2 className="headline">Projects</h2>
            <div class="featured__StyledProject-sc-19vdtah-9 VhaEB"
                data-sr-id="4">
                <div class="featured__StyledContent-sc-19vdtah-1 gWlhZI">
                    <h4 class="featured__StyledLabel-sc-19vdtah-2 dZTpBf">Featured Project</h4>
                    <h5 class="featured__StyledProjectName-sc-19vdtah-3 jRnWTV">
                        <a href="www.link" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">Face Mask Detection</a>
                    </h5>
                    <div class="featured__StyledDescription-sc-19vdtah-4 hwxmov">
                        <p>Face Mask Detection system to detect face masks in static
                            images as well as in real-time video streams. Own
                            custom dataset was built using Bing Search API and
                            Kaggle.</p>
                        <p>Inspired by Adrian Rosebrock's
                            <a href="www.gothub.com" target="_blank" rel="nofollow noopener noreferrer">PyImageSearch Blog</a>
                        </p>
                    </div>


                </div>

                <img src={Projectone} alt="project1" className="project1" />
            </div>
            <div class="featured__StyledProject-sc-19vdtah-9 VhaEB"
                data-sr-id="4">
                    
                <img src={Projectone} alt="project1" className="project2" />
                <div class="featured__StyledContent-sc-19vdtah-1 enJBDof">
                    <h4 class="featured__StyledLabel-sc-19vdtah-2 dZTpBf">Featured Project</h4>
                    <h5 class="featured__StyledProjectName-sc-19vdtah-3 jRnWTV">
                        <a href="www.link" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">Face Mask Detection</a>
                    </h5>
                    <div class="featured__StyledDescription-sc-19vdtah-4 hwxmov">
                        <p>Face Mask Detection system to detect face masks in static
                            images as well as in real-time video streams. Own
                            custom dataset was built using Bing Search API and
                            Kaggle.</p>
                        <p>Inspired by Adrian Rosebrock's
                            <a href="www.gothub.com" target="_blank" rel="nofollow noopener noreferrer">PyImageSearch Blog</a>
                        </p>
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Projects;