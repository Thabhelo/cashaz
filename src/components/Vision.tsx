import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Vision: React.FC = () => {
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
      scale: 0.8,
      rotateX: -15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
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

  const visionData = [
    {
      number: "100K",
      title: "SMEs Empowered",
      description: "African small businesses with verified credit passports enabling access to previously unavailable financing."
    },
    {
      number: "$50M",
      title: "Financing Unlocked",
      description: "Additional capital deployed to SMEs through improved risk assessment and faster processing."
    },
    {
      number: "54",
      title: "Countries Connected",
      description: "African markets integrated through cross-border credit verification infrastructure."
    },
    {
      number: "75%",
      title: "Time Reduction",
      description: "Faster loan processing for financial institutions using our alternative credit assessment."
    }
  ];

  return (
    <motion.section 
      className="vision" 
      id="vision"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="vision-container">
        <motion.h2 className="section-title" variants={titleVariants}>
          Our Vision for 2027
        </motion.h2>
        <motion.p className="section-subtitle" variants={titleVariants}>
          We're building towards a future where African SMEs can access credit anywhere on the continent using their portable digital reputation.
        </motion.p>

        <motion.div 
          className="vision-grid"
          variants={containerVariants}
        >
          {visionData.map((vision, index) => (
            <motion.div 
              key={index}
              className="vision-card"
              variants={cardVariants}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                boxShadow: "0 25px 60px rgba(139, 92, 246, 0.3)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className="number"
                initial={{ opacity: 0, scale: 0.3, rotateY: -90 }}
                animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.3, rotateY: -90 }}
                transition={{ 
                  delay: 0.5 + index * 0.1, 
                  duration: 0.7,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {vision.number}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
              >
                {vision.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                {vision.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Vision; 