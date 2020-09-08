import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">

      <UserHeader />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
