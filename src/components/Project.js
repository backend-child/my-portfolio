import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import colorSharp2 from "../assets/img/color-sharp2.png";
import imageOne from "../assets/img/gmail1.jpg";
import imageTwo from "../assets/img/casabella2.jpg";
import imageThree from "../assets/img/pandanifty.jpg";
import imageFour from "../assets/img/native1.jpg";
import imageFive from "../assets/img/template.jpg";
import imageSix from "../assets/img/marybella.jpg";
import imageSeven from "../assets/img/acme.jpg";
import imageEight from "../assets/img/phppics.jpg";
import imageNine from "../assets/img/wordpress.jpg";
import Project1 from "./Project1";

const Project = () => {
  const projects = [
    {
      title: "Easy_School 'Backend Api' ",
      description: "The Backend Api Routes and Resources ",
      imgUrl: imageOne,
      tech: "express.js, mongo db, post-man, cors, jwt_Auth Tokens, cookie-Parser, mongo-sanitize, hpp, helmet, rate-limit, file-upload, Morgan",
    },

    {
      title: "Panda Pizza 'PHP' BLOG Project",
      description: "A simple Blog PHP Project Using",
      imgUrl: imageEight,
      tech: "PHP, MYSQL, APACHE, MARIA-DB",
    },

    {
      title: "Panda Pizza and Burgers WORDPRESS project",
      description: "A simple Blog PHP Project Using",
      imgUrl: imageNine,
      tech: "Wordpress, Elementor-pageBuilder, kandence-theme-plugin",
    },

    {
      title: "Sell Your Home 'React Js/MERN E-commerce Website' ",
      description: "De",
      imgUrl: imageTwo,
      tech: "Google map Api, React js, React-Redux, use-Reducers, use-Context, FireBase, tailwind_cli, React-Bootstarp, Google_Auth ",
    },
    {
      title: "Panda_nifty 'NFT website' ",
      description: "Design & Development",
      imgUrl: imageThree,
      tech: "Html, css, animate_css, animate_ui",
    },
    {
      title: "Start_your Day 'React/Native' Mobile App",
      description: "Design & Development",
      imgUrl: imageFour,
      tech: "React-stack/navigation, React-native/Element, Native/Base",
    },
    {
      title: "Panda_market E-commerce Website",
      description: "Design & Development",
      imgUrl: imageFive,
      tech: "express js, Ejs Views , Template Rendering, Pass-port js, cookies, Mongo db, ",
    },
    {
      title: "Marybella_Shopping Bootstrap Store",
      description: "Design & Development",
      imgUrl: imageSix,
      tech: "Html,Css,Bootstrap",
    },

    {
      title: "Acme Rocket Tailwind Project",
      description: "Design & Development",
      imgUrl: imageSeven,
      tech: "Tailwind ",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Here are some of my project which i built , i outlined them into
              three sections labelled as a Tab, First tab showing the project
              images when hovered upon it shows the Description/technologies i
              used in creating them,..The second Tab shows the live Links in
              which one can use to visit the project live.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first"> Projects Description</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Click Here To Go Live!</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Technologies </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <a href=" https://bootcamp-wg0r.onrender.com" target="_blank">
                    Easy_School Backend Api Route & Resources Express_js
                    Mongo_db
                  </a>
                  <br />
                  <a
                    href="https://inheriting-clerk.000webhostapp.com/"
                    target="_blank"
                  >
                    Panda Pizza simple PHP blog project
                  </a>
                  <br />
                  <a href="http://panda-style.unaux.com/" target="_blank">
                    Panda Pizzas and Burgers WORDPRESS Website
                  </a>
                  <br />
                  <a href="https://panda-luxuryhouse.surge.sh" target="_blank">
                    Sell Your Homes React js/MERN Website
                  </a>
                  <br />
                  <a href="https://panda-nft-buy.surge.sh" target="_blank">
                    Panda Nft Website ,Html / css
                  </a>
                  <br />
                  <a
                    href="https://expo.dev/artifacts/eas/4xf7JFTj3MH38AV9xJ3LCB.aab"
                    target="_blank"
                  >
                    Download Start_Your Day App React/Native
                  </a>
                  <br />
                  <a href="https://pandamarket.onrender.com" target="_blank">
                    Panda-Market E-commerce Website
                  </a>
                  <br />
                  <a href="https://marybellastore.surge.sh" target="_blank">
                    Mary Bella Store Website / Bootstrap
                  </a>
                  <br />
                  <a href="https://acme-rocket.netlify.app" target="_blank">
                    Acme Tailwind Website
                  </a>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  Html/C.s.s
                  <br />
                  S.a.s.s
                  <br />
                  Bootstarp/j-query
                  <br />
                  Tailwind
                  <br />
                  Materiarialized css
                  <br />
                  java-script
                  <br />
                  express js / node Js
                  <br />
                  Mongo DB
                  <br />
                  React / React-redux / context api / Reducers
                  <br />
                  React native
                  <br />
                  P.H.P / Oop / Mvc / Laravel
                  <br />
                  WordPress
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="image" />
    </section>
  );
};

export default Project;
