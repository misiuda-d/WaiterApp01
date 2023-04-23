import { Stack, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { RemoveTableModal } from "./RemoveTableModal";
import PropTypes from "prop-types";
import { removeTableRequest } from "../../redux/tablesRedux";

export const RenderTable = ({ id, status }) => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();

  const handleRemoveTable = (id) => {
    setModalShow(false);
    dispatch(removeTableRequest(id));
  };

  return (
    <>
      <div key={id}>
        <Stack
          style={{ marginTop: "20px", marginBottom: "20px" }}
          direction="horizontal"
          gap={3}
        >
          <h1>Table {id}</h1>
          <p className="me-auto" style={{ margin: "0" }}>
            <b>Status:</b> {status}
          </p>
          <Button variant="outline-primary" as={NavLink} to={`table/${id}`}>
            Show More...
          </Button>
          <div className="vr" />
          <Button variant="outline-danger" onClick={() => setModalShow(true)}>
            Delete
          </Button>
        </Stack>
        <hr style={{ margin: "0" }} />
      </div>
      <RemoveTableModal
        show={modalShow}
        onCancel={() => setModalShow(false)}
        onRemove={() => handleRemoveTable(id)}
      />
    </>
  );
};

RenderTable.propTypes = {
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
