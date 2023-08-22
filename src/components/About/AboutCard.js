import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hariprasath </span>
            from <span className="purple"> Srivilliputtur, Tamil Nadu.</span>
            <br />I have completed my Bachelor Degree in 2018.
            <br />After that, I have worked in my core field for 3 years.
            <br />Additionally, I am enthusiastic about Web Development.
            <br />I have learned Web Technologies.
            <br />Currently working in Blazon Technologies, Coimbatore.
          </p>
          {/* <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Partying
            </li>
            <li className="about-activity">
              <ImPointRight /> EDM
            </li>
          </ul>
           */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
