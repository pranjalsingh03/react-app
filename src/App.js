import React from 'react';
import './App.css';
import Header from "./Components/header"
import Footer from "./Components/footer"

// const user= {
//   name: 'Pranjal Singh',
//   age: 18,
//   location: 'India'
//   }
//   function App() {
//   return (
//   <div className="App">
//   <h1>Hello, {user.name}</h1>
//   <h2>Age: {user.age}</h2>
//   <h2>Location: {user.location}</h2>
//   </div>
//   );
// };


export default function MyApp() {
  return (
    <div>
      <Header />    {/*Header of the portfolio*/}


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