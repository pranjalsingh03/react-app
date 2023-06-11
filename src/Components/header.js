import React from 'react';
import './header.css';
import "../App.css"

const Header = () => {
  return (

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Pranjal Singh</a>
        <button class="toggle-button">toggle</button>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          {/* <issue_comment>username_1: @username_0  I think you have to add the code in the
        <code>src/App.js</code> file. </issue_comment>   */}
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            </ul>
              <button class="contactus-button">              <a class="nav-link" href="#">Login</a>
              </button>
        </div>
      </div>
    </nav>

  )
}

export default Header;
