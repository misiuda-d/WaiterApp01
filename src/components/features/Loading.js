import { Col, Spinner } from "react-bootstrap";

export const Loading = () => {
  return (
    <>
      <Col className="d-flex justify-content-center align-items-center">
        <Spinner animation="grow" variant="primary" />
      </Col>
    </>
  );
};
