import { motion } from "framer-motion";
import {
  FiBookOpen,
  FiUsers,
  FiAward,
  FiGlobe,
} from "react-icons/fi";
import "./Programs.css";

function Programs() {
  const programs = [
    {
      icon: <FiBookOpen />,
      title: "Early Years",
      description:
        "Building curiosity, confidence, and a strong foundation through joyful learning.",
    },
    {
      icon: <FiUsers />,
      title: "Primary School",
      description:
        "Developing strong academic foundations while encouraging creativity and collaboration.",
    },
    {
      icon: <FiAward />,
      title: "Middle School",
      description:
        "Helping students discover their interests and develop independent thinking.",
    },
    {
      icon: <FiGlobe />,
      title: "Senior School",
      description:
        "Preparing students for higher education and becoming responsible global citizens.",
    },
  ];

  return (
    <section className="programs" id="programs">
      <div className="programs-container">

        <motion.div
          className="programs-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">ACADEMICS</p>

          <h2>
            Learning designed
            <span> for every stage.</span>
          </h2>

          <p className="programs-intro">
            Our academic journey helps students develop the
            knowledge, skills, and confidence they need for
            the future.
          </p>
        </motion.div>

        <div className="programs-grid">
          {programs.map((program, index) => (
            <motion.article
              className="program-card"
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >
              <div className="program-icon">
                {program.icon}
              </div>

              <h3>{program.title}</h3>

              <p>{program.description}</p>

              <a href="#contact">
                Learn more →
              </a>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Programs;