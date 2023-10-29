import React, { useState, useEffect } from 'react';
import axios from "axios";
// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"

function getEmployees() {
  return axios.get("http://localhost:8080/api/v1/employees");
}

const ListEmployeesComponent = ({}) => {
  const [employees, setEmployees] = useState([]); // State to store employee data
  useEffect(() => {
    // Fetch employees data when the component mounts
    getEmployees()
      .then((response) => {
        setEmployees(response.data); // Update the state with the employee data
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
      });
  }, []); // The empty dependency array ensures this effect runs only once

  return (
    <div>
      <h2>EMPLOYEES LIST</h2>
      <div className="row">
        {employees.map((employee) => (
          <div key={employee.id}>
            <p>Name: {employee.firstName} {employee.secondName}</p>
            <p>Email: {employee.emailId}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListEmployeesComponent
