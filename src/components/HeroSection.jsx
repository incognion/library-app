import './HeroSection.css';
import { Link } from 'react-scroll';
import { useEffect, useRef, useState } from 'react';

function HeroSection() {
  const [typingText, setTypingText] = useState('');
  const [isBgLoaded, setIsBgLoaded] = useState(false);
  const indexRef = useRef(0);
  const charRef = useRef(0);
  const directionRef = useRef(1);

  useEffect(() => {
    const phrases = ["Peaceful", "Productive", "Perfect Study Spot"];
    const interval = setInterval(() => {
      const currentPhrase = phrases[indexRef.current];
      if (directionRef.current === 1) {
        if (charRef.current < currentPhrase.length) {
          charRef.current++;
        } else {
          directionRef.current = -1;
          return;
        }
      } else {
        if (charRef.current > 0) {
          charRef.current--;
        } else {
          directionRef.current = 1;
          indexRef.current = (indexRef.current + 1) % phrases.length;
          return;
        }
      }

      setTypingText(currentPhrase.slice(0, charRef.current));
    }, 160);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`hero-section ${isBgLoaded ? 'bg-loaded' : ''}`} id="home">
      {/* Hidden img to preload */}
      <img
        src="/images/lib.webp"
        alt="background"
        onLoad={() => setIsBgLoaded(true)}
        style={{ display: 'none' }}
      />

      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Aditya Study Zone</h1>
          <p className="hero-tagline">A Peaceful Place to Focus, Learn & Succeed</p>
          <div className="typing-wrapper">
            <span className="typing-effect">{typingText}</span>
            <span className="typing-cursor">|</span>
          </div>
          <Link to="facilities" smooth={true} duration={600} className="btn-explore">
            Explore Facilities
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
