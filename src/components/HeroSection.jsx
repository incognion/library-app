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
    const phrases = ["Pacified", "Productive", "Perfect Study Spot"];
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
    <>
      {/* React 19 Native Metadata - No library needed! */}
      <title>Aditya Study Zone | Peaceful Place to Focus, Learn & Succeed</title>
      <meta name="description" content="Aditya Study Zone: Secure 24×7 library with high-speed WiFi, personal desks, air-conditioned environment. Book your study slot today!" />
      <meta name="keywords" content="study zone, library, WiFi, personal desk, 24x7, air conditioned, Varanasi, BHU, study space, peaceful, productive" />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content="Aditya Study Zone | Peaceful Place to Focus, Learn & Succeed" />
      <meta property="og:description" content="Secure 24×7 library with high-speed WiFi, personal desks, air-conditioned environment. Book your peaceful study slot today!" />
      <meta property="og:image" content="https://adityastudy.in/logo.png" />
      <meta property="og:url" content="https://adityastudy.in/" />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Aditya Study Zone | Peaceful Place to Focus, Learn & Succeed" />
      <meta name="twitter:description" content="Secure 24×7 library with high-speed WiFi, personal desks, air-conditioned environment. Book your peaceful study slot today!" />
      <meta name="twitter:image" content="https://adityastudy.in/logo.png" />
      
      {/* Link Tags */}
      <link rel="canonical" href="https://adityastudy.in/" />

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
    </>
  );
}

export default HeroSection;
