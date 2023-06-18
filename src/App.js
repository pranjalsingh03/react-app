import React from 'react';
import './App.css';
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import Intro from './Components/Intro/intro';
import Home from "./Components/Home/home";
import Projects from './Components/Projects/projects';


export default function MyApp() {
  return (
    <div>
      <Header />    {/*Header of the portfolio*/}
      <Intro/>       {/* introduction  */}
      <Home/>       {/*Home page */}
      <Projects/>
      <Footer/>     {/*//Footer of the portfolio */}
       
    </div>
  );
  }
