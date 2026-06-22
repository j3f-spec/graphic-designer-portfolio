import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import '../styles/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      description: 'Complete brand identity system including logo, color palette, and typography guidelines.',
      image: 'https://via.placeholder.com/400x300?text=Brand+Identity',
      tags: ['Branding', 'Logo Design', 'Guidelines'],
    },
    {
      id: 2,
      title: 'Web Design Project',
      description: 'Modern website design for a tech startup with responsive layout and interactive elements.',
      image: 'https://via.placeholder.com/400x300?text=Web+Design',
      tags: ['Web Design', 'UI/UX', 'Responsive'],
    },
    {
      id: 3,
      title: 'Marketing Campaign',
      description: 'Comprehensive visual marketing campaign with multiple assets and social media graphics.',
      image: 'https://via.placeholder.com/400x300?text=Marketing',
      tags: ['Marketing', 'Social Media', 'Graphics'],
    },
    {
      id: 4,
      title: 'Packaging Design',
      description: 'Creative packaging design for consumer products with 3D visualization.',
      image: 'https://via.placeholder.com/400x300?text=Packaging',
      tags: ['Packaging', '3D Design', 'Product'],
    },
    {
      id: 5,
      title: 'Print Design',
      description: 'Professional print materials including brochures, flyers, and business cards.',
      image: 'https://via.placeholder.com/400x300?text=Print+Design',
      tags: ['Print', 'Collateral', 'Branding'],
    },
    {
      id: 6,
      title: 'Illustration Work',
      description: 'Custom illustrations and artwork for various editorial and commercial projects.',
      image: 'https://via.placeholder.com/400x300?text=Illustration',
      tags: ['Illustration', 'Art', 'Editorial'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="portfolio">
      <div className="portfolio-container">
        <motion.div
          className="portfolio-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemVariants}
        >
          <h1>My Portfolio</h1>
          <p>A selection of my recent design work</p>
        </motion.div>
        <motion.div
          className="portfolio-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;