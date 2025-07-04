import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorks: React.FC = () => {
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

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
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

  const stepsData = [
    {
      number: "1",
      title: "Data Collection",
      description: "Securely aggregate payment histories from mobile money platforms, utility companies, and business networks with user consent."
    },
    {
      number: "2",
      title: "Credit Analysis",
      description: "AI algorithms analyze patterns to generate comprehensive credit assessments specifically designed for African business contexts."
    },
    {
      number: "3",
      title: "Passport Creation",
      description: "Users receive digital credit passports they control, with granular permissions for sharing with different lenders and purposes."
    },
    {
      number: "4",
      title: "Cross-Border Access",
      description: "Federated verification network enables SMEs to use their credit reputation across African markets seamlessly."
    }
  ];

  return (
    <motion.section 
      className="how-it-works"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <div className="how-it-works-container">
        <motion.h2 className="section-title" variants={titleVariants}>
          How Cashaz Will Work
        </motion.h2>
        <motion.p className="section-subtitle" variants={titleVariants}>
          Our four-step process will transform how African SMEs access credit and expand across borders.
        </motion.p>

        <motion.div 
          className="steps"
          variants={containerVariants}
        >
          {stepsData.map((step, index) => (
            <motion.div 
              key={index}
              className="step"
              variants={stepVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="step-number"
                initial={{ scale: 0, rotate: -180 }}
                animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                transition={{ 
                  delay: 0.5 + index * 0.2, 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 15px 40px rgba(139, 92, 246, 0.4)"
                }}
              >
                {step.number}
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + index * 0.2, duration: 0.5 }}
              >
                {step.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 + index * 0.2, duration: 0.5 }}
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItWorks; 