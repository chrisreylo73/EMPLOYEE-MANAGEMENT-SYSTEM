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
    <div className="w-screen max-w-screen-lg mx-auto p-4 ">
      <h2 className="text-3xl text-gold mb-10 font-semibold ">EMPLOYEES LIST</h2>
      <table className="w-full table-fixed inset-box-shadow-xl inset-box-shadow-black ">
        <thead>
          <tr>
            <th className="">Name</th>
            <th className="">Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}  className={`${
              index % 2 === 0 ? 'bg-4' : 'bg-3' // Apply different shades to even and odd rows
            }`}>
              <td className=" shadow-neutral-950 text-gold mr-5 p-2">
                {employee.firstName} {employee.secondName}
              </td>
              <td className=" text-gold m-5">{employee.emailId}</td>
              <td>
                  <button className="w-20 bg-blue-600 text-xs m-2 h-8 mt-3 rounded-xl ml-20">UPDATE</button>
                  <button className="w-20 bg-red-400 text-xs h-8 mt-3 rounded-xl ">DELETE</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  
  
}

export default ListEmployeesComponent
