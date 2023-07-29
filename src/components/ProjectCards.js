import { Col } from "react-bootstrap";
import Project1 from "./Project1";

export const ProjectCard = ({ title, description, imgUrl, tech }) => {
  return (
    <>
      <Col sm={8} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="pics" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{tech}</span>
          </div>
        </div>
      </Col>
    </>
  );
};
