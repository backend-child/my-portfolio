import { Col } from "react-bootstrap";

import React from "react";

const Project1 = () => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-txtx">
        <p>Project 1: Learntech.com Backend Api Route and Resouces</p>
        <a
          href="https://bootcamp-wg0r.onrender.com"
          className="btn btn-primary"
        >
          Go Live
        </a>
      </div>
    </Col>
  );
};

export default Project1;
