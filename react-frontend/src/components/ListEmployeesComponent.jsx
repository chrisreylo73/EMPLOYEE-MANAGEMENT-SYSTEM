import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
// const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees"

function getEmployees() {
  return axios.get("http://localhost:8080/api/v1/employees");
}

function deleteEmployee(employeeId) {
  return axios.delete(`http://localhost:8080/api/v1/employees/${employeeId}`);
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

  const handleDelete = (employeeId) => {
    deleteEmployee(employeeId)
      .then(() => {
        // Refresh the employee list after deletion
        getEmployees()
          .then((response) => {
            setEmployees(response.data);
          })
          .catch((error) => {
            console.error('Error fetching employees:', error);
          });
      })
      .catch((error) => {
        console.error('Error deleting employee:', error);
      });
  };

  // const handleUpdate = (employeeId) => {
  //   // Fetch the employee data for the selected employee
  //   axios.get(`http://localhost:8080/api/v1/employees/${employeeId}`)
  //     .then((response) => {
  //       const employeeData = response.data;

  //       // Redirect to the update page with employee data
  //       history.push(`/update_employee/${employeeId}`, { employeeData });
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching employee data:', error);
  //     });
  // };


  return (
    <div className="w-screen max-w-screen-xl mx-auto p-4 mb">
      <div className="flex justify-between">
        <h2 className="text-3xl text-gold mb-10 font-semibold">EMPLOYEES LIST</h2>
        <Link to="/add_employee">
        <button className="w-40 h-10 text-sm font-semibold bg-green-400 text-white rounded-full hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300">
          ADD EMPLOYEE
        </button>
      </Link>
      </div>
      <div className=" overflow-y-auto mb-20"> {/* Add max-height and overflow-y-auto */}
        <table className="w-full table-fixed inset-box-shadow-xl inset-box-shadow-black">
          <thead>
            <tr className="shadow-black shadow-md">
              <th className=" p-3">Name</th>
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
                  {employee.firstName} {employee.lastName}
                </td>
                <td className=" text-gold m-5">{employee.emailId}</td>
                <td className="flex justify-center">
                <Link to={`/update_employee/${employee.id}`}>
                  <button className="w-20 h-8 px-3 mt-3 text-sm font-semibold text-white bg-blue-600 rounded-md hover-bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 m-2 ml-2" >
                    UPDATE
                   </button>
                </Link>
                  <button className="w-20 h-8 px-3 mt-3 text-sm font-semibold text-white bg-red-500 rounded-md hover-bg-red-600 focus:outline-none focus:ring focus:ring-red-300 m-2" onClick={() => handleDelete(employee.id)}>
                    DELETE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default ListEmployeesComponent
