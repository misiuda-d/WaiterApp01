import { RenderTable } from "../features/RenderTable";
import { selectTables } from "../../redux/tablesRedux";
import { Loading } from "../features/Loading";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Button, Stack } from "react-bootstrap";

export const Home = () => {
  const tablesData = useSelector(selectTables);

  return (
    <>
      <Stack className="mb-3" direction="horizontal" gap={3}>
        <h1>All tables</h1>
        <Button
          className="ms-auto"
          variant="outline-success"
          as={NavLink}
          to="table/add"
        >
          Add New Table...
        </Button>
      </Stack>

      {tablesData.length === 0 ? (
        <Loading />
      ) : (
        tablesData.map((table) => <RenderTable key={table.id} {...table} />)
      )}
    </>
  );
};
