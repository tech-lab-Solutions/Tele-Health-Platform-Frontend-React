import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth.css";

function LoginPatient() {
  const [showOtp, setShowOtp] = useState(false);
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (!phone.trim()) {
      alert("Please enter a phone number");
      return;
    }

    const users = JSON.parse(localStorage.getItem("patients")) || [];
    const user = users.find((u) => u.phone === phone);

    if (user) {
      setShowOtp(true);
    } else {
      alert("This number doesn’t exist. Please create an account.");
      navigate("/signup-patient");
    }
  };

  const handleFakeSubmit = () => {
    const users = JSON.parse(localStorage.getItem("patients")) || [];
    const user = users.find((u) => u.phone === phone);

    if (user) {
      localStorage.setItem("currentPatient", JSON.stringify(user));
      navigate("/patient-dashboard");
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Patient Login</h2>
      <p>Enter your registered phone number to continue.</p>
      <form onSubmit={handleRequestOtp}>
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Request OTP</button>
      </form>

      {showOtp && (
        <div className="otp-section">
          <h4>Enter OTP</h4>
          <div className="otp-inputs">
            {[1, 2, 3, 4].map((_, index) => (
              <input key={index} type="text" maxLength="1" />
            ))}
          </div>
          <button className="submit-btn" onClick={handleFakeSubmit}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default LoginPatient;
