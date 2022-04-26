import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Carousel from "./components/carousel/Carousel";
import About from "./components/about/About";
import Works from "./components/works/Works";
import Wedd from "./components/weddings/Weddings";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <About/>
      <Works/>
      <Wedd/>
      <Team/>
      <Footer/>
    </div>
  );
}

export default App;
