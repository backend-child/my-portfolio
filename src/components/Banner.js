import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import headerImg1 from "../assets/img/ejikeanaz.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Web Developer",
    "Project-Manager",
    "Web3 Block-Chain Developer",
  ];
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to My Portfolio</span>
            <h1>
              {`Hi I'm Anazor `}
              <br />
              <span className="wrap">{text}</span>
            </h1>
            <p>
              I love to write simple programming codes, when am not writing
              codes ,i enjoy playing basket balls, call-of-duty..
            </p>
            <button onClick={() => console.log}>
              Lets connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <img src={headerImg1} alt="Header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
