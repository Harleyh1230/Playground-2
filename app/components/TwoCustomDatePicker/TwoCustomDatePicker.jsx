"use client"
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './TwoCustomDatePicker.css'; 

export default function AICustomDatePicker() {
  const today = new Date(); // Get today's date
  const [formData, setFormData] = useState({
    date: today,
    hoursWorked: '',
    hourlyRate: '',
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, hoursWorked, hourlyRate } = formData;
    const formattedDate = date ? date.toISOString().split('T')[0] : null;
    const submittedData = {
      date: formattedDate,
      hoursWorked,
      hourlyRate,
    };
    console.log(submittedData);
    // Send to db or something
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Date</span>
        </label>
        <DatePicker
          selected={formData.date}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
          className="input input-bordered"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Hours Worked</span>
        </label>
        <input
          type="number"
          name="hoursWorked"
          value={formData.hoursWorked}
          onChange={handleInputChange}
          placeholder="Enter hours worked"
          className="input input-bordered"
        />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Hourly Rate</span>
        </label>
        <input
          type="number"
          name="hourlyRate"
          value={formData.hourlyRate}
          onChange={handleInputChange}
          placeholder="Enter hourly rate"
          className="input input-bordered"
        />
      </div>

      <button type="submit" className="btn btn-primary mt-4">
        Submit
      </button>
    </form>
  );
};
