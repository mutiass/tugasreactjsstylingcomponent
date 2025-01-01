import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { projects } from './projectsData';

function Projects() {
  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col xs={12} md={6} lg={4} key={index}>
            <Card>
              <Card.Img variant="top" src={project.imgSrc} alt={project.alt} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">View Details</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
