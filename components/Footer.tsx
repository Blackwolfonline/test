
import React from 'react';
import { YouTubeIcon, InstagramIcon, TwitterIcon } from './IconComponents';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
            <span className="sr-only">YouTube</span>
            <YouTubeIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
            <span className="sr-only">Instagram</span>
            <InstagramIcon className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-sky-400 transition-colors duration-300">
            <span className="sr-only">Twitter</span>
            <TwitterIcon className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-base text-gray-500">
          &copy; {new Date().getFullYear()} Black Wolf Path. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
