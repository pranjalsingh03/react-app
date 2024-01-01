import React from 'react';
import './header.css';
import Intro from '../Intro/intro';
import Home from "../Home/home";
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

  const [theme ,setTheme]= useState("light-theme");
  const togglethemes = () =>{
    if(theme === "light-theme"){
      setTheme("dark-theme");
    }else{
      setTheme("light-theme");
    }
  };

  useEffect(()=>{
    document.body.className=theme;
  },[theme]);
  return (
<>
<Router>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand"
          href="https://github.com/pranjalsingh03">
          <img src={logo} alt='logo' className='image-logo-header' />
        </a>
        {/* <a href='#' className='btn' onClick={()=> togglethemes()}>
        <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </a> */}

        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onClick={()=> togglethemes()}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
                <button class="navbar-toggler"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page"
                to="/about">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"
                to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"
                to="/projects">Projects</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link"
                to="/contact">Contact Us</Link>
            </li>
          </ul>
          <button class="button contactus-button">
            <Link class="nav-link"
              to="/home">Resume</Link>
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

