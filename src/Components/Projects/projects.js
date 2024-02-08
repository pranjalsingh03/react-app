import React from "react";
import "./project.css";
import Projectone from "../../Images/webcalendar.png"
import Projecttwo from "../../Images/kavachphoto.jpg"
import Projectthree from "../../Images/flipkartclone.jpg"

const Projects = () => {

    return (
        <div className="main-content-area-box">
            <h3 class="Heading-sc-16ftyqo-0 gRQVKa" data-sr-id="3" >
                Some Things I've Built</h3>
            <div class="featured__StyledProject-sc-19vdtah-9 VhaEB"
                data-sr-id="4">
                <img src={Projectone} alt="project1" className="project1" />
                <div class="featured__StyledContent-sc-19vdtah-1 gWlhZI">
                    <h4 class="featured__StyledLabel-sc-19vdtah-2 dZTpBf">Featured Project</h4>
                    <h5 class="featured__StyledProjectName-sc-19vdtah-3 jRnWTV">
                        <a href="www.link" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">Web Calendar</a>
                    </h5>
                    <div class="featured__StyledDescription-sc-19vdtah-4 hwxmov">
                        <p>A Web-Calendar which helps human being with lot of information on day-to-day life.</p>
                    </div>
                </div>
            </div>
            <div class="featured__StyledProject-sc-19vdtah-9 VhaEB"
                data-sr-id="4">
                    
                <img src={Projecttwo} alt="project1" className="project2" />
                <div class="featured__StyledContent-sc-19vdtah-1 enJBDof">
                    <h4 class="featured__StyledLabel-sc-19vdtah-2 dZTpBf">Featured Project</h4>
                    <h5 class="featured__StyledProjectName-sc-19vdtah-3 jRnWTV">
                        <a href="www.link" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">Kavach App</a>
                    </h5>
                    <div class="featured__StyledDescription-sc-19vdtah-4 hwxmov">
                        <p>I have created this app in a cybersecurity hackathon. It will help the people with macilinous links and spam calls.</p>
                        {/* <p>Inspired by Adrian Rosebrock's
                            <a href="www.gothub.com" target="_blank" rel="nofollow noopener noreferrer">PyImageSearch Blog</a>
                        </p> */}
                    </div>


                </div>

            </div>
            <div class="featured__StyledProject-sc-19vdtah-9 VhaEB"
                data-sr-id="4">
                    
                <img src={Projectthree} alt="project1" className="project2" />
                <div class="featured__StyledContent-sc-19vdtah-1 enJBDof">
                    <h4 class="featured__StyledLabel-sc-19vdtah-2 dZTpBf">Featured Project</h4>
                    <h5 class="featured__StyledProjectName-sc-19vdtah-3 jRnWTV">
                        <a href="www.link" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">Flipkart Clone</a>
                    </h5>
                    <div class="featured__StyledDescription-sc-19vdtah-4 hwxmov">
                        <p>This Flipkart clone offers a smooth and intuitive interface that closely resembles the well-known Flipkart platform. It offers all the features you enjoy, like a large product catalogue, safe payment choices, real-time order tracking, exclusive offers, and an intuitive mobile design.</p>
                        {/* <p>Inspired by Adrian Rosebrock's
                            <a href="www.gothub.com" target="_blank" rel="nofollow noopener noreferrer">PyImageSearch Blog</a>
                        </p> */}
                    </div>


                </div>

            </div>
        </div>
    );
}

export default Projects;