import React, { useState } from "react";
// import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import "./FAQSection.css";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I book a slot?",
      answer:
        "Click 'Book Now' on any plan to connect via WhatsApp, or call us directly for immediate booking assistance.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! We offer a 1-day free trial where you can experience any shift with full amenities.",
    },
    {
      question: "What facilities do you provide?",
      answer:
        "Dedicated desks, high-speed WiFi, AC, purified water, power backup, 24/7 security, and a peaceful study environment.",
    },
    {
      question: "What are your operating hours?",
      answer:
        "We're open 24/7 with flexible shift timings to suit your schedule.",
    },
    {
      question: "Can I modify my booking?",
      answer:
        "Yes, contact us via WhatsApp or phone at least 24 hours before your scheduled time.",
    },
    {
      question: "Is the space secure?",
      answer:
        "Absolutely! We have 24/7 CCTV surveillance and secure access controls.",
    },
    {
      question: "What should I bring?",
      answer:
        "Just bring your study materials. We provide everything else including desk space, power, and refreshments.",
    },
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{faq.question}</h3>
              <span
                className={`faq-icon ${activeIndex === index ? "active" : ""}`}
              >
                +
              </span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <div className="contact-info">
        <h3>Need Help?</h3>
        <p>Contact us for quick assistance and bookings</p>
        <div className="contact-methods">
          <a 
            href="https://wa.me/<YOUR_PHONE_NUMBER>?text=Hi! I need help with booking." 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-btn"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a 
            href="tel:<YOUR_PHONE_NUMBER>" 
            className="contact-btn"
          >
            <FaPhone /> Call Us
          </a>
          <a 
            href="mailto:your-email@example.com" 
            className="contact-btn"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </div> */}
    </section>
  );
}

export default FAQSection;
