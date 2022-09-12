import React, { useEffect, useState } from "react";
import "./PseudoCodeD.css";
import {
  Card,
  Button,
  Row,
  Col,
  Container,
  ModalTitle,
  ListGroup,
  ListGroupItem,
  Modal,
} from "react-bootstrap";
import axios from "axios";

function PseudoCodeD() {
  const [codes, setCodes] = useState([]);
  const [isShow, setisShow] = useState(false);
  const [currAnswer, setcurrAnswer] = useState("");

  function onHideModal() {
    setisShow(false);
  }

  function onShowModal(currIndex) {
    setisShow(true);
    setcurrAnswer(codes[currIndex].snippetAns);
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/allexercise")
      .then((res) => {
        setCodes(res.data);
        console.log(codes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container className="p-4">
        <ModalTitle className="ptitle">PSEUDO CODES</ModalTitle>

        {codes.map((code, indx) => {
          return (
            <Row className="pborder m-3 p-2">
              <h4
                dangerouslySetInnerHTML={{ __html: code.exerciseSnippet }}
              ></h4>

              <ListGroup variant="flush">
                <ListGroup.Item>a) {code.optionA}</ListGroup.Item>
                <ListGroup.Item>b) {code.optionB}</ListGroup.Item>
                <ListGroup.Item>c) {code.optionC}</ListGroup.Item>
                <ListGroup.Item>d) {code.optionD}</ListGroup.Item>
              </ListGroup>
              <center>
                <Button
                  className="cBtn"
                  onClick={() => {
                    onShowModal(indx);
                  }}
                  variant="primary"
                >
                  Show Answer
                </Button>
              </center>
            </Row>
          );
        })}
      </Container>

      <Modal show={isShow} onHide={onHideModal}>
        <Modal.Header closeButton>Answer</Modal.Header>
        <Modal.Body>
          <h3>Answer Is {currAnswer}</h3>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PseudoCodeD;
