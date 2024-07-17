import React, { useState } from "react";

export default function Project({ color }) {
  const [hovered, setHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setHovered(true);
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setIsExpanded(false);
  };

  return (
    <section className="sec--3" id="project">
      <p style={{ color }}>Browse my recent</p>
      <h3 style={{ color }}>Projects</h3>
      <div className="clr--container">
        <div
          className="clr-card"
          style={{ "--clr": color }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-image">
            <img src="./medical-system.png" alt="" />
          </div>
          <span style={{ color }}>Medical Appointment System</span>
          {hovered && (
            <div
              className="clr-glow"
              style={{
                top: position.y + "px",
                left: position.x + "px",
              }}
            />
          )}
          {/* <div className={`additional-info ${isExpanded ? 'expanded' : ''}`}>
            <button>Git</button>
          </div> */}
        </div>
        <div
          className="clr-card"
          style={{ "--clr": color }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-image">
            <img src="./medical-system.png" alt="" />
          </div>
          <span style={{ color }}>Iot Based Seed Germination System</span>
          {hovered && (
            <div
              className="clr-glow"
              style={{
                top: position.y + "px",
                left: position.x + "px",
              }}
            />
          )}
        </div>
        <div
          className="clr-card"
          style={{ "--clr": color }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="card-image">
            <img src="./medical-system.png" alt="" />
          </div>
          <span style={{ color }}></span>
          {hovered && (
            <div
              className="clr-glow"
              style={{
                top: position.y + "px",
                left: position.x + "px",
              }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
