import { Col, Row } from "react-bootstrap";
import { TableForm } from "../features/TableForm";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTableRequest, selectTables } from "../../redux/tablesRedux";

export const AddTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allTables = useSelector(selectTables);
  const allTableId = allTables.map((table) => Number(table.id));
  const newTableId = Math.max(...allTableId) + 1;

  const handleAddTable = (tableDetails) => {
    dispatch(addTableRequest({ ...tableDetails, id: `${newTableId}` }));
    navigate("/");
  };

  return (
    <>
      <h1>Add Table</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Row style={{ transform: "translateY(200px)" }}>
          <Col
            style={{
              border: "1px solid #d1cdcd",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0px 0px 30px 0px rgba(209, 209, 209, 1)",
            }}
          >
            <TableForm action={handleAddTable} />
          </Col>
        </Row>
      </div>
    </>
  );
};
