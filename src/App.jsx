import { useState, useEffect, useRef } from "react";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import FacilitiesGrid from "./components/FacilitiesGrid";
import ImageSlider from "./components/ImageSlider";
import PricingSection from "./components/PricingSection";
import TestimonialSection from "./components/TestimonialSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import FloatingButtons from "./components/FloatingButtons";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isClickOnMenuIcon = e.target.closest(".menuIcon");
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !isClickOnMenuIcon
      ) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const onScroll = () => {
      let current = "";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 100) {
          current = sec.getAttribute("id");
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <HeaderSection
        menuRef={menuRef}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        closeMenu={closeMenu}
        activeSection={activeSection}
      />

      <section className="mainDiv" id="home">
        <HeroSection />
      </section>
      

      <section className="aboutDiv" id="facilities">
        <FacilitiesGrid />
        <ImageSlider />
      </section>

      <section id="pricing">
        <PricingSection />
      </section>
      
      <section className="testimonialsDiv" id="testimonials">
        <TestimonialSection />
        </section>
        
      <FAQSection />
      <section className="contactDiv" id="contact">
        <ContactSection />
      </section>

      <FooterSection />
      <FloatingButtons />
    </>
  );
}

export default App;
