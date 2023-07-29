import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to my Newsletter<br></br> & Never miss any updates about
              my Portfolio
            </h3>
          </Col>
          <Col md={6} xl={7}>
            <form>
              <div className="new-email-bx">
                <input type="email" placeholder="Email Address" />
                <button>Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
