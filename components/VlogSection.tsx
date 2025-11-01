
import React from 'react';
import { PlayIcon } from './IconComponents';

interface VlogSectionProps {
    isHomePage?: boolean;
}

const vlogItems = [
  { id: 1, title: 'Winter\'s Silence', description: 'Exploring the quiet beauty of a snow-covered landscape.', seed: 'wintervlog' },
  { id: 2, title: 'Coastal Wanderings', description: 'A journey along the rugged, windswept coastline.', seed: 'coastvlog' },
  { id: 3, title: 'Forest Awakening', description: 'The sights and sounds of the forest coming alive at sunrise.', seed: 'forestvlog' },
  { id: 4, title: 'Mountain Echoes', description: 'Reflections from the high peaks and vast valleys.', seed: 'mountainvlog' },
];

const VlogCard: React.FC<{ title: string; description: string; seed: string }> = ({ title, description, seed }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-xl animate-fade-in-up cursor-pointer">
    <img 
      src={`https://picsum.photos/seed/${seed}/600/400`} 
      alt={title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <PlayIcon className="h-20 w-20 text-white/80" />
    </div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 mt-1 text-sm">{description}</p>
    </div>
  </div>
);

const VlogSection: React.FC<VlogSectionProps> = ({ isHomePage = false }) => {
  const items = isHomePage ? vlogItems.slice(0, 2) : vlogItems;
  return (
    <div className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Journeys & Vlogs</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">Visual stories of exploration and reflection.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map(item => (
            <VlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VlogSection;
