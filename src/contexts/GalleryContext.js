import React, { createContext, useContext, useState, useEffect } from 'react';

const GalleryContext = createContext();

export const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};

export const GalleryProvider = ({ children }) => {
  const [images, setImages] = useState(() => {
    const saved = localStorage.getItem('generatedImages');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('generatedImages', JSON.stringify(images));
  }, [images]);

  const addImage = (imageData) => {
    const newImage = {
      id: Date.now(),
      url: imageData.url,
      prompt: imageData.prompt,
      style: imageData.style,
      timestamp: new Date().toISOString(),
    };
    setImages(prev => [newImage, ...prev].slice(0, 50)); // Keep only latest 50 images
  };

  const removeImage = (id) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  const clearGallery = () => {
    setImages([]);
  };

  return (
    <GalleryContext.Provider value={{ images, addImage, removeImage, clearGallery }}>
      {children}
    </GalleryContext.Provider>
  );
};
