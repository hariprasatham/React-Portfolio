import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Hariprasath </span>
            from <span className="purple"> Srivilliputtur, Tamil Nadu.</span>
            <br />I have completed my Bachelor's Degree in 2018.
            <br />Following that, I worked in my core field for 3 years.
            <br />Apart from that, I am enthusiastic about Web Development.
            <br />And, I have gained proficiency in various Web Technologies.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
