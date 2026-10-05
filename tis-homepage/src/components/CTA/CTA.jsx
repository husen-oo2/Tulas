import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import "./CTA.css";

function CTA() {
  return (
    <section className="cta" id="admissions">
      <div className="cta-container">

        <motion.div
          className="cta-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ADMISSIONS</p>

          <h2>
            Ready to begin your child's
            <span> journey?</span>
          </h2>

          <p>
            Discover a learning environment designed to help
            every student learn, grow, and lead with confidence.
          </p>

          <a href="#contact" className="cta-button">
            Start Your Application
            <FiArrowRight />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default CTA;