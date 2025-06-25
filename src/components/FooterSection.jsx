import React from "react";
import "./FooterSection.css";

function FooterSection() {
  return (
    <footer className="footerDiv">
      <div className="footerContent">
        <h2>Aditya Study Zone</h2>
        <p>&copy; 2025 Aditya Study Zone. All rights reserved.</p>
        <p>Follow us on social media:</p>
        <div className="socialMedia">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
