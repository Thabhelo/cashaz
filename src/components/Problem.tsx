import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Problem: React.FC = () => {
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
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const problemData = [
    {
      icon: "💸",
      title: "Massive Financing Gap",
      stat: "$330B",
      description: "Annual SME financing gap across Africa, with most businesses unable to access traditional credit due to lack of formal financial records."
    },
    {
      icon: "🔍",
      title: "Invisible Credit Histories",
      stat: "80%",
      description: "Of African SMEs have rich payment histories across mobile money, utilities, and suppliers that remain completely invisible to lenders."
    },
    {
      icon: "🌍",
      title: "Cross-Border Barriers",
      stat: "0",
      description: "Credit reputation portability between African countries, forcing SMEs to rebuild credibility from scratch in each new market."
    }
  ];

  return (
    <motion.section 
      className="problem" 
      id="problem"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="problem-container">
        <motion.h2 className="section-title" variants={titleVariants}>
          The Challenge We're Solving
        </motion.h2>
        <motion.p className="section-subtitle" variants={titleVariants}>
          African SMEs face massive barriers to accessing credit despite having strong operational performance and payment histories hidden in digital ecosystems.
        </motion.p>

        <motion.div 
          className="problem-grid"
          variants={containerVariants}
        >
          {problemData.map((problem, index) => (
            <motion.div 
              key={index}
              className="problem-card"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="problem-icon"
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
              >
                {problem.icon}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
              >
                {problem.title}
              </motion.h3>
              <motion.div 
                className="problem-stat"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ delay: 0.9 + index * 0.2, duration: 0.5, type: "spring" }}
              >
                {problem.stat}
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.1 + index * 0.2, duration: 0.5 }}
              >
                {problem.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Problem; 