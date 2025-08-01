import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSun, FiMoon, FiImage, FiDownload, FiRefreshCw, FiSettings } from 'react-icons/fi';
import { saveAs } from 'file-saver';
import './ImageGenerator.css';
import { useTheme } from '../../contexts/ThemeContext';
import { useGallery } from '../../contexts/GalleryContext';
import default_image from '../Assets/default_image.svg';
import StylePresets from '../StylePresets/StylePresets';
import Gallery from '../Gallery/Gallery';
import EnhancedLoading from '../EnhancedLoading/EnhancedLoading';
import PromptSuggestions from '../PromptSuggestions/PromptSuggestions';

const ImageGenerator = () => {
  const { isDark, toggleTheme } = useTheme();
  const { addImage } = useGallery();
  const [image_url, setImage_url] = useState('/');
  const [loading, setLoading] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState('photorealistic');
  const [showGallery, setShowGallery] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [imageSize, setImageSize] = useState('512x512');
  const [batchCount, setBatchCount] = useState(1);
  const [generatedImages, setGeneratedImages] = useState([]);
  const inputRef = useRef(null);

  const stylePrompts = {
    'photorealistic': 'photorealistic, high quality, detailed',
    'digital-art': 'digital art, concept art, trending on artstation',
    'oil-painting': 'oil painting, classical art style, brush strokes',
    'anime': 'anime style, manga, japanese animation',
    'abstract': 'abstract art, modern, artistic interpretation',
    'cyberpunk': 'cyberpunk, neon, futuristic, sci-fi',
    'watercolor': 'watercolor painting, soft colors, artistic',
    'sketch': 'pencil sketch, hand drawn, artistic sketch'
  };

  const imageGenerator = async () => {
    const input = inputRef.current.value.trim();
    if (input === '') {
      alert('Please enter a prompt!');
      return;
    }
    
    setLoading(true);
    setGeneratedImages([]);
    
    try {
      const promises = [];
      for (let i = 0; i < batchCount; i++) {
        const enhancedPrompt = `${input}, ${stylePrompts[selectedStyle]}`;
        const encodedPrompt = encodeURIComponent(enhancedPrompt);
        const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${imageSize.split('x')[0]}&height=${imageSize.split('x')[1]}&seed=${Date.now() + i}`;
        promises.push({ url: imageUrl, prompt: input });
      }
      
      // Simulate loading time for better UX
      setTimeout(() => {
        setGeneratedImages(promises);
        setImage_url(promises[0].url);
        
        // Add images to gallery
        promises.forEach(imageData => {
          addImage({
            url: imageData.url,
            prompt: imageData.prompt,
            style: selectedStyle
          });
        });
        
        setLoading(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error generating image:', error);
      setLoading(false);
      alert('Failed to generate image. Please try again.');
    }
  };

  const downloadImage = async (url, prompt) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, `ai-generated-${prompt.substring(0, 20)}.jpg`);
    } catch (error) {
      console.error('Error downloading image:', error);
      alert('Failed to download image.');
    }
  };

  const selectPrompt = (prompt) => {
    inputRef.current.value = prompt;
  };

  const generateRandom = () => {
    const randomPrompts = [
      "A magical sunset over crystal mountains",
      "Futuristic robot in a garden of glowing flowers",
      "Ancient temple floating in the clouds",
      "Underwater city with bioluminescent creatures",
      "Steampunk butterfly with mechanical wings"
    ];
    const randomPrompt = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
    inputRef.current.value = randomPrompt;
    imageGenerator();
  };

  return (
    <motion.div 
      className='ai-image-generator'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header with theme toggle */}
      <div className="header-section">
        <motion.div 
          className="header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          AI Image <span>Generator</span>
        </motion.div>
        
        <div className="header-controls">
          <button onClick={() => setShowGallery(true)} className="control-btn">
            <FiImage /> Gallery
          </button>
          <button onClick={() => setShowSettings(!showSettings)} className="control-btn">
            <FiSettings />
          </button>
          <button onClick={toggleTheme} className="control-btn theme-toggle">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            className="settings-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="setting-group">
              <label>Image Size:</label>
              <select value={imageSize} onChange={(e) => setImageSize(e.target.value)}>
                <option value="512x512">Square (512x512)</option>
                <option value="768x512">Landscape (768x512)</option>
                <option value="512x768">Portrait (512x768)</option>
                <option value="1024x1024">Large Square (1024x1024)</option>
              </select>
            </div>
            <div className="setting-group">
              <label>Batch Count:</label>
              <select value={batchCount} onChange={(e) => setBatchCount(Number(e.target.value))}>
                <option value={1}>1 Image</option>
                <option value={2}>2 Images</option>
                <option value={4}>4 Images</option>
              </select>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Style Presets */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <StylePresets selectedStyle={selectedStyle} onStyleSelect={setSelectedStyle} />
      </motion.div>

      {/* Prompt Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <PromptSuggestions onPromptSelect={selectPrompt} />
      </motion.div>

      {/* Image Display */}
      <motion.div 
        className="img-loading"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        {loading ? (
          <EnhancedLoading isLoading={loading} />
        ) : (
          <div className="image-display">
            {generatedImages.length > 1 ? (
              <div className="image-grid">
                {generatedImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className="generated-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <img src={img.url} alt={`Generated ${index + 1}`} />
                    <div className="image-overlay">
                      <button onClick={() => downloadImage(img.url, img.prompt)}>
                        <FiDownload />
                      </button>
                      <button onClick={() => setImage_url(img.url)}>
                        View
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="single-image">
                <img src={image_url === '/' ? default_image : image_url} alt="Generated" />
                {image_url !== '/' && (
                  <motion.div
                    className="image-actions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <button onClick={() => downloadImage(image_url, inputRef.current.value)}>
                      <FiDownload /> Download
                    </button>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        )}
      </motion.div>

      {/* Search Box */}
      <motion.div 
        className="search-box"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <input 
          type="text" 
          ref={inputRef} 
          className="search-input" 
          placeholder='Describe what you want to see...'
          onKeyPress={(e) => e.key === 'Enter' && imageGenerator()}
        />
        <div className="search-actions">
          <button className="action-btn random-btn" onClick={generateRandom} title="Random prompt">
            <FiRefreshCw />
          </button>
          <button className="generate-btn" onClick={imageGenerator} disabled={loading}>
            {loading ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </motion.div>

      {/* Gallery Modal */}
      <Gallery isOpen={showGallery} onClose={() => setShowGallery(false)} />
    </motion.div>
  );
};

export default ImageGenerator;
