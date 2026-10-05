import { useState } from "react";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
} from "react-icons/fi";

import "./Navbar.css";

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="#home" className="navbar-logo">
          TULAS
        </a>

        <nav className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#academics" onClick={closeMenu}>
            Academics
          </a>

          <a href="#testimonials" onClick={closeMenu}>
            Testimonials
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        <div className="nav-actions">

          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          <a href="#admissions" className="nav-button">
            Apply Now
          </a>

          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;