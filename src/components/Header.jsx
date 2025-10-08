import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // 👈 We'll create this new file

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span role="img" aria-label="hospital" className="logo-icon">🏥</span> DOCTAP
      </div>

      <nav className="nav">
        <a href="#">Home</a>
        <a href="#">Solutions</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>

        {/* Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Login ⮟</button>
          <div className="dropdown-content">
            <a href="#">As a Doctor</a>
            <Link to="/login-patient">As a Patient</Link>
          </div>
        </div>

        <Link to="/signup-patient" className="create-account-btn">
          Create An Account
        </Link>
      </nav>
    </header>
  );
}

export default Header;
