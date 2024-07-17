import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact({ color }) {
  return (
    <section className="sec--4" id="contact">
      <p style={{ color }} className="sec--p">
        Get in Touch
      </p>
      <h3 style={{ color }} className="sec-h">
        Contact Me
      </h3>
      <div className="contact-container" style={{ color }}>
        <div className="contact-card">
          <FontAwesomeIcon icon={faEnvelope} className="icon-card" />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=detorresmhel02@gmail.com&su=Hello%20there&body=I%20wanted%20to%20reach%20out%20to%20you%20because..."
            style={{ color }}
            target="_blank"
          >
            <p>detorresmhel02@gmail.com</p>
          </a>
        </div>
        <div className="contact-card">
          <FontAwesomeIcon icon={faLinkedin} className="icon-card" />
          <a
            style={{ color }}
            href="https://www.linkedin.com/in/mhel-yrvin-de-torres-6a9a26319/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </section>
  );
}
