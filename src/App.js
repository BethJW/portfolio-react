import React from "react";
import "./App.css";
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
