import { FaSun, FaCloudSun, FaMoon } from "react-icons/fa";
import "./PricingSection.css";

function PricingSection() {
  const slots = [
    {
      icon: <FaSun className="pricing-icon" />,
      title: "Morning Slot",
      time: "6 AM – 12 PM",
      features: ["Peaceful Atmosphere", "Sunlight Desk Area"],
      price: "₹999/month",
    },
    {
      icon: <FaCloudSun className="pricing-icon" />,
      title: "Evening Slot",
      time: "1 PM – 7 PM",
      features: ["Cool Ambient Light", "Snacks Available"],
      price: "₹1099/month",
    },
    {
      icon: <FaMoon className="pricing-icon" />,
      title: "Night Slot",
      time: "8 PM – 2 AM",
      features: ["Silent Hours", "Air Conditioned Comfort"],
      price: "₹1199/month",
    },
  ];

  return (
    <div className="pricing-container" id="pricing">
      <h2 className="pricing-heading">Enrollment & Pricing</h2>
      <div className="pricing-grid">
        {slots.map((slot, index) => (
          <div className="pricing-card" key={index}>
            {slot.icon}
            <h3>{slot.title}</h3>
            <p className="slot-time">{slot.time}</p>
            <ul>
              {slot.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
            <p className="price">{slot.price}</p>
            <button className="book-btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PricingSection;
