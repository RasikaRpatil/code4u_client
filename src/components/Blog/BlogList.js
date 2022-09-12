import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Container, ModalTitle } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BlogsLD.css";
import axios from "axios";

function BlogList() {
  const [blogData, setblogData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/allposts")
      .then((res) => {
        setblogData(res.data);
        console.log(blogData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Container className="App">
        <ModalTitle> BLOGS</ModalTitle>
        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={12} md={4} lg={3}>
                <Card>
                  <Card.Img
                    className="bimg"
                    src={"http://localhost:5000".concat(blog.postCoverImage)}
                    variant="top"
                  />
                  <Card.Body>
                    <Link to={"/blogs/details/".concat(blog._id)}>
                      <p>{blog.postTitle}</p>
                    </Link>
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

export default BlogList;
