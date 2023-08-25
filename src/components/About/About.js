import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Projects from "./Projects";
import laptopImg from "../../Assets/sukrut_square.jpg";
import AboutImg from "../../Assets/programmer.png"
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ 
              
              display: "flex",
              justifyContent: "center",
              alignItems: "center", 
              overflow: "hidden", 
              paddingTop: "30px", 
              paddingBottom: "30px" }}
            
            className="about-img circular-image"
          >
            <Tilt>
            <img src={AboutImg} alt="about" className="img-fluid rounded-circle" />
            </Tilt>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          {/* Professional <strong className="purple">Skillset </strong> */}
          Projects
        </h1>

        <Projects />

      </Container>
    </Container>
  );
}

export default About;
