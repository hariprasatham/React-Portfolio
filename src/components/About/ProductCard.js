import React, { useContext } from 'react';
import {
  Button, Card, Badge, Col,
} from 'react-bootstrap';

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: 'left',
  },
  linkStyle: {
    textDecoration: 'none',
    padding: 10,
  },
  buttonStyle: {
    border: "none",
    margin: 5,
    backgroundColor: "#c770f0"
  },
};

const ProjectCard = (props) => {

const {ProjectImg, demoLink, sourceLink} = props;

  return (
      <Card>
        <Card.Img variant="top" src={ProjectImg} />
        <Card.Body>
            <Button
              style={styles.buttonStyle}
              href={demoLink}
              target='_blank'
            >
              Demo
            </Button>
            <Button
              style={styles.buttonStyle}
              href={sourceLink}
              target='_blank'
            >
                Source Code
            </Button>
        </Card.Body>
      </Card>
  );
};


export default ProjectCard;