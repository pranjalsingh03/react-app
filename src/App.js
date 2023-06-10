import './App.css';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <p>Here is a button</p>
      <MyButton />
      <AboutPage />
      <HomePage />
    </div>
  );
  }

function AboutPage(){
  return(
    <div>
      <h1>About Page</h1>
      {/* <p>This is the about page</p> */}
    </div>
    )
}
function HomePage(){
  return(
    <div>
      <h1>Home Page</h1>
      {/* <p>This is the home page</p> */}
    </div>
  )
}