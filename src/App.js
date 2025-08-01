import "./App.css";
import ImageGenerator from "./Components/ImageGenerator/ImageGenerator";
import ParticleBackground from "./Components/ParticleBackground/ParticleBackground";
import { ThemeProvider } from "./contexts/ThemeContext";
import { GalleryProvider } from "./contexts/GalleryContext";

function App() {
  return (
    <ThemeProvider>
      <GalleryProvider>
        <div className="App">
          <ParticleBackground />
          <ImageGenerator />
        </div>
      </GalleryProvider>
    </ThemeProvider>
  );
}

export default App;
