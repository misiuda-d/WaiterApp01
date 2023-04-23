import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

export const TableForm = ({ action, ...params }) => {
  const [status, setStatus] = useState(params.status || "selected");
  const [peopleAmount, setPeopleAmount] = useState(params.peopleAmount || "0");
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(
    params.maxPeopleAmount || "0"
  );
  const [bill, setBill] = useState(params.bill || "0");

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  if (maxPeopleAmount > 10) setMaxPeopleAmount("10");
  if (
    maxPeopleAmount < 0 ||
    maxPeopleAmount === "" ||
    maxPeopleAmount.length > 2
  )
    setMaxPeopleAmount("0");
  if (peopleAmount > 10) setPeopleAmount("10");
  if (peopleAmount < 0 || peopleAmount === "" || peopleAmount.length > 2)
    setPeopleAmount("0");
  if (+maxPeopleAmount < +peopleAmount && maxPeopleAmount)
    setPeopleAmount(maxPeopleAmount);
  if (bill < 0 || bill === "") setBill(0);

  const handlePeopleAmount = (e) =>
    e.target.value === "Free"
      ? setPeopleAmount("0")
      : e.target.value === "Cleaning"
      ? setPeopleAmount("0")
      : e.target.value === "Busy"
      ? setBill("0")
      : null;

  const handleSubmit = () => {
    action({
      status,
      peopleAmount,
      maxPeopleAmount,
      bill,
    });
  };

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group as={Row} className="mb-3" controlId="tableStatus">
        <Form.Label column xs={4}>
          Status:
        </Form.Label>
        <Col xs={8}>
          <Form.Select
            {...register("category", {
              validate: (value) => value !== "selected",
            })}
            aria-label="Select status"
            defaultValue={status}
            onChange={(e) => {
              handlePeopleAmount(e);
              setStatus(e.target.value);
            }}
          >
            <option value="selected" disabled>
              Select status
            </option>
            <option value="Free">Free</option>
            <option value="Reserved">Reserved</option>
            <option value="Busy">Busy</option>
            <option value="Cleaning">Cleaning</option>
          </Form.Select>
          {errors.category && (
            <small className="d-block form-text text-danger mt-2">
              Please select a status.
            </small>
          )}
        </Col>
      </Form.Group>

      <Form.Group
        className="mb-3"
        style={{ maxWidth: "300px" }}
        controlId="tablePeople"
      >
        <Row className="d-flex align-items-center">
          <Form.Label column xs={4}>
            People:
          </Form.Label>
          <Col xs={3}>
            <Form.Control
              type="number"
              value={peopleAmount}
              onChange={(e) => setPeopleAmount(e.target.value)}
            />
          </Col>
          /
          <Col xs={3}>
            <Form.Control
              type="number"
              value={maxPeopleAmount}
              onChange={(e) => setMaxPeopleAmount(e.target.value)}
            />
          </Col>
        </Row>
      </Form.Group>

      {status === "Busy" && (
        <Form.Group
          as={Row}
          className="mb-3"
          style={{ maxWidth: "325px" }}
          controlId="tableBill"
        >
          <Form.Label column xs={4}>
            Bill:
          </Form.Label>
          <Col xs={5} className="d-flex align-items-center">
            <Form.Control
              type="number"
              className="me-2"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
            />{" "}
            $
          </Col>
        </Form.Group>
      )}
      <Form.Group className="d-flex justify-content-center mt-4">
        <Button type="submit">Update</Button>
      </Form.Group>
    </Form>
  );
};

TableForm.propTypes = {
  action: PropTypes.func,
  bill: PropTypes.string,
  id: PropTypes.string,
  maxPeopleAmount: PropTypes.string,
  peopleAmount: PropTypes.string,
  status: PropTypes.string,
};
