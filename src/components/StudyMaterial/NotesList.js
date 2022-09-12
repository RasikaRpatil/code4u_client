import React , { useEffect, useState } from 'react'
import './btn.css'
import { Card, Button, Row, Col, Container, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
function NotesList() {
  const [notesData, setnotesData] = useState([]);

  useEffect(() => {
    const reqData = {
      smCategory: "Notes",
    };

    axios
      .post("http://localhost:5000/getsmbycategory", reqData)
      .then((res) => {
        setnotesData(res.data);
        console.log(notesData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Container  className="sApp">
      <Row>
      <ModalTitle> NOTES</ModalTitle>
      {notesData.map((notes) => {
            return (
      <Col sm={12} md={4} lg={3}>
          <Card>
            <Card.Img className="simg" 
            src={"http://localhost:5000".concat(
                      notes.StudyMaterialCoverImage
                    )}
            variant="top" />
            <Card.Body className="s-box">
              <Card.Title>
              <a
                        href={"http://localhost:5000".concat(
                          notes.StudyMaterialFilePath
                        )}
                      >
                        {notes.StudyMaterialTitle}
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

export default NotesList