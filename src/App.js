import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Link }
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './components/Footer';
// import UserHeader from './components/Header';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import Pages from './pages';
import user from "./user";

// class App extends Component() {
//   constructor(props)
//   super
// render() {
//   return
// }
// )


// }
function App() {
  return (
    // <div className="App">

    //   <UserHeader />
    //   <Projects />
    //   <Contact />
    //   <Footer />

    // </div>

    <Pages user={user} />
  );
}

export default App;
