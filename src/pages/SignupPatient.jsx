import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Auth.css";

function SignupPatient() {
  const [showOtp, setShowOtp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRequestOtp = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.phone) {
      setShowOtp(true);
    } else {
      alert("Please fill all fields");
    }
  };

  const handleFakeSubmit = () => {
    let users = JSON.parse(localStorage.getItem("patients")) || [];
    users.push(formData);
    localStorage.setItem("patients", JSON.stringify(users));

    alert("Signup successful! Please login now.");
    navigate("/login-patient");
  };

  return (
    <div className="auth-container">
      <h2>Create Patient Account</h2>
      <form onSubmit={handleRequestOtp}>
        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          value={formData.fullName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          placeholder="Enter Phone Number"
          value={formData.phone}
          onChange={handleChange}
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

export default SignupPatient;
