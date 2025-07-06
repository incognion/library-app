import React from "react";
import { MdFavorite } from "react-icons/md"; 
import "./FooterSection.css";

function FooterSection() {
  return (
    <footer className="footerDiv">
      <div className="footerContent">
        <h2>Aditya Study Zone</h2>
        <p>
          Copyright &copy; 2025 Aditya Study Zone
        </p>
        <p>
          Made with{" "}
          <a
            href="https://linkedin.com/in/incognion"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View my LinkedIn profile"
            className="love-link"
          >
            <MdFavorite className="heart-icon" />
          </a>{" "}
          by Ashutosh
        </p>
      </div>
    </footer>
  );
}

export default FooterSection;
