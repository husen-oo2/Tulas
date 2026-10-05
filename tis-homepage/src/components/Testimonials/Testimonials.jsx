import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Parent of a TIS Student",
      role: "Parent",
      text: "TIS has created a wonderful learning environment where our child feels confident, supported, and motivated to learn.",
    },
    {
      name: "TIS Student",
      role: "Student",
      text: "The school encourages us to explore our interests and participate in activities beyond academics.",
    },
    {
      name: "TIS Alumni",
      role: "Alumni",
      text: "My experience at TIS helped me become more confident, independent, and prepared for the next stage of my education.",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">

        <motion.div
          className="testimonials-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">TESTIMONIALS</p>

          <h2>
            Voices from our
            <span> TIS community.</span>
          </h2>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="testimonial-stars">
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
                <FiStar />
              </div>

              <p className="testimonial-text">
                "{testimonial.text}"
              </p>

              <div className="testimonial-person">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3>{testimonial.name}</h3>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;