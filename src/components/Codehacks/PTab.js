import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./CodehacksLD.css";
import axios from "axios";
function PTab() {
  const [pythonData, setpythonData] = useState([]);

  useEffect(() => {
    const reqData = {
      problemsCategory: "Python Programs",
    };

    axios
      .post("http://localhost:5000/getProgramByCategory", reqData)
      .then((res) => {
        setpythonData(res.data);
        console.log(pythonData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container className="p-3">
        <Row>
          {pythonData.map((program) => {
            return (
              <Col className="cApp">
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

export default PTab;
