import React from 'react';
import './header.css';


const Header = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand"
          href="https://github.com/pranjalsingh03">Pranjal Singh</a>
        <button class="toggle-button">toggle</button>
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
          </ul>
          <button class="button contactus-button">
            <a class="nav-link"
              href="https://github.com/pranjalsingh03">Contact Us</a>
          </button>
        </div>
      </div>
    </nav>

  )
}

export default Header;

