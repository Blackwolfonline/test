
import React from 'react';

interface AboutSectionProps {
    isHomePage?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isHomePage = false }) => {
  return (
    <div className={`py-16 sm:py-24 ${!isHomePage ? 'bg-gray-900' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div className="relative h-80 lg:h-full animate-fade-in">
            <img 
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
              src="https://picsum.photos/seed/philosophy/800/1000"
              alt="Person looking over a vast landscape"
            />
          </div>
          <div className="mt-12 lg:mt-0 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Path of <span className="text-sky-400">Observation</span>
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              This space is a chronicle of life viewed through a lens of natural wonder and quiet introspection. It's about finding the profound in the simple, the wild in the everyday, and learning from the silent resilience of nature.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              Inspired by the spirit of the black wolf—a symbol of instinct, intelligence, and freedom—we explore themes of solitude, connection, and the journey of life itself. Join us in observing the world and discovering the stories it has to tell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
