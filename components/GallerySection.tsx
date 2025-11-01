
import React from 'react';

interface GallerySectionProps {
    isHomePage?: boolean;
}

const galleryItems = [
  { seed: 'natureforest', w: 800, h: 1200, alt: 'Deep green forest path' },
  { seed: 'wolfmoon', w: 800, h: 600, alt: 'Wolf howling at the moon' },
  { seed: 'mountainmist', w: 800, h: 800, alt: 'Misty mountains at dawn' },
  { seed: 'riverflow', w: 800, h: 600, alt: 'Rapid river flowing through rocks' },
  { seed: 'lonewolf', w: 800, h: 1000, alt: 'A solitary wolf on a cliff' },
  { seed: 'aurorasky', w: 800, h: 500, alt: 'Aurora borealis in the night sky' },
];

const GalleryImage: React.FC<{ seed: string; w: number; h: number; alt: string }> = ({ seed, w, h, alt }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg animate-fade-in-up">
    <img 
      src={`https://picsum.photos/seed/${seed}/${w}/${h}`} 
      alt={alt} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
      <p className="text-white text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{alt}</p>
    </div>
  </div>
);

const GallerySection: React.FC<GallerySectionProps> = ({ isHomePage = false }) => {
  const items = isHomePage ? galleryItems.slice(0, 3) : galleryItems;

  return (
    <div className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Moments in Nature</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">A collection of stills from the path less traveled.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <GalleryImage key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
