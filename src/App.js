import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Carousel1 from "./components/Carousel";
import Cards from "./components/Cards";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Carousel1 />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
