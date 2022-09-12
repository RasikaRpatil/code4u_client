import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./CodehacksLD.css";
import axios from "axios";
function JTab() {
  const [javaData, setjavaData] = useState([]);

  useEffect(() => {
    const reqData = {
      problemsCategory: "Java Programs",
    };

    axios
      .post("http://localhost:5000/getProgramByCategory", reqData)
      .then((res) => {
        setjavaData(res.data);
        console.log(javaData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container className="cApp">
        <Row>
          {javaData.map((program) => {
            return (
              <Col>
                <Card>
                  <Card.Body>
                    <h3>{program.problemsDescription}</h3>
                  </Card.Body>
                  <Card.Footer>
                    <Button>Details</Button>
                  </Card.Footer>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default JTab;
