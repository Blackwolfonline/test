
import React from 'react';

interface HeroSectionProps {
  onExplore: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExplore }) => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/blackwolf/1920/1080" 
          alt="A black wolf in a misty forest" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 p-8 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 leading-tight">
          Embrace The <span className="text-sky-400">Wild</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
          Journeys through untamed nature, introspective vlogs, and the silent wisdom of the wolf.
        </p>
        <button 
          onClick={onExplore}
          className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-600 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-sky-500/30">
          Explore Gallery
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
