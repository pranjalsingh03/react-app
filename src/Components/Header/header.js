import React from 'react';
import './header.css';
import Intro from '../Intro/intro';
import ContactUs from '../Contactus/contact';
import logo from "../../Images/logo1.png"
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router, 
  Link,
  Route,
  Routes,
 } from 'react-router-dom';
import {ReactComponent as Sun} from "./Sun.svg"
import {ReactComponent as Moon} from "./Moon.svg"
import Projects from '../Projects/projects';


const Header = () => {

  const [theme ,setTheme]= useState("dark-theme");
  const togglethemes = () =>{
    if(theme === "dark-theme"){
      setTheme("light-theme");
    }else{
      setTheme("dark-theme");
    }
  };

  useEffect(()=>{
    document.body.className=theme;
  },[theme]);
  return (
<>
<Router>
    <nav className="navbar navbar-expand-lg navbar-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://github.com/pranjalsingh03">
        <img src={logo} alt='logo' className='image-logo-header' />
      </a>
      <div className='dark_mode'>
        <input
          className='dark_mode_input'
          type='checkbox'
          id='darkmode-toggle'
          onClick={() => togglethemes()}
        />
        <label className='dark_mode_label' htmlFor='darkmode-toggle'>
          <Moon /><Sun />
        </label>
      </div>
      <button className="navbar-toggler"
        type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
        <button className="button contactus-button">
          <Link className="nav-link" to="/resume">Resume</Link>
        </button>
      </div>
    </div>
  </nav>
    
    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Intro />}
                        ></Route>
                        <Route
                            exact
                            path="/about"
                            element={<Intro />}
                        ></Route>
                        <Route
                            exact
                            path="/contact"
                            element={<ContactUs />}
                        ></Route>
                        <Route
                            exact
                            path="/project"
                            element={<Projects />}
                        ></Route>
                    </Routes>
    </Router>
    </>
  )
}

export default Header;

