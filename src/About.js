import React from "react";
import Portrait from "./graduate.JPG";
import PDF from "./Beth Williamson Cv.pdf";

import "./About.css";
export default function About() {
  return (
    <div className="About" id="about">
      <h2 className="introduction"> Hi, I'm Beth Williamson </h2>
      <h4>📍Based in Cheshire</h4>
      <div className="row">
        <div className="col-sm-6">
          <p className="about-me">
            I am a front-end developer in Cheshire, Crewe with a 2:1 bachelors
            degree in Graphic Design. I started my coding journey about a year
            ago when I became increasingly interested in the "behind the scenes"
            of my graphic design projects. I knew how to design websites,
            publications and other media from a design software package but I
            wanted to jump into learning how to effectively build them with
            code. <br />
            How did I get here? I began experimenting with basic HTML and CSS
            during my time at university, however, I knew that I wanted to take
            my passion further and that's when I started a coding course, called
            SheCodes.
          </p>
          <br />
          <p>
            <a href={PDF}>Download my CV here</a>
          </p>
        </div>
        <div className="col-sm-6 ">
          <img src={Portrait} className="img-fluid" ALT="Beth" />
        </div>
      </div>
    </div>
  );
}
