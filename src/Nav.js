import React from "react";
import "./Nav.css";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-4">
      <a className="navbar-brand " href="#home">
        BW
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link " href="#home">
            Home <span className="sr-only"></span>
          </a>
          <a className="nav-item nav-link" href="#about">
            About
          </a>
          <a className="nav-item nav-link" href="#projects">
            Projects
          </a>
          <a className="nav-item nav-link" href="#contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
