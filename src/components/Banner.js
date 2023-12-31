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
              "I thrive on crafting elegant and efficient web solutions through
              the art of code. With a keen eye for detail, I specialize in
              creating seamless, user-centric experiences that bridge form and
              function. My passion for technology is matched by my dedication to
              solving complex problems, and I take pride in turning ideas into
              interactive, user-friendly websites and applications. I'm not just
              a web developer; I'm a digital architect, constantly exploring
              innovative ways to blend creativity and technology to bring
              visions to life."
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
