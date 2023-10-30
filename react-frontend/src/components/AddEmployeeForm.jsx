
import React, { useState } from 'react';

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="email"
          name="emailId"
          placeholder="Email"
          value={formData.emailId}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEmployeeForm;
