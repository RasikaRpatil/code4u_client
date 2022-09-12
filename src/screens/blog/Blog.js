import React from "react";
import { Container, Row, Col ,Button} from "react-bootstrap";
import { BiCodeAlt,BiCodeCurly,BiPlus } from "react-icons/bi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import './Blog.css';
import { Link } from "react-router-dom"
import 'animate.css';
function Blog() {
  return (
    <div>
      <Container className='asdf'>
                <Row>
                    <Col xs={12} sm={6} md={3}>
                        <div className='ACards'>
                            <div className='icon-div'>
                                <BiCodeCurly className="animate__tada" />
                            </div>
                            <div className="clr1">
                                <h2>PROGRAMMING<br />
                                    LANGUAGES
                                </h2>
                            </div>
                            <div className="wbox">
                                <strong>Programming</strong>
                                <p>C Programming<br />
                                    C++ Programming<br />
                                    Python Programming<br />
                                    Java Programming</p>
                            </div>
                            <Link to="/blogs"
                                className="clr1-a"
                            >
                                <BiPlus className='animate__shakeY' />
                            </Link>

                        </div>

                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className='ACards'>
                            <div className='icon-div'>
                                <BiCodeAlt className="animate__tada" />
                            </div>
                            <div className="clr2">
                            <h2>
                               WEB
                                   <br />
                               DEVELOPMENT
                              </h2>
                            </div>
                            <div className="wbox">
                            <strong>Frameworks </strong>
                                 <p>
                                  JavaScript<br/>
                                   React js<br/>
                                     HTML<br/>
                                         CSS
                                      </p>

                            </div>
                            <Link to="/blogs"
                                className="clr2-a"
                            >
                                <BiPlus className='animate__shakeY' />
                            </Link>


                        </div>

                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className='ACards'>
                            <div className='icon-div'>
                                <MdOutlinePhoneAndroid className="animate__tada" />

                            </div>
                            <div className="clr3">
                            <h2>
                              MOBILE APP
                                 <br />
                               DEVELOPMENT
                               </h2>
                            </div>
                            <div className="wbox">
                            <strong>Frameworks </strong>
                                  <p>
                                  Ionic<br/>
                                  Flutter<br/>
                                React Native<br/> 
                               jQuery Mobile<br/>
                                    </p>


                            </div>

                            <Link to="/blogs"
                                className="clr3-a"
                            >
                                <BiPlus className='animate__shakeY' />
                            </Link>

                        </div>

                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className='ACards'>
                            <div className='icon-div'>
                                <FaLaptopCode className="animate__tada" />
                            </div>
                            <div className="clr4">
                            <h2>
                              MACHINE
                                <br />
                               LERANING
                               </h2>

                            </div>



                            <div className="wbox">

                            <strong>Frameworks </strong>
                                   <p>Torch<br/>
                                   Spark ML<br/>
                                    PyTorch<br/>
                                    SciKit-learn
                                     </p>
                            </div>
                            <Link to="/blogs"
                                className="clr4-a"
                            >
                                <BiPlus className='animate__shakeY' />
                            </Link>


                        </div>

                    </Col>
                </Row>
            </Container>
    </div>
  );
}
export default Blog;
