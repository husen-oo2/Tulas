import {
  FiInstagram,
  FiFacebook,
  FiYoutube,
  FiArrowUp,
} from "react-icons/fi";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>TULAS</h2>
          <p>
            Inspiring young minds and building global citizens
            through meaningful education.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>

            <a href="#" aria-label="Facebook">
              <FiFacebook />
            </a>

            <a href="#" aria-label="YouTube">
              <FiYoutube />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#academics">Academics</a>
          <a href="#admissions">Admissions</a>
        </div>

        <div className="footer-admissions">
          <h3>Start Your Journey</h3>

          <p>
            Discover a learning environment designed to
            help students learn, grow, and lead.
          </p>

          <a href="#admissions" className="footer-button">
            Apply Now
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Tulas International School. All rights reserved.
        </p>

        <button onClick={scrollToTop} aria-label="Back to top">
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;