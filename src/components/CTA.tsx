import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.5, 
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <motion.section 
      className="cta" 
      id="contact"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="cta-container">
        <motion.h2 variants={itemVariants}>
          Ready to Transform African SME Finance?
        </motion.h2>
        <motion.p variants={itemVariants}>
          We're seeking visionary partners, investors, and stakeholders to help build the future of African entrepreneurship. Join us in unlocking the continent's economic potential.
        </motion.p>
        <motion.div 
          className="cta-buttons"
          variants={containerVariants}
        >
                    <Link to="/contact">
            <motion.div
              className="btn btn-white"
              variants={buttonVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.div>
          </Link>
          <motion.a 
                          href="/assets/whitepaper.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            variants={buttonVariants}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "white",
              color: "#8b5cf6"
            }}
            whileTap={{ scale: 0.98 }}
          >
                          View Whitepaper
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA; 