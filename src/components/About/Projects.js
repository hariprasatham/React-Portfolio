import React from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

import ProjectCard from "./ProductCard";

import FlipkartImg from "../../Assets/flipkart.png";
import YoutubeImg from "../../Assets/youtube.png";
import TeslaImg from "../../Assets/tesla.png";

const projects = [
  {
    id: 1,
    img: FlipkartImg,
    title: "Filpkart Clone",
    "demo-link": "https://ecommerce-flipkart-clone-hari-react.vercel.app/",
    "source-code": "https://github.com/hariprasatham/ecommerce",
  },
  {
    id: 2,
    img: YoutubeImg,
    title: "Youtube Clone",
    "demo-link": "https://hari-youtube-clone-react.netlify.app/",
    "source-code": "https://github.com/hariprasatham/youtube-clone",
  },
  {
    id: 3,
    img: TeslaImg,
    title: "Tesla Clone",
    desc: "Filpkart Clone",
    "demo-link": "https://tesla-clone-reactjs-hari.netlify.app/",
    "source-code": "https://github.com/hariprasatham/tesla-clone",
  },
];

function Projects() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px", width: "100%" }}
    >
      {projects.map((project) => (
        <Col xs={1} sm={4} md={3} key={project.id}>
          <h4>{project.title}</h4>
          <ProjectCard
            ProjectImg={project.img}
            projectTitle={project.title}
            demoLink={project["demo-link"]}
            sourceLink={project["source-code"]}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Projects;
