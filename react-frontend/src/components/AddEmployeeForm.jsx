import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddEmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/v1/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('POST request successful');
        window.location.href = '/';
        // Handle success, e.g., display a success message or redirect
      } else {
        console.error('POST request failed');
        // Handle errors, e.g., display an error message
      }
    } catch (error) {
      console.error('POST request error:', error);
      // Handle network errors
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-96 mx-auto p-4 bg-2 rounded shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 shadow-sm shadow-black bg-4 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 shadow-sm shadow-black bg-4 rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="emailId"
            placeholder="Email"
            value={formData.emailId}
            onChange={handleChange}
            className="w-full p-2 shadow-sm shadow-black bg-4  rounded"
          />
        </div>
        <div className="text-center">
            
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Submit
            </button>

  
        </div>
      </form>
    </div>
  );
}

export default AddEmployeeForm;
