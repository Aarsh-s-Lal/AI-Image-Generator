# 🎨 AI Image Generator

A modern, feature-rich AI-powered image generator built with React. Create stunning images from text prompts using advanced AI technology with a beautiful, interactive user interface.

![AI Image Generator](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

## ✨ Features

### 🎨 **Core Features**
- 🤖 **AI-Powered Image Generation** - Generate images from text prompts using Pollinations AI
- 🎨 **8 Art Style Presets** - Photorealistic, Digital Art, Oil Painting, Anime, Abstract, Cyberpunk, Watercolor, Sketch
- 🎯 **Smart Prompt Enhancement** - Automatically enhances prompts based on selected art style
- 🔄 **Batch Generation** - Generate 1, 2, or 4 images simultaneously
- � **Multiple Image Sizes** - Square (512x512), Landscape (768x512), Portrait (512x768), Large (1024x1024)

### 🖼️ **Gallery & Storage**
- 🖼️ **Local Image Gallery** - Saves up to 50 generated images with metadata
- 📥 **Download Support** - Save images in JPG format with custom filenames
- 🗑️ **Gallery Management** - View, delete, and clear saved images
- �️ **Image Preview** - Full-screen image preview with generation details

### 🎪 **User Experience**
- 🌓 **Dark/Light Theme Toggle** - Seamless theme switching with system preference detection
- 📱 **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- ⚡ **Enhanced Loading Animations** - Beautiful AI brain animation with progress tracking
- 🎪 **Interactive Particle Background** - Dynamic animated particles with connection lines
- 🎯 **Smart Prompt Suggestions** - 16 curated prompts across 4 rotating sets
- 🎲 **Random Prompt Generator** - One-click random creative prompts

### 🔧 **Advanced Controls**
- ⚙️ **Settings Panel** - Collapsible configuration options
- 🎨 **Style Preview Cards** - Visual style selection with hover effects
- ⌨️ **Keyboard Support** - Enter key to generate, intuitive navigation
- 🔄 **Real-time Updates** - Instant visual feedback and state management

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aarsh-s-Lal/AI-Image-Generator.git
   cd AI-Image-Generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Dependencies & Packages

### **Core React Dependencies**
| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.1.0 | Core React library for building user interfaces |
| `react-dom` | ^19.1.0 | React DOM rendering and manipulation |
| `react-scripts` | 5.0.1 | Create React App build tools and configurations |

### **Animation & Motion**
| Package | Version | Purpose |
|---------|---------|---------|
| `framer-motion` | ^12.23.12 | Advanced animations, transitions, and gestures for React components |

### **UI Components & Icons**
| Package | Version | Purpose |
|---------|---------|---------|
| `react-icons` | ^5.5.0 | Popular icon library with Feather Icons (Fi) used throughout the app |
| `bootstrap` | ^5.3.7 | CSS framework for responsive grid system and utilities |

### **File Handling & Downloads**
| Package | Version | Purpose |
|---------|---------|---------|
| `file-saver` | ^2.0.5 | Client-side file saving functionality for image downloads |
| `html2canvas` | ^1.4.1 | Screen capture library (reserved for future screenshot features) |

### **Testing Dependencies**
| Package | Version | Purpose |
|---------|---------|---------|
| `@testing-library/react` | ^16.3.0 | Simple and complete testing utilities for React components |
| `@testing-library/jest-dom` | ^6.6.3 | Custom Jest matchers for DOM element assertions |
| `@testing-library/dom` | ^10.4.0 | Core DOM testing utilities |
| `@testing-library/user-event` | ^13.5.0 | Simulates user interactions for testing |

### **Performance & Analytics**
| Package | Version | Purpose |
|---------|---------|---------|
| `web-vitals` | ^2.1.4 | Library for measuring real user performance metrics |

## 🏗️ Project Structure

```
src/
├── Components/
│   ├── ImageGenerator/          # Main image generation component
│   │   ├── ImageGenerator.jsx
│   │   └── ImageGenerator.css
│   ├── StylePresets/           # Art style selection component
│   │   ├── StylePresets.jsx
│   │   └── StylePresets.css
│   ├── Gallery/                # Image gallery and management
│   │   ├── Gallery.jsx
│   │   └── Gallery.css
│   ├── EnhancedLoading/        # Advanced loading animations
│   │   ├── EnhancedLoading.jsx
│   │   └── EnhancedLoading.css
│   ├── ParticleBackground/     # Animated background particles
│   │   ├── ParticleBackground.jsx
│   │   └── ParticleBackground.css
│   ├── PromptSuggestions/      # Intelligent prompt suggestions
│   │   ├── PromptSuggestions.jsx
│   │   └── PromptSuggestions.css
│   └── Assets/                 # Static assets and images
│       └── default_image.svg
├── contexts/
│   ├── ThemeContext.js         # Theme management (dark/light mode)
│   └── GalleryContext.js       # Gallery state management
├── App.js                      # Main application component
├── App.css                     # Global application styles
├── index.js                    # Application entry point
└── index.css                   # Global CSS variables and theming
```

## 🎨 Key Features Explained

### **Art Style System**
The application includes 8 carefully crafted art styles that automatically enhance user prompts:
- **Photorealistic**: Adds "photorealistic, high quality, detailed"
- **Digital Art**: Adds "digital art, concept art, trending on artstation"
- **Oil Painting**: Adds "oil painting, classical art style, brush strokes"
- **Anime**: Adds "anime style, manga, japanese animation"
- **Abstract**: Adds "abstract art, modern, artistic interpretation"
- **Cyberpunk**: Adds "cyberpunk, neon, futuristic, sci-fi"
- **Watercolor**: Adds "watercolor painting, soft colors, artistic"
- **Sketch**: Adds "pencil sketch, hand drawn, artistic sketch"

### **Theme System**
- CSS custom properties for seamless theme switching
- System preference detection
- Persistent theme storage in localStorage
- Smooth transitions between themes

### **Gallery System**
- LocalStorage-based persistence
- Metadata storage (prompt, style, timestamp)
- Automatic cleanup (50 image limit)
- Advanced image preview with details

### **Animation System**
- Framer Motion for smooth transitions
- Staggered animations for lists
- Hover and tap effects
- Loading state animations

## 🛠️ Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
The page will reload when you make changes.

### `npm test`
Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🎯 Usage Guide

### **Basic Image Generation**
1. Enter a text prompt describing your desired image
2. Select an art style from the preset options
3. Click "Generate" or press Enter
4. Wait for the AI to create your image

### **Advanced Features**
1. **Batch Generation**: Use settings panel to generate multiple variations
2. **Custom Sizes**: Choose from different aspect ratios
3. **Gallery Access**: Click "Gallery" to view saved images
4. **Theme Toggle**: Click sun/moon icon to switch themes
5. **Random Prompts**: Use refresh button for inspiration

## 🌐 API Integration

The application uses the **Pollinations AI API** for image generation:
- **Endpoint**: `https://image.pollinations.ai/prompt/{encodedPrompt}`
- **Parameters**: Width, height, seed for variation
- **No API key required**
- **Rate limiting**: Handled gracefully with loading states

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🔧 Customization

### **Adding New Art Styles**
Edit `src/Components/ImageGenerator/ImageGenerator.jsx`:
```javascript
const stylePrompts = {
  'your-style': 'your prompt enhancement',
  // Add new styles here
};
```

### **Modifying Themes**
Edit `src/index.css` CSS custom properties:
```css
:root {
  --primary-color: #DE1B89;
  --secondary-color: #1F3540;
  /* Customize theme colors */
}
```

### **Adding Prompt Categories**
Edit `src/Components/PromptSuggestions/PromptSuggestions.jsx`:
```javascript
const promptSets = [
  ["Your custom prompts here"],
  // Add new prompt sets
];
```

## 🚀 Deployment

### **Netlify Deployment**
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure custom domain (optional)

### **Vercel Deployment**
1. Connect your GitHub repository
2. Auto-deploy on every push
3. Custom domain configuration available

### **GitHub Pages**
1. Install: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/AI-Image-Generator"`
3. Add scripts: `"predeploy": "npm run build"` and `"deploy": "gh-pages -d build"`
4. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **Pollinations AI** for providing free AI image generation API
- **Framer Motion** for beautiful animations
- **React Icons** for comprehensive icon library
- **Create React App** for the solid foundation

## 📞 Support

If you encounter any issues or have questions:
- Create an issue on GitHub
- Check existing issues for solutions
- Review the documentation

---

**Made with ❤️ and AI** - Transform your imagination into stunning visual art!
