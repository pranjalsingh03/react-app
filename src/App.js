import React from 'react';
import './App.css';
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import Intro from './Components/Intro/intro';
import Home from "./Components/Home/home";
import Projects from './Components/Projects/projects';
import ContactUs from './Components/Contactus/contact';
import Review from './Components/Reviews/review';



export default function MyApp() {
  return (
    <>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        
      <Header />    {/*Header of the portfolio*/}
      <Intro/>  </div>      {/* introduction  */}
      <Home/>      {/*Home page */}
      <Projects/>    {/* Project page */}
      <Review/>
      <ContactUs/>
      <Footer/>     {/*//Footer of the portfolio */}
      </>
  );
  }