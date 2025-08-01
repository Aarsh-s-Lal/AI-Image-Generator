import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiRefreshCw, FiZap } from 'react-icons/fi';
import './PromptSuggestions.css';

const PromptSuggestions = ({ onPromptSelect }) => {
  const [currentSet, setCurrentSet] = useState(0);

  const promptSets = [
    [
      "A majestic dragon soaring through clouds at sunset",
      "Cyberpunk cityscape with neon lights reflecting on wet streets",
      "A magical forest with glowing mushrooms and fireflies",
      "Steampunk airship floating above Victorian-era London"
    ],
    [
      "A cozy cottage in a snowy mountain landscape",
      "Abstract representation of music with flowing colors",
      "Underwater palace with mermaids and coral gardens",
      "Space station orbiting a distant alien planet"
    ],
    [
      "Portrait of a wise owl wearing a graduation cap",
      "Vintage café in Paris with outdoor seating",
      "Futuristic car racing through a digital tunnel",
      "Enchanted library with floating books and magical lighting"
    ],
    [
      "Samurai warrior standing in a cherry blossom field",
      "Art nouveau style poster of a celestial goddess",
      "Miniature world inside a glass terrarium",
      "Gothic cathedral made entirely of crystal"
    ]
  ];

  const currentPrompts = promptSets[currentSet];

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % promptSets.length);
  };

  return (
    <div className="prompt-suggestions">
      <div className="suggestions-header">
        <h3><FiZap /> Need inspiration?</h3>
        <button onClick={nextSet} className="refresh-btn">
          <FiRefreshCw />
        </button>
      </div>
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSet}
          className="suggestions-grid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentPrompts.map((prompt, index) => (
            <motion.div
              key={`${currentSet}-${index}`}
              className="suggestion-card"
              onClick={() => onPromptSelect(prompt)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {prompt}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PromptSuggestions;
