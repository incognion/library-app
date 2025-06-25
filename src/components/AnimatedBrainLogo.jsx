import "./AnimatedBrainLogo.css";

function AnimatedBrainLogo() {
  return (
    <div className="asz-logo-container">
      {/* Open Book Central Element */}
      <div className="book-container">
        <div className="book-page left-page"></div>
        <div className="book-page right-page"></div>
        <div className="book-spine"></div>
      </div>

      {/* Pulsing Knowledge Rings */}
      <div className="knowledge-ring ring-1"></div>
      <div className="knowledge-ring ring-2"></div>
      <div className="knowledge-ring ring-3"></div>

      {/* ASZ Text */}
      <div className="asz-text">ASZ</div>

      {/* Floating Particles */}
      <div className="particle particle-1"></div>
      <div className="particle particle-2"></div>
      <div className="particle particle-3"></div>
      <div className="particle particle-4"></div>
    </div>
  );
}

export default AnimatedBrainLogo;