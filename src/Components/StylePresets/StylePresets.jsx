import React from 'react';
import { motion } from 'framer-motion';
import './StylePresets.css';

const StylePresets = ({ selectedStyle, onStyleSelect }) => {
  const styles = [
    { id: 'photorealistic', name: 'Photorealistic', emoji: '📸' },
    { id: 'digital-art', name: 'Digital Art', emoji: '🎨' },
    { id: 'oil-painting', name: 'Oil Painting', emoji: '🖼️' },
    { id: 'anime', name: 'Anime', emoji: '🌸' },
    { id: 'abstract', name: 'Abstract', emoji: '🌀' },
    { id: 'cyberpunk', name: 'Cyberpunk', emoji: '🌃' },
    { id: 'watercolor', name: 'Watercolor', emoji: '💧' },
    { id: 'sketch', name: 'Sketch', emoji: '✏️' },
  ];

  return (
    <div className="style-presets">
      <h3>🎨 Art Styles</h3>
      <div className="style-grid">
        {styles.map((style) => (
          <motion.div
            key={style.id}
            className={`style-card ${selectedStyle === style.id ? 'selected' : ''}`}
            onClick={() => onStyleSelect(style.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: styles.indexOf(style) * 0.1 }}
          >
            <span className="style-emoji">{style.emoji}</span>
            <span className="style-name">{style.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StylePresets;
