import React, { useEffect, useState } from "react";
import { Container, Row, Card, Col, Button } from "react-bootstrap";
import "./CodehacksLD.css";
import axios from "axios";
function CTab() {
  const [cData, setcData] = useState([]);

  useEffect(() => {
    const reqData = {
      problemsCategory: "C Programs",
    };

    axios
      .post("http://localhost:5000/getProgramByCategory", reqData)
      .then((res) => {
        setcData(res.data);
        console.log(cData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container className="cApp">
        <Row>
          {cData.map((program) => {
            return (
              <Col>
                <Card>
                  <Card.Body>
                  <h4
                dangerouslySetInnerHTML={{ __html: program.problemsDescription }}
              ></h4>
                 <h4> {program.problemsSampleInput}</h4>
                 <h4> {program.problemsSampleOutput}</h4>
                 <h4> {program.problemsExplanation}</h4>
                 <h4> {program.problemsCode}</h4>
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

export default CTab;
