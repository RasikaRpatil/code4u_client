import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./CodehacksLD.css";
import axios from "axios";
function CPPTab() {
  const [cppData, setcppData] = useState([]);

  useEffect(() => {
    const reqData = {
      problemsCategory: "C++ Programs",
    };

    axios
      .post("http://localhost:5000/getProgramByCategory", reqData)
      .then((res) => {
        setcppData(res.data);
        console.log(cppData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container className="cApp">
        <Row>
          {cppData.map((program) => {
            return (
              <Col>
                <Card>
                  <Card.Body>
                  <h4
                dangerouslySetInnerHTML={{ __html: program.problemsDescription }}
              ></h4>
             <h4
                dangerouslySetInnerHTML={{ __html: program.problemsSampleInput}}
              ></h4>
              <h4
                dangerouslySetInnerHTML={{ __html: program.problemsSampleOutput}}
              ></h4>
              <h4
                dangerouslySetInnerHTML={{ __html: program.problemsExplanation}}
              ></h4>
              <h4
                dangerouslySetInnerHTML={{ __html: program.problemsCode}}
              ></h4>
                 
                 
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

export default CPPTab;
