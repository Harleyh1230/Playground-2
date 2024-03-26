"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomFormWithDatePicker.css";

export default function CustomFormWithDatePicker() {
  const today = new Date(); // Get today's date
  const [formData, setFormData] = useState({
    date: today,
    hoursWorked: "",
    hourlyRate: "",
  });
  const [errors, setErrors] = useState({}); // State to hold form validation errors

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Clear validation error when user starts typing
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, hoursWorked, hourlyRate } = formData;
    let errors = {};

    // Validate date
    if (!date) {
      errors.date = "Date is required";
    }

    // Basic validation for hoursWorked and hourlyRate
    if (!hoursWorked) {
      errors.hoursWorked = "Hours Worked is required";
    } else if (isNaN(hoursWorked)) {
      errors.hoursWorked = "Hours Worked must be a number";
    }

    if (!hourlyRate) {
      errors.hourlyRate = "Hourly Rate is required";
    } else if (isNaN(hourlyRate)) {
      errors.hourlyRate = "Hourly Rate must be a number";
    }

    if (Object.keys(errors).length === 0) {
      const formattedDate = date ? date.toISOString().split("T")[0] : null;
      const submittedData = {
        date: formattedDate,
        hoursWorked,
        hourlyRate,
      };
      console.log(submittedData);
      // Send to db or something
    } else {
      setErrors(errors);
    }
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
          className={`input input-bordered ${errors.date ? "input-error" : ""}`}
          wrapperClassName={`react-datepicker-wrapper ${
            errors.date ? "input-error" : ""
          }`}
        />
        {errors.date && (
          <p className="mt-1 text-red-500 text-xs">{errors.date}</p>
        )}
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
          className={`input input-bordered ${
            errors.hoursWorked ? "input-error" : ""
          }`}
        />
        {errors.hoursWorked && (
          <p className="mt-1 text-red-500 text-xs">{errors.hoursWorked}</p>
        )}
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
          className={`input input-bordered ${
            errors.hourlyRate ? "input-error" : ""
          }`}
        />
        {errors.hourlyRate && (
          <p className="mt-1 text-red-500 text-xs">{errors.hourlyRate}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary mt-4">
        Submit
      </button>
    </form>
  );
}
