import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  scrollY: number;
}

const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with section hash
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleContactClick = () => {
    // Always navigate to contact page
    // The CTA section will handle scrolling on home page if needed
  };

  const headerVariants = {
    initial: {
      background: 'rgba(255, 255, 255, 0.95)',
      boxShadow: 'none'
    },
    scrolled: {
      background: 'rgba(255, 255, 255, 0.98)',
      boxShadow: '0 2px 20px rgba(139, 92, 246, 0.1)'
    }
  };

  return (
    <motion.header 
      className="header"
      variants={headerVariants}
      animate={scrollY > 100 ? 'scrolled' : 'initial'}
      transition={{ duration: 0.3 }}
    >
      <div className="nav-container">
        <Link to="/">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cashaz
          </motion.div>
        </Link>
        <nav>
          <motion.ul 
            className="nav-links"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.li whileHover={{ scale: 1.05 }}>
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                Home
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a href="#problem" onClick={(e) => { e.preventDefault(); scrollToSection('problem'); }}>
                Problem
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a href="#solution" onClick={(e) => { e.preventDefault(); scrollToSection('solution'); }}>
                Solution
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a href="#vision" onClick={(e) => { e.preventDefault(); scrollToSection('vision'); }}>
                Vision
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link to="/contact">
                Contact
              </Link>
            </motion.li>
          </motion.ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header; 