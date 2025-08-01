import React from 'react';
import { motion } from 'framer-motion';
import './EnhancedLoading.css';

const EnhancedLoading = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="enhanced-loading">
      <motion.div
        className="ai-brain"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        🧠
      </motion.div>
      
      <motion.div
        className="loading-dots"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="dot"
            animate={{
              y: [0, -10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      <motion.div
        className="loading-text"
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        AI is creating your masterpiece...
      </motion.div>

      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default EnhancedLoading;
