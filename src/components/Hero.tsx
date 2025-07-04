import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const passportVariants = {
    hover: {
      rotate: 0,
      scale: 1.05,
      transition: { duration: 0.3 }
    },
    initial: {
      rotate: -5,
      scale: 1
    }
  };

  return (
    <motion.section 
      className="hero" 
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="hero-container">
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.h1 variants={itemVariants}>
            Democratizing <span className="highlight">African SME</span> Credit Access
          </motion.h1>
          <motion.p variants={itemVariants}>
            We're building the first continental credit passport system to unlock $330 billion in SME financing across Africa through innovative cross-border credit portability.
          </motion.p>
          
          <motion.div className="hero-stats" variants={itemVariants}>
            <motion.div 
              className="hero-stat"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="number"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                $330B
              </motion.span>
              <span className="label">Financing Gap</span>
            </motion.div>
            <motion.div 
              className="hero-stat"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="number"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                54
              </motion.span>
              <span className="label">Countries</span>
            </motion.div>
            <motion.div 
              className="hero-stat"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span 
                className="number"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                70M
              </motion.span>
              <span className="label">SMEs</span>
            </motion.div>
          </motion.div>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a 
              href="/assets/cashaz-pitch-deck.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-pitch-deck"
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              📋 View Pitch Deck
            </motion.a>
            <motion.a 
              href="#solution" 
              className="btn btn-secondary"
              onClick={(e) => { e.preventDefault(); scrollToSection('solution'); }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Our Vision
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div className="hero-visual" variants={itemVariants}>
          <div className="floating-elements">
            <motion.div 
              className="floating-element" 
              style={{ top: '10%', left: '10%' }}
              variants={floatingVariants}
              animate="animate"
            />
            <motion.div 
              className="floating-element" 
              style={{ top: '70%', right: '10%' }}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
            />
            <motion.div 
              className="floating-element" 
              style={{ bottom: '20%', left: '20%' }}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 4 }}
            />
          </div>
          <motion.div 
            className="passport-mockup"
            variants={passportVariants}
            initial="initial"
            whileHover="hover"
            animate={{
              rotate: [-5, -3, -5],
              transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero; 