import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faGraduationCap,
  faTrophy,
  faCertificate,
  faMedal,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function About({ color }) {
  const [isEducationLegend, setIsEducationLegend] = useState(false);
  const [isInternshipLegend, setIsInternshipLegend] = useState(false);

  const handleEducationClick = () => {
    setIsEducationLegend(!isEducationLegend);
  };

  const handleInternshipClick = () => {
    setIsInternshipLegend(!isInternshipLegend);
  };
  return (
    <section className="sec--2" id="about">
      <p style={{ color }}>Get to know</p>
      <div className="wave">
        <h3 style={{ color }}>About Me</h3>
        <FontAwesomeIcon icon={faHand} className="waveHand" style={{ color }} />
      </div>
      <div className="sec--2-about" style={{ color }}>
        <div
          className={`education ${isEducationLegend ? "legend" : ""}`}
          onClick={handleEducationClick}
        >
          <h3 style={{ color: isEducationLegend ? "black" : color }}>
            Education
          </h3>
          <img src="./BSU-logo.png" alt="BSU logo" />
          {isEducationLegend && (
            <div className="additional-info">Additional information here</div>
          )}
        </div>
        <div
          className={`internship ${isInternshipLegend ? "legend" : ""}`}
          onClick={handleInternshipClick}
        >
          <h3 style={{ color: isInternshipLegend ? "black" : color }}>
            Internship
          </h3>
          <img src="./8box-logo.png" alt="8box logo" />
          {isInternshipLegend && (
            <div className="additional-info">
              <h2>8box Solutions Inc.</h2>
              <div className="info-map">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="icon-marker"
                />
                <a
                  href="https://maps.app.goo.gl/FpJLg6o7DbWgpgk27"
                  target="_blank"
                >
                  <p>Julia Vargas Ave., Ortigas Center, Pasig, Philippines</p>
                </a>
              </div>
              <p className="add-info">
                Backend Developer Intern <br /> Febuary - May 2024
              </p>
            </div>
          )}
        </div>
        <div className="floating-icons">
          <FontAwesomeIcon icon={faCertificate} className="icon certificate" />
          <FontAwesomeIcon icon={faGraduationCap} className="icon cap" />
          <FontAwesomeIcon icon={faMedal} className="icon medal" />
          <FontAwesomeIcon icon={faTrophy} className="icon trophy" />
          <FontAwesomeIcon icon={faCertificate} className="icon certificate1" />
          <FontAwesomeIcon icon={faGraduationCap} className="icon cap1" />
          <FontAwesomeIcon icon={faMedal} className="icon medal1" />
          <FontAwesomeIcon icon={faTrophy} className="icon trophy1" />
          <FontAwesomeIcon icon={faCertificate} className="icon certificate2" />
          <FontAwesomeIcon icon={faGraduationCap} className="icon cap2" />
          <FontAwesomeIcon icon={faMedal} className="icon medal2" />
          <FontAwesomeIcon icon={faTrophy} className="icon trophy2" />
        </div>
      </div>
    </section>
  );
}
