import React from "react";
import "./App.css";
import "./Home.css";
import "./Projects.css";
import "./Nav.css";

import "bootstrap";
import Home from "./Home";
import Projects from "./Projects";
import Navigation from "./Nav";
export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Home />
      <Projects />
    </div>
  );
}
