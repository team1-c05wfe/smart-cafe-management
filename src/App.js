import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import ContextDataTable from "./ContextDataTable";
import TableManagement from "./TableManagement";
// import TableManagement from "./TableManagement";
function App() {
  return (
    <>
      <ContextDataTable>
        <Routes>
          <Route path="admin" element={<Admin />}>
            <Route path="sale" element={<TableManagement />} />
          </Route>
        </Routes>
      </ContextDataTable>
    </>
  );
}

export default App;
