import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contact-head">Get in touch ✉️ </div>
      <h3>Available via email, linkedin and Mobile </h3>
      <ul>
        <li>
          Email <br />{" "}
          <a href="mailto:bethanyjw@live.co.uk">bethanyjw@live.co.uk</a>
        </li>
        <li>
          Linkedin
          <br />
          <a href="https://www.linkedin.com/in/bethjwilliamson/">
            @bethjwilliamson
          </a>
        </li>
        <li>
          {" "}
          Mobile <br /> <small>07938241230</small>
        </li>
      </ul>
    </div>
  );
}
