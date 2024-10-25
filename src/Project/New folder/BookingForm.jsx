// src/BookingForm.js
import React, { useState } from 'react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkInDate: '',
    checkOutDate: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(`Booking successful! Confirmation ID: ${data.confirmationId}`);
      } else {
        const errorData = await response.json();
        setResponseMessage(`Booking failed: ${errorData.message}`);
      }
    } catch (error) {
      setResponseMessage(`Booking failed: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Book a Room</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Check-In Date:
            <input type="date" name="checkInDate" value={formData.checkInDate} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Check-Out Date:
            <input type="date" name="checkOutDate" value={formData.checkOutDate} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">Book</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default BookingForm;
