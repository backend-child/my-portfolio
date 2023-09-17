import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                "I am a versatile developer skilled in the M.E.R.N Stack and
                adept at creating mobile applications using React-Native. My
                proficiency extends to PHP and Laravel, as well as WordPress
                development, where I have a proven track record of delivering
                exceptional websites. I hold a Project Management certification
                that adds a structured approach to my development prowess.
                Currently, I am exploring the fascinating world of Web3
                blockchain development, harnessing cutting-edge technology to
                revolutionize the digital landscape."
                <br></br>
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Web Developement</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="image" />
                  <h5>Project Management</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="image" />
                  <h5>Web3 Block-chain Development</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="image" />
                  <h5>Mobile App Development</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  );
};

export default Skills;
