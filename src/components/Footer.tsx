import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.footer 
      className="footer"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <motion.div className="footer-content" variants={containerVariants}>
        <motion.div className="footer-section" variants={sectionVariants}>
          <h3>Cashaz</h3>
          <p>Revolutionary continental credit passport system for African SMEs. We're building the future of financial inclusion through innovative technology and cross-border collaboration.</p>
          <p><strong>G20 TechSprint 2025 Submission</strong><br />Financial Inclusion & Cross-Border Payments Track</p>
        </motion.div>
        
        <motion.div className="footer-section" variants={sectionVariants}>
          <h3>Our Mission</h3>
          <p>To unlock $330 billion in SME financing across Africa by making credit histories portable and verifiable across borders.</p>
          <p>We believe African entrepreneurship deserves access to capital that matches its potential.</p>
        </motion.div>
        
        <motion.div className="footer-section" variants={sectionVariants}>
          <h3>Contact</h3>
          <p><strong>Founders:</strong><br />Thabhelo Duve & Andile Mbele</p>
          <p>Ready to discuss partnerships, investment opportunities, or collaboration on this transformative vision for African finance.</p>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p>&copy; 2025 Cashaz. Building the future of African SME finance. 🚀</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer; 