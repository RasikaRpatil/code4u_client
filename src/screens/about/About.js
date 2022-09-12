import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import about from "./image/About Image.png";
import './About.css';

function About() {
  return (
    <div>
      <Container className="aboutcontainer">
        <Row>
          <Col>
            <h2> About Us</h2>
            <p>
              The ‘Code4U – Technical Blogging’  Website has been developed
              to override the problems prevailing in the practice manual system.
              The main objective of this website is to provide the details of
              Blogs, Topic, Idea, Content. It is a platform for people who are
              searching for useful articles dedicated to programming languages.
              This website includes well-explained, well-thought-out, and
              well-written computer science and programming articles. This
              Website is designed for the beginners who wants to join the IT
              Industry this web-site helps them to crack the technical/interview
              round by providing them various skill based technical programming
              language study material, coding, Pseudo code, Some trending
              technology related blogs. The content on Code4u has been divided
              into various categories to make it easily accessible for the
              users.
            </p>
            
          </Col>
          <Col>
            <Image className="imgabout" src={about} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
