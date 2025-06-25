import React, { useState } from 'react';
import './FAQSection.css';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    { question: "What facilities does the library offer?", answer: "Our library provides desks, lighting, Wi-Fi, air conditioning, water, and power." },
    { question: "How can I book a study slot?", answer: "You can book a study slot by selecting your preferred time (morning, evening, or night) from the available options." },
    { question: "Is there any fee for using the study space?", answer: "Yes, there is a nominal fee based on the time slot you choose. Please check our pricing section." },
    { question: "Can I cancel or modify my booking?", answer: "Yes, you can cancel or modify your booking within 24 hours of the scheduled time." },
    { question: "Is there a maximum booking duration?", answer: "Currently, you can book a study space for up to 4 hours per session." }
  ];

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleAccordion(index)}>
              <h3>{faq.question}</h3>
              <span className={`faq-icon ${activeIndex === index ? 'active' : ''}`}>+</span>
            </div>
            {activeIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
