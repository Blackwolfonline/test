
import React from 'react';
import { WolfIcon } from './IconComponents';

type Section = 'home' | 'gallery' | 'vlogs' | 'about';

interface HeaderProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
  isScrolled: boolean;
}

const NavLink: React.FC<{
  label: string;
  section: Section;
  activeSection: Section;
  onClick: (section: Section) => void;
}> = ({ label, section, activeSection, onClick }) => (
  <button
    onClick={() => onClick(section)}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 relative group`}
  >
    <span className={`${activeSection === section ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{label}</span>
    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeSection === section ? 'scale-x-100' : ''}`}></span>
  </button>
);

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection, isScrolled }) => {
  const navItems: { label: string; section: Section }[] = [
    { label: 'Home', section: 'home' },
    { label: 'Gallery', section: 'gallery' },
    { label: 'Vlogs', section: 'vlogs' },
    { label: 'About', section: 'about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveSection('home')}>
            <WolfIcon className="h-8 w-8 text-sky-400" />
            <span className="ml-3 text-xl font-bold text-white tracking-wider">Black Wolf Path</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item => (
                <NavLink 
                  key={item.section}
                  label={item.label}
                  section={item.section}
                  activeSection={activeSection}
                  onClick={setActiveSection}
                />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button could be added here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
