import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [color, setColor] = useState("white");
  const [showPicker, setShowPicker] = useState(false);
  const [logoColor, setLogoColor] = useState("koko-white.svg")

  const logoColors = {
    white: "koko-white.svg",
    black: "koko-black.svg",
    blue: "koko-blue.svg",
    red: "koko-red.svg",
    yellow: "koko-yellow.svg"
  }


  const togglePicker = () => setShowPicker(!showPicker);

  const changeColor = (newColor) => {
    setColor(newColor);
    setLogoColor(logoColors[newColor])
    setShowPicker(false);
  };

  return (
    <div className="bg">
      
      <Header 
        color={color} 
        showPicker={showPicker} 
        togglePicker={togglePicker} 
        changeColor={changeColor} 
        logoColor={logoColor}
      />
      <Home id="home" color={color}  />
      <About id="about"color={color} />
      <Project id="project" color={color}/>
      <Contact id="contact"color={color} />
      <Footer color={color} />
    </div>
  );
}

export default App;
