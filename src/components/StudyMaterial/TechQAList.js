import React  , { useEffect, useState }from 'react'
import './btn.css'
import { Card, Button, Row, Col, Container, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function TechQAList() {
  const [techqaData, settechqaData] = useState([]);

  useEffect(() => {
    const reqData = {
      smCategory: "Technical Q&A",
    };

    axios
    .post("http://localhost:5000/getsmbycategory", reqData)
    .then((res) => {
      settechqaData(res.data);
      console.log(techqaData);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  return (
    <div>
      <Container  className="sApp">
      <Row>
      <ModalTitle>TECHNICAL Q&A</ModalTitle>
      {techqaData.map((techqa) => {
            return (
      <Col sm={12} md={4} lg={3}>
          <Card>
            <Card.Img className="simg" 
            src={"http://localhost:5000".concat(
              techqa.StudyMaterialCoverImage
                    )}
            variant="top" 
             />
            <Card.Body className="s-box">
              <Card.Title>
              <a
                        href={"http://localhost:5000".concat(
                          techqa.StudyMaterialFilePath
                        )}
                      >
                        {techqa.StudyMaterialTitle}
                      </a>
              </Card.Title>
               </Card.Body>
              </Card>
              </Col>
              );
          })}
      </Row>
      </Container>
    </div>
  )
}

export default TechQAList