import React from 'react'
import {
  Image,
  Container,
  Row,
  Button,
  Tab,
  Tabs,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import CTab from './CTab';
import CPPTab from "./CPPTab";
import PTab from "./PTab";
import JTab from "./JTab";
import wallpaper from  './img/WallPaper.png'
import profile from './img/PRofile.png'
import './CodehacksLD.css'



function CodehacksList() {
  return (
    <div>
    <Image
        className="Img"
        src={wallpaper}
      />

       <Container fluid className="Con">
        <Image
          className="Profile"
          src={profile}
          roundedCircle
        />
        <div className="Nam">
          {" "}
          <h1>CODEHACKS</h1>
          <h4>(Problem Statement Solutions)</h4>
        </div>
        </Container>
        <Container fluid>
        <Tabs className="MTabs">
          <Tab title="C Programs" eventKey="c programs" >
             <CTab/>
          </Tab>
          <Tab title="C++ Programs" eventKey="cpp programs" >
             <CPPTab/>
          </Tab>
          <Tab title="Python Programs" eventKey="python programs" >
             <PTab/>
          </Tab>
          <Tab title="Java Programs" eventKey="java programs" >
             <JTab/>
          </Tab>
          </Tabs>
          </Container>

    </div>
  )
}

export default CodehacksList