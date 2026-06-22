import React from 'react';
import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1>About Me</h1>
          <p>
            I'm a passionate graphic designer with over 10 years of experience creating
            compelling visual designs that communicate brand stories effectively.
          </p>
          <p>
            My expertise spans across branding, web design, print design, and digital
            illustration. I believe in the power of thoughtful design to transform
            ideas into beautiful, functional realities.
          </p>
          <h2>Skills & Expertise</h2>
          <div className="skills">
            <div className="skill-category">
              <h3>Design Tools</h3>
              <ul>
                <li>Adobe Creative Suite</li>
                <li>Figma</li>
                <li>Sketch</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Design Areas</h3>
              <ul>
                <li>Brand Identity</li>
                <li>UI/UX Design</li>
                <li>Print Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Other Skills</h3>
              <ul>
                <li>Illustration</li>
                <li>Art Direction</li>
                <li>Web Design</li>
              </ul>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="https://via.placeholder.com/400x500?text=Designer" alt="Designer" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;