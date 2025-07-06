// src/components/PricingSection.jsx
import {
  FaSun,
  FaCloudSun,
  FaMoon,
  FaClock,
  FaInfinity,
  FaGift
} from "react-icons/fa";
import "./PricingSection.css";

export default function PricingSection() {
  /*  ------- 1) Define plans  ------- */
  const paidPlans = [
    {
      icon: <FaSun />,
      title: "Morning Shift",
      tagline: "Rise & Work",
      time: "7 AM – 1 PM",
      features: ["Peaceful atmosphere", "Natural-light desks"],
      price: "₹700 / month"
    },
    {
      icon: <FaCloudSun />,
      title: "Evening Shift",
      tagline: "Golden-Hour Hustle",
      time: "1 PM – 7 PM",
      features: ["Cool ambient light", "Snacks available"],
      price: "₹700 / month"
    },
    {
      icon: <FaMoon />,
      title: "Night Shift",
      tagline: "Code Past Midnight",
      time: "7 PM – 5 AM",
      features: ["Silent hours", "Air-conditioned comfort"],
      price: "₹700 / month"
    },
    {
      icon: <FaClock />,
      title: "12-Hour Pass",
      tagline: "Half-Day Hero",
      time: "Any 12 consecutive hours",
      features: ["Flexible start time", "Desk reservation"],
      price: "₹1,200 / month"
    },
    {
      icon: <FaInfinity />,
      title: "24-Hour Pass",
      tagline: "All-Day, All-In",
      time: "Full-day access",
      features: ["Unlimited coffee", "Locker included"],
      price: "₹1,500 / month"
    }
  ];

  const freeTrialPlan = {
    icon: <FaGift />,
    title: "1-Day Free Trial",
    tagline: "Test-Drive the Hive",
    time: "Try any shift",
    features: ["No commitment", "Full amenities"],
    price: "FREE",
    cta: "Get Free Trial",
    special: true
  };

  /* ------- 2) Helper that builds WhatsApp link  ------- */
  const buildWA = (planTitle) => {
    const number = "919026924092";           // e.g., 919876543210
    const message = encodeURIComponent(
      `Hi there! I’d like to book the *${planTitle}* plan.`
    );
    return `https://wa.me/${number}?text=${message}`;
  };

  return (
    <div className="pricing-container">
      <h2 className="pricing-heading">Choose Your Plan</h2>

      {/* Paid plans */}
      <div className="pricing-grid">
        {paidPlans.map((plan, idx) => (
          <PricingCard key={idx} plan={plan} buildWA={buildWA} />
        ))}
      </div>

      {/* Free trial below */}
      <div className="pricing-grid" style={{ marginTop: "32px" }}>
        <PricingCard plan={freeTrialPlan} buildWA={buildWA} />
      </div>
    </div>
  );
}

/* ------- 3) Card component  ------- */
function PricingCard({ plan, buildWA }) {
  return (
    <div
      className={plan.special ? "pricing-card special-card" : "pricing-card"}
    >
      <div className="pricing-icon">{plan.icon}</div>
      <h3 className="slot-title">{plan.title}</h3>
      <p className="tagline">{plan.tagline}</p>
      <p className="slot-time">{plan.time}</p>

      <ul>
        {plan.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>

      <p className="price">{plan.price}</p>

      {/* WhatsApp-enabled button */}
      <a
        href={buildWA(plan.title)}
        target="_blank"
        rel="noopener noreferrer"
        className="book-btn"
      >
        {plan.cta ? plan.cta : "Book Now"}
      </a>
    </div>
  );
}
