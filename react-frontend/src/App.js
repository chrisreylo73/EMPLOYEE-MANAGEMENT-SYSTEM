import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployeesComponent from "./components/ListEmployeesComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmployeeForm from "./components/AddEmployeeForm";
import UpdateEmployeeForm from "./components/UpdateEmployeeForm";
function App() {
  return (
    <Router>
      <Header />
      <div className="flex justify-center items-center h-1/2">
        <Routes>
          <Route path="/"  exact element={<ListEmployeesComponent />} />
          <Route path="add_employee" element={<AddEmployeeForm />} />
          <Route path="update_employee/:employeeId" element={<UpdateEmployeeForm />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
