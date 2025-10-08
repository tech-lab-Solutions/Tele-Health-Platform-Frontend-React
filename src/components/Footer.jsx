import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div>
        <h3>🏥 DOCTAP</h3>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
        </p>
      </div>

      <div>
        <h4>Quick Links</h4>
        <p>About Us</p>
        <p>Blog</p>
        <p>Testimonials</p>
      </div>

      <div>
        <h4>Patients</h4>
        <p>Sign In</p>
        <p>Sign Up</p>
        <p>FAQ</p>
      </div>

      <div>
        <h4>Contact</h4>
        <p>📞 +91 7548648459</p>
        <p>📧 doctp@gmail.com</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#007bff",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
    padding: "30px 0",
    marginTop: "80px",
  },
};

export default Footer;
