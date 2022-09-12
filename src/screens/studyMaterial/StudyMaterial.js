import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import book from "./image/book.jpeg";
import articles from "./image/articls.jpeg";
import Reaserch from "./image/research.jpeg";
import "./StudyMaterial.css";
import { FaArrowRight } from 'react-icons/fa';

function StudyMaterial() {
  return (
    <div>
      <Container className='Sm-Container'>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div className='Cards'>
              <div className='ImageBox'>
                <Image className='Images' src={book} />
                <h1>Books</h1>
              </div>
              <div className='Content'>
                <Link to="/book" className="chbtn">
                  <Button className='sm-button'>
                    See All &nbsp;<FaArrowRight className='icons' />
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className='Cards'>
              <div className='ImageBox'>
                <Image className='Images' src={articles} />
                <h1>Technical Que&Ans</h1>
              </div>
              <div className='Content'>
              <Link to="/techqa" className="chbtn">
                  <Button className='sm-button'>
                    See All &nbsp;<FaArrowRight className='icons' />
                  </Button>
                </Link>

              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className='Cards'>
              <div className='ImageBox'>
                <Image className='Images' src={Reaserch} />
                <h1>Notes</h1>
              </div>
              <div className='Content'>
                <Link to="/notes" className="chbtn">
                  <Button className='sm-button'>
                    See All &nbsp;<FaArrowRight className='icons' />
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudyMaterial;
