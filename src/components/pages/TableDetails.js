import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import {
  editTableRequest,
  selectTableById,
  selectTables,
} from "../../redux/tablesRedux";
import { TableForm } from "../features/TableForm";
import { Loading } from "../features/Loading";

export const TableDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const allTables = useSelector(selectTables);
  const tableData = useSelector((state) => selectTableById(state, id));

  const handleEditTable = (tableDetails) => {
    dispatch(editTableRequest({ ...tableDetails }, id));
    navigate("/");
  };

  if (allTables.length !== 0 && !tableData) return <Navigate to="/" />;
  return (
    <>
      <h1>Table Details</h1>

      {tableData === undefined ? (
        <Loading />
      ) : (
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
              <h1 className="mb-4">Table {id}</h1>

              <TableForm action={handleEditTable} {...tableData} />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};
