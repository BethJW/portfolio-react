import React from "react";
import "./Projects.css";
import Weather from "./weather.png";
import Recipe from "./recipe.png";
import WorldClock from "./world-clock.png";

export default function Projects() {
  return (
    <section className="Projects" id="projects">
      <h4>View my latest Work</h4>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={Weather} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Weather App</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img className="card-img-top" src={Recipe} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <img
              className="card-img-top"
              src={WorldClock}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
