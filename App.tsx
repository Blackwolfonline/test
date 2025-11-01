
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import VlogSection from './components/VlogSection';
import AboutSection from './components/AboutSection';

type Section = 'home' | 'gallery' | 'vlogs' | 'about';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'gallery':
        return <GallerySection />;
      case 'vlogs':
        return <VlogSection />;
      case 'about':
        return <AboutSection />;
      case 'home':
      default:
        return (
          <>
            <HeroSection onExplore={() => setActiveSection('gallery')} />
            <div className="py-16 sm:py-24 bg-gray-900/50 backdrop-blur-sm">
                <AboutSection isHomePage={true} />
            </div>
            <div className="py-16 sm:py-24 bg-black/30">
                <VlogSection isHomePage={true} />
            </div>
            <div className="py-16 sm:py-24 bg-gray-900/50 backdrop-blur-sm">
                <GallerySection isHomePage={true} />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        isScrolled={isScrolled}
      />
      <main>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
