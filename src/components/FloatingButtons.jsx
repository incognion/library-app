import { FaWhatsapp, FaPhoneAlt, FaUserEdit } from "react-icons/fa";
import "./FloatingButtons.css";

function FloatingButtons() {
  const scrollToPricing = () => {
    const section = document.getElementById("pricing");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fab-container">
      <button className="fab enroll-fab" onClick={scrollToPricing} title="Enroll Now">
        <FaUserEdit />
      </button>
      <a
        className="fab call-fab"
        href="tel:+918299628009"
        title="Call Now"
      >
        <FaPhoneAlt />
      </a>
      <a
        className="fab whatsapp-fab"
        href="https://wa.me/918299628009?text=I'm%20interested%20in%20joining%20your%20library"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default FloatingButtons;
