import { useEffect, useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

import useScrollProgress from "./hooks/useScrollProgress";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const progress = useScrollProgress();

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>

      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      ></div>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main>
        <Hero />
        <About />
        <Programs />
        <Testimonials />
        <CTA />
        <Footer />
      </main>

    </div>
  );
}

export default App;