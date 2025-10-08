import React, { useEffect, useState } from "react";
import "./PatientDashboard.css"; // 👈 We'll add this CSS file

function PatientDashboard() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const current = JSON.parse(localStorage.getItem("currentPatient"));
    if (current) {
      setPatient(current);
    }
  }, []);

  const doctor = {
    name: "Dr. Lee Charlie",
    reviews: 14,
    rating: 4,
    mode: "Virtual",
    date: "30 Dec, 2022",
    time: "10:00 AM",
    fee: "$140",
  };

  if (!patient) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        No patient logged in. Please login first.
      </h2>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Left Section */}
      <div className="personal-info">
        <h2>Personal Information</h2>

        <div className="form-row">
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter First Name"
              value={patient.fullName.split(" ")[0]}
              readOnly
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter Last Name"
              value={patient.fullName.split(" ")[1] || ""}
              readOnly
            />
          </div>
        </div>

        <label>Email</label>
        <input
          type="text"
          placeholder="Enter Email"
          value={patient.email || ""}
          readOnly
        />

        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          value={patient.phone}
          readOnly
        />
      </div>

      {/* Right Section */}
      <div className="booking-summary">
        <h2>Booking Summary</h2>

        <div className="doctor-info">
          <img
            src="https://img.freepik.com/free-photo/friendly-young-female-doctor-wearing-white-coat_23-2148827768.jpg"
            alt="Doctor"
          />
          <div>
            <h4>{doctor.name}</h4>
            <p>⭐ {doctor.rating} ({doctor.reviews} Reviews)</p>
          </div>
        </div>

        <div className="summary-row">
          <span>Mode Of Appointment</span>
          <span>{doctor.mode}</span>
        </div>

        <div className="summary-row">
          <span>Date</span>
          <span>{doctor.date}</span>
        </div>

        <div className="summary-row">
          <span>Time</span>
          <span>{doctor.time}</span>
        </div>

        <div className="summary-row">
          <span>Consulting Fee</span>
          <span>{doctor.fee}</span>
        </div>

        <hr />

        <div className="summary-row total">
          <span>Total</span>
          <span>{doctor.fee}</span>
        </div>

        <button className="confirm-btn">Confirm & Pay</button>
      </div>
    </div>
  );
}

export default PatientDashboard;
