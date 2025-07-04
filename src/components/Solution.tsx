import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Solution: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const featureVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut"
      }
    }
  };

  const featuresData = [
    {
      icon: "📱",
      title: "Alternative Data Integration",
      description: "Aggregate payment histories from mobile money, utilities, and business networks"
    },
    {
      icon: "🔐",
      title: "User-Controlled Passports",
      description: "SMEs own and control their credit information with granular sharing permissions"
    },
    {
      icon: "🌐",
      title: "Cross-Border Verification",
      description: "Federated network enables secure verification across African countries"
    },
    {
      icon: "🤖",
      title: "AI-Powered Scoring",
      description: "Deep learning models trained specifically on African SME patterns"
    }
  ];

  return (
    <motion.section 
      className="solution" 
      id="solution"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="solution-container">
        <div className="solution-content">
          <motion.div className="solution-text" variants={textVariants}>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              Our Revolutionary Solution
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Cashaz will create the world's first continental credit passport system, transforming alternative data into portable, verifiable credit credentials that SMEs control and can share across borders.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Through federated architecture and privacy-preserving analytics, we'll enable credit reputation portability while respecting data sovereignty and building trust with all stakeholders.
            </motion.p>
            <motion.a 
              href="#vision" 
              className="btn btn-white"
              onClick={(e) => { e.preventDefault(); scrollToSection('vision'); }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              See Our Vision
            </motion.a>
          </motion.div>

          <motion.div 
            className="solution-features"
            variants={containerVariants}
          >
            {featuresData.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                variants={featureVariants}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="feature-icon"
                  initial={{ scale: 0, rotate: -90 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -90 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                >
                  {feature.title}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                >
                  {feature.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Solution; 