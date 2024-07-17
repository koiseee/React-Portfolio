import React, { useState, useEffect } from "react";
import daddy from "../assets/daddy.png";
import daddy2 from "../assets/daddy-2.png";

export default function Home({ color }) {
  const [font, setFont] = useState("Bebas Neue");
  const [isFlipped, setIsFlipped] = useState(false);

  const fonts = [
    "Bebas Neue",
    "Arial",
    "Courier New",
    "Georgia",
    "Times New Roman",
    "Verdana",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
      setFont(randomFont);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="sec--1" id="home">
        <div
        className={`card--container ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="card">
          <div className="card--front">
            <img className="daddy--r" src="./koko2.png" alt="Front" />
          </div>
          <div className="card--back">
            <img src="./koko.png" alt="Back" />
          </div>
        </div>
      </div>
      <div className="home--container">
        <h3 style={{ color }}>Hi,</h3>
        <h1 style={{ fontFamily: font }}>I'm Mhel</h1>
        <h4 style={{ color }}>Full Stack Developer</h4>
        <p style={{ color }}>
          I have over years of experience in developing <br /> robust and
          scalable web applications. <br />
          My expertise lies in technologies such as <br />
          JavaScript, React, Node.js, and more.
        </p>
      </div>
      <div>
        <img className="bg-image" src="./koko-white.svg" alt="" />
      </div>
    </section>
  );
}
