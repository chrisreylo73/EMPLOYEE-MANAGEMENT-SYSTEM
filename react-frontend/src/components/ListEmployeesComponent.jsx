import React, { useState, useEffect } from 'react';
import EmployeeService from 'C:/Users/chris/Desktop/EMPLOYEE MANAGEMENT/react-frontend/src/services/EmplyeeService'; // Import the EmployeeService
const ListEmployeesComponent = ({}) => {
  const [employees, setEmployees] = useState([]); // State to store employee data

  useEffect(() => {
    // Fetch employees data when the component mounts
    EmployeeService.getEmployees()
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
            <p>Name: {employee.firstName}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListEmployeesComponent
