import React from "react";
import { Card, Button, Row, Col, Container,Image } from "react-bootstrap";
import cLogo from "./image/c logo.png";
import cppLogo from "./image/c++ logo.png";
import pythonLogo from "./image/python.png";
import javaLogo from "./image/java.png";
import downline from "./image/downline.jpg"
import {FaArrowRight} from 'react-icons/fa';
import './Codehacks.css';
import { Link } from "react-router-dom";

function Codehacks() {
  return (
    <div>
            <Container className="aboutcontainer">
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Card'>
                            <Card.Img className="timgs" variant="top" src={cLogo} />
                            <Card.Body className="Card-Body">
                                <Card.Title className='Ctitle'>C PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    C is an imperative procedural language supporting structured
                                    programming, lexical variable scope, and recursion, with a
                                    static type system.
                                </Card.Text>
                            </Card.Body>


                            <Image className='Downline' src={downline} />

                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Card'>
                            <Card.Img className="timgs" variant="top" src={cppLogo} />
                            <Card.Body className="Card-Body">
                                <Card.Title className='Ctitle'>C++ PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    C++ is a cross-platform language that can be used to create
                                    high-performance applications.
                            
                                </Card.Text>
                            </Card.Body>
                            <Image className='Downline' src={downline} />

                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Card'>
                            <Card.Img className="timgs" variant="top" src={pythonLogo} />
                            <Card.Body className="Card-Body">
                                <Card.Title className='Ctitle'>PYTHON PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    Python is a computer programming language often used to build
                                    websites and software, automate tasks, and conduct data
                                    analysis.
                                </Card.Text>
                                
                            </Card.Body>
                            <Image className='Downline' src={downline} />

                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card className='Code-Card'>
                            <Card.Img className="timgs" variant="top" src={javaLogo} />
                            <Card.Body className="Card-Body">
                                <Card.Title className='Ctitle'>JAVA PROGRAMS</Card.Title>
                                <Card.Text className='Text-title'>
                                    Java is an object-oriented programming language that produces
                                    software for multiple platforms.
                                    
                                </Card.Text>
                                
                            </Card.Body>
                            <Image className='Downline' src={downline} />

                        </Card>
                    </Col>
                </Row>
                <center>
                <Link to="/codehacks" >
                    <Button className="CButton">
                        EXPLORE
                            <FaArrowRight className='animate__pulse'/>
                    </Button>
                    
                </Link>
                </center>
            </Container>

        </div>
  );
}

export default Codehacks;
