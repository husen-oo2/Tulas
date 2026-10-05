import { motion } from "framer-motion";
import "./About.css";

function About() {
  const stats = [
    {
      number: "20+",
      label: "Years of Excellence",
    },
    {
      number: "1000+",
      label: "Students",
    },
    {
      number: "50+",
      label: "Expert Faculty",
    },
    {
      number: "25+",
      label: "Academic Programs",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ABOUT TIS</p>

          <h2>
            Education that goes
            <span> beyond classrooms.</span>
          </h2>
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          <p>
            Tulas International School is committed to creating
            an environment where students are encouraged to
            explore, question, create, and grow.
          </p>

          <p>
            Through a balance of academic excellence, practical
            learning, and strong values, we prepare students
            to become confident and responsible global citizens.
          </p>

          <a href="#programs" className="about-link">
            Discover our approach →
          </a>
        </motion.div>

      </div>

      <div className="stats-container">
        {stats.map((stat, index) => (
          <motion.div
            className="stat-card"
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
          >
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;