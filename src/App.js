import React from 'react';
import './App.css';
import Header from "./Components/Header/header"
import Footer from "./Components/Footer/footer"
import Intro from './Components/Intro/intro';



export default function MyApp() {
  return (
    <div>
      <Header />    {/*Header of the portfolio*/}
      <Intro/>
       <Footer/>     {/*//Footer of the portfolio */}
    </div>
  );
  }

// function AboutPage(){
//   return(
//     <div>
//       <h1>About Page</h1>
//       {/* <p>This is the about page</p> */}
//     </div>
//     )
// }
// function HomePage(){
//   return(
//     <div>
//       <h1>Home Page</h1>
//       {/* <p>This is the home page</p> */}
//     </div>
//   )
// }