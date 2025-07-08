import "./HeaderSection.css";

function HeaderSection({
  menuRef,
  menuOpen,
  toggleMenu,
  closeMenu,
  activeSection,
}) {
  return (
    <nav>
      <div className="headDiv">
        <a href="#" className="logo">
          <img
            src="/images/logo.png"
            alt="Aditya Study Zone Logo"
            className="logo-img"
          />
        </a>

        <div className="menuIcon" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            id="menu"
          >
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className={`listDiv ${menuOpen ? "open" : ""}`} ref={menuRef}>
          <a
            href="#home"
            onClick={closeMenu}
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>
          <a
            href="#facilities"
            onClick={closeMenu}
            className={activeSection === "facilities" ? "active" : ""}
          >
            Facilities
          </a>
          <a
            href="#pricing"
            onClick={closeMenu}
            className={activeSection === "pricing" ? "active" : ""}
          >
            Pricing
          </a>
          <a
            href="#testimonials"
            onClick={closeMenu}
            className={activeSection === "testimonials" ? "active" : ""}
          >
            Testimonials
          </a>
          <a
            href="#faq"
            onClick={closeMenu}
            className={activeSection === "faq" ? "active" : ""}
          >
            FAQs
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default HeaderSection;
