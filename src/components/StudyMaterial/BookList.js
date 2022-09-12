import React, { useEffect, useState } from "react";
import { Card, Button, Row, Col, Container, ModalTitle } from "react-bootstrap";
import "./btn.css";
import { Link } from "react-router-dom";
import axios from "axios";

function BookList() {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    const reqData = {
      smCategory: "Book",
    };

    axios
      .post("http://localhost:5000/getsmbycategory", reqData)
      .then((res) => {
        setBooksData(res.data);
        console.log(booksData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container className="sApp">
        <Row>
          <ModalTitle className="sTitle"> BOOKS</ModalTitle>

          {booksData.map((book) => {
            return (
              <Col sm={12} md={4} lg={3}>
                <Card>
                  <Card.Img
                    className="simg"
                    src={"http://localhost:5000".concat(
                      book.StudyMaterialCoverImage
                    )}
                    variant="top"
                  />
                  <Card.Body className="s-box">
                    <Card.Title>
                      <a
                        href={"http://localhost:5000".concat(
                          book.StudyMaterialFilePath
                        )}
                      >
                        {book.StudyMaterialTitle}
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
  );
}

export default BookList;
