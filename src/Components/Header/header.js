import React from 'react';
import './header.css';
import logo from "../../Images/logo1.png"
import { useState, useEffect } from "react";


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

    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand"
          href="https://github.com/pranjalsingh03">
          <img src={logo} alt='logo' className='image-logo-header' />
        </a>
        <a href='#' className='btn' onClick={()=> togglethemes()}>
          toggle
        </a>
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
              <a class="nav-link" aria-current="page"
                href="https://github.com/pranjalsingh03">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                href="https://github.com/pranjalsingh03">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                href="https://github.com/pranjalsingh03">Projects</a>
            </li>
            <li class="nav-item">
              <a class="nav-link"
                href="https://github.com/pranjalsingh03">Contact Us</a>
            </li>
          </ul>
          <button class="button contactus-button">
            <a class="nav-link"
              href="https://github.com/pranjalsingh03">Resume</a>
          </button>
        </div>
      </div>
    </nav>

  )
}

export default Header;

