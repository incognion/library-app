import { useState, useEffect } from 'react';
import './TestimonialSection.css';

const testimonials = [
  {
    name: 'Ananya Sharma',
    feedback: 'This library has completely transformed how I study! Quiet, clean, and super productive.',
    designation: 'NEET Aspirant'
  },
  {
    name: 'Rahul Verma',
    feedback: 'The ambiance and facilities are top-notch. I recommend it to all students!',
    designation: 'JEE Student'
  },
  {
    name: 'Priya Kumari',
    feedback: 'Peaceful environment with great WiFi and comfortable desks. Love studying here!',
    designation: 'SSC Candidate'
  }
];

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section" id="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-card">
        <p className="feedback">“{testimonials[current].feedback}”</p>
        <h4 className="name">— {testimonials[current].name}</h4>
        <span className="designation">{testimonials[current].designation}</span>
        <div className="dots">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${current === idx ? 'active' : ''}`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
