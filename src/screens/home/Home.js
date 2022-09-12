import React from "react";
import { useRef } from "react";
import { Container, Col, Carousel } from "react-bootstrap";
import './Home.css';

const option = {
  items: 3,
  nav: false,
  rewind: true,
  autoplay: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      loop: true,
    },
  },
};

const events = {
  onDragged: function (event) {
    console.log("onDragged: " + event.type);
  },
  onChanged: function (event) {
    console.log("onDragged: " + event.type);
  },
  onTranslate: function (event) {
    console.log("onDragged: " + event.type);
  },
};

function Home() {
  const CarouselRef = useRef();
  return (
    <div>
      <Container>
        <Carousel>
          <Carousel.Item>
            <Col className="header-text">
              <h2>
                A COMPUTER SCIENCE  <span>PORTAL</span> FOR <br />
                STUDENTS
              </h2>
              <p>
              It contains well written, well thought and well explained computer science and programming articles
              </p>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col className="header-text">
              <h2>
                FRIENDLY <span>TEMPLATE</span> FOR <br />
                YOUR WEBSITE
              </h2>
              <h3>FOR YOUR WEBSITE </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.We
                ensure sit amet, consectetur adipiscing elit
              </p>
            </Col>
          </Carousel.Item>

          <Carousel.Item>
            <Col className="header-text">
              <h2>
                FRIENDLY <span>TEMPLATE</span> FOR <br />
                YOUR WEBSITE
              </h2>
              <h3>FOR YOUR WEBSITE </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.We
                ensure sit amet, consectetur adipiscing elit
              </p>
            </Col>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}

export default Home;
