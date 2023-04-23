import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { NotFound } from "./components/pages/NotFound";
import { TableDetails } from "./components/pages/TableDetails";
import { Footer } from "./components/views/Footer";
import { Header } from "./components/views/Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchTables } from "./redux/tablesRedux";
import { AddTable } from "./components/pages/AddTable";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <Container
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/add" element={<AddTable />} />
          <Route path="/table/:id" element={<TableDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
};
