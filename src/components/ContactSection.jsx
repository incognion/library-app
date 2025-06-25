import './ContactSection.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h2>Get in Touch</h2>
      <p className="sub-text">We’d love to hear from you or help with any inquiries!</p>

      <div className="contact-wrapper">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3540875764897!2d82.97660793713148!3d25.258671480048132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e3385d926487f%3A0x21405e5968b66a1c!2sADITYA%20STUDY%20ZONE%20LIBRARY!5e0!3m2!1sen!2sin!4v1746726176898!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>

        <div className="contact-details">
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <a
              href="https://maps.app.goo.gl/GPL5y7mrJbDQVjDC9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Near Hyderabad Choti Gate BHU, Susuwahi, Varanasi, 221011, 
              Uttar Pradesh, India
            </a>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:study.library@email.com">study.library@gmail.com</a>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <div className="contact-phones">
              <a href="tel:+918299628009">+91 82996 28009</a>
              {/* <a href="tel:+918400445595">+91 84004 45595</a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
