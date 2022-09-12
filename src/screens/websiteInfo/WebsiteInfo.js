import React from 'react'
import { Container, Row,Col } from 'react-bootstrap'
import { ImBlogger2 } from "react-icons/im";
import { BsCodeSlash  } from "react-icons/bs";
import { BiCodeCurly } from "react-icons/bi";
import { SiBookstack } from "react-icons/si";
import { RiArticleLine } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import './WebsiteInfo.css'
import 'animate.css';


function WebsiteInfo() {
  return (
    <Container className="aboutcontainer">
        <Row className='counter'>
        <h2>check some interesting facts about our Website </h2>
            <Col className='animate__bounceInUp'>
            <ImBlogger2 className="nav-icons" />
            <h2>0</h2>
            <span >Blogs</span>
            </Col>
            <Col className='animate__bounceInUp'>
            <BsCodeSlash className="nav-icons" />
            <h2>0</h2>
            <span>problem <br/>Statement</span>
            </Col>
            <Col className='animate__bounceInUp'>
            <BiCodeCurly className="nav-icons" />
            <h2>0</h2>
            <span>Pseudo <br/> Code</span>
            </Col>
            <Col className='animate__bounceInUp'>
            <SiBookstack className="nav-icons" />
            <h2>0</h2>
            <span>Books</span>
            </Col>
            <Col className='animate__bounceInUp'>
            <RiArticleLine className="nav-icons" />
            <h2>0</h2>
            <span>Articles</span>
            </Col>
            <Col className='animate__bounceInUp'>
            <CgNotes className="nav-icons" />
            <h2>0</h2>
            <span>Notes</span>
            </Col>
          
        </Row>
    </Container>
  )
}

export default WebsiteInfo;