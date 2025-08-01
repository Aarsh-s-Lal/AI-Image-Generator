import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiTrash2, FiX, FiImage } from 'react-icons/fi';
import { useGallery } from '../../contexts/GalleryContext';
import { saveAs } from 'file-saver';
import './Gallery.css';

const Gallery = ({ isOpen, onClose }) => {
  const { images, removeImage, clearGallery } = useGallery();
  const [selectedImage, setSelectedImage] = useState(null);

  const downloadImage = async (url, prompt) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      saveAs(blob, `ai-generated-${prompt.substring(0, 20)}.jpg`);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="gallery-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="gallery-modal"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="gallery-header">
            <h2><FiImage /> Your Gallery ({images.length})</h2>
            <div className="gallery-actions">
              {images.length > 0 && (
                <button onClick={clearGallery} className="clear-btn">
                  <FiTrash2 /> Clear All
                </button>
              )}
              <button onClick={onClose} className="close-btn">
                <FiX />
              </button>
            </div>
          </div>

          <div className="gallery-content">
            {images.length === 0 ? (
              <div className="empty-gallery">
                <FiImage size={64} />
                <p>No images generated yet</p>
                <p>Start creating some amazing AI art!</p>
              </div>
            ) : (
              <div className="gallery-grid">
                {images.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="gallery-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img src={image.url} alt={image.prompt} />
                    <div className="image-overlay">
                      <p className="image-prompt">{image.prompt}</p>
                      <div className="image-actions">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            downloadImage(image.url, image.prompt);
                          }}
                          className="action-btn download"
                        >
                          <FiDownload />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeImage(image.id);
                          }}
                          className="action-btn delete"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Image Preview Modal */}
        {selectedImage && (
          <motion.div
            className="image-preview-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="image-preview"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={selectedImage.url} alt={selectedImage.prompt} />
              <div className="preview-info">
                <p><strong>Prompt:</strong> {selectedImage.prompt}</p>
                <p><strong>Style:</strong> {selectedImage.style}</p>
                <p><strong>Created:</strong> {new Date(selectedImage.timestamp).toLocaleString()}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="preview-close"
              >
                <FiX />
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Gallery;
