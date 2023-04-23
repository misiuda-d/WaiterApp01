import { Button, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <Row className="d-flex justify-content-center">
        <h1 className="text-center mt-4 mb-4">
          This is not a place you are looking for.
        </h1>
        <Col className="d-flex justify-content-center">
          <img width="800" src={"waiters.jpg"} alt="waiters" />
        </Col>
        <p className="text-center mt-4 mb-4">
          There's still many customers in a restaurant.
        </p>
        <Col className="d-flex justify-content-center">
          <Button as={NavLink} to="/">
            Let's go back to work
          </Button>
        </Col>
      </Row>
    </div>
  );
};
