import React, { useState } from 'react';
import LanguageSelector from 'src/components/small/LanguageSelector';

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-16">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="flex items-center text-white text-2xl font-bold"
        >
          <svg
            className="w-8 mr-2"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          Company
        </a>
        
        <nav className="hidden lg:flex space-x-6">
          <a
            href="/product"
            className="text-gray-300 hover:text-white transition duration-200"
            aria-label="Our product"
            title="Our product"
          >
            Product
          </a>
          <a
            href="/features"
            className="text-gray-300 hover:text-white transition duration-200"
            aria-label="Our features"
            title="Our features"
          >
            Features
          </a>
          <a
            href="/pricing"
            className="text-gray-300 hover:text-white transition duration-200"
            aria-label="Product pricing"
            title="Product pricing"
          >
            Pricing
          </a>
          <a
            href="/about"
            className="text-gray-300 hover:text-white transition duration-200"
            aria-label="About us"
            title="About us"
          >
            About us
          </a>
          
        </nav>
        
        <div className="hidden lg:flex">
          <a
            href="/signup"
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-200"
            aria-label="Sign up"
            title="Sign up"
          >
            Sign up
          </a>
          <LanguageSelector/>

        </div>

        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 text-white focus:outline-none"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13zM23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6zM23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full bg-gray-800 shadow-lg z-10">
              <div className="flex justify-between items-center p-4">
                <a
                  href="/"
                  className="flex items-center text-white text-2xl font-bold"
                >
                  Company
                </a>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  className="p-2 text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="w-6" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-4 space-y-4">
                <a
                  href="/product"
                  className="text-gray-300 hover:text-white transition duration-200"
                  aria-label="Our product"
                  title="Our product"
                >
                  Product
                </a>
                <a
                  href="/features"
                  className="text-gray-300 hover:text-white transition duration-200"
                  aria-label="Our features"
                  title="Our features"
                >
                  Features
                </a>
                <a
                  href="/pricing"
                  className="text-gray-300 hover:text-white transition duration-200"
                  aria-label="Product pricing"
                  title="Product pricing"
                >
                  Pricing
                </a>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-white transition duration-200"
                  aria-label="About us"
                  title="About us"
                >
                  About us
                </a>
                <a
                  href="/signup"
                  className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-200"
                  aria-label="Sign up"
                  title="Sign up"
                >
                  Sign up
                </a>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
