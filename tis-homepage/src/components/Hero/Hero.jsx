import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero-label">
            TULAS INTERNATIONAL SCHOOL
          </p>

          <h1>
            Inspiring Young Minds.
            <span>Building Global Citizens.</span>
          </h1>

          <p className="hero-description">
            A learning environment where curiosity, creativity,
            character, and academic excellence come together.
          </p>

          <div className="hero-buttons">
            <a href="#about" className="hero-primary">
              Explore TIS
              <FiArrowRight />
            </a>

            <a href="#admissions" className="hero-secondary">
              Admissions
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-card">
            <div className="hero-card-content">
              <span>EST. 2003</span>
              <h2>Learn.</h2>
              <h2>Grow.</h2>
              <h2>Lead.</h2>
            </div>
          </div>
        </motion.div>

      </div>

      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;