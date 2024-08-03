import { React, useState } from "react";

export default function Header({
  color,
  showPicker,
  changeColor,
  togglePicker,
  logoColor,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="text-container">
      <img className="logo" src={`./${logoColor}`} alt="" style={{ color }} />
      <p className="hover-text" style={{ color }} onClick={togglePicker}>
        Koko.
      </p>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`color-picker ${showPicker ? "show" : ""}`}>
        <div className="color red" onClick={() => changeColor("red")}></div>
        <div
          className="color yellow"
          onClick={() => changeColor("yellow")}
        ></div>
        <div className="color blue" onClick={() => changeColor("blue")}></div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={closeSidebar}>
          &times;
        </button>
        <ul className="sidebar-link">
          <li className="list-home">
            <a href="#home" style={{ color }}>
              Home
            </a>
          </li>
          <li className="list-about">
            <a href="#about" style={{ color }}>
              About Me
            </a>
          </li>
          <li className="list-projects">
            <a href="#project" style={{ color }}>
              Projects
            </a>
          </li>
          <li className="list-contact">
            <a href="#contact" style={{ color }}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <ul className="nav--bar">
        <li className="list--home">
          <a href="#home" style={{ color }}>
            Home
          </a>
        </li>
        <li className="list--about">
          <a href="#about" style={{ color }}>
            About Me
          </a>
        </li>
        <li className="list--projects">
          <a href="#project" style={{ color }}>
            Projects
          </a>
        </li>
        <li className="list--contact">
          <a href="#contact" style={{ color }}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
