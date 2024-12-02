import React, { useState, useRef, useEffect } from 'react';
import LanguageSelector from 'src/components/small/LanguageSelector';
import SubNav from 'src/components/SubNav';
import product1Image from 'src/assets/icons/1.png';
import { AiOutlineCaretUp } from "react-icons/ai";

const products = [
  {
    name: 'Product 1',
    description: 'This is a description for product 1.',
    image: product1Image, // Replace with the actual path to your PNG image
  },
  {
    name: 'Product 2',
    description: 'This is a description for product 2.',
    image: product1Image, // Replace with the actual path to your PNG image
  },
  {
    name: 'Product 3',
    description: 'This is a description for product 3.',
    image: product1Image, // Replace with the actual path to your PNG image
  },
  // Add more products as needed
];


export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        setShowMegaMenu('')
      }
    };
    ['mousedown', 'scroll'].forEach(event => window.addEventListener(event, handleOutSideClick));
    return () => {
      ['mousedown', 'scroll'].forEach(event => window.addEventListener(event, handleOutSideClick));
    };
  }, [ref]);


  const MegaMenu = ({ data }) => {
    return (
      <div className="flex absolute flex-wrap bg-white shadow-lg p-4 top-full left-[-64px] w-[600px] z-10" ref={ref}>
        <i className='absolute left-[15%] top-[-8%]'>
          <AiOutlineCaretUp color='white' size={40}/>
        </i>
        {data.map((val, index) => (
          <div key={index} className="flex items-center m-8 max-w-[200px] gap-2">
            <img
              src={val.image}
              alt={val.name}
              className="h-16 w-16 mb-1 object-contain" // Adjust size as needed
            />
            <a
              href={`/product${index + 1}`}
              className="flex flex-col text-gray-800 hover:text-gray-600 transition duration-200"
            >
              <span className="font-bold">{val.name}</span>
              <span className="text-sm text-gray-500">{val.description}</span>
            </a>
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <header className="bg-gray-800 shadow-lg sticky top-0 z-50 ">
        <div className="container mx-auto flex justify-between items-center h-16 px-4 lg:px-16 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <a
            href="/"
            aria-label="Company"
            title="Company"
            className="flex items-center text-white text-xl h lg:text-2xl font-bold"
          >    
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 h-full">
            <div
              className="flex relative h-full"
            // onMouseEnter={() => setShowMegaMenu(true)}
            // onMouseLeave={() => setShowMegaMenu(false)}
            >
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition duration-200 h-full px-6"
                aria-label="Our product"
                title="Our product"
                // style={{ backgroundColor: showMegaMenu == 'product' ? 'white' : '', color: showMegaMenu == 'product' ? 'black' : '' }}
                onClick={(e) => {
                  e.preventDefault();
                  setShowMegaMenu('product');
                }}
              >
                Product
              </a>
              {showMegaMenu == 'product' && <MegaMenu data={products} />}
              {/* {showMegaMenu && (
                <div className="absolute top-full left-0 bg-white bg-opacity-90 shadow-2xl rounded-md border-gray-300 border p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2 w-64 md:w-80 lg:w-[600px]">
                  {products.map((product, index) => (
                    <div key={index} className="flex flex-col items-center">

                      <a
                        href={`/product${index + 1}`}
                        className="flex flex-wrap gap-2 px-2  hover:text-white items-start text-left transition-transform duration-300 hover:bg-gray-700 bg-gray-100 border-2 py-4 rounded-md transform hover:scale-105 group "
                      >

                        <div><img
                          src={product.image}
                          alt={product.name}
                          className="h-10 w-10 mb-2 object-contain" // Adjust size as needed
                        /></div>  <div className="grid grid-cols-1 ">
                          <span className="font-sans">{product.name}</span>
                          <span className="text-sm text-gray-500 ">{product.description}</span></div>
                      </a>
                    </div>
                  ))}
                </div>
              )} */}
            </div>
            <div className="flex relative h-full">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition duration-200 h-full px-6"
                aria-label="Our features"
                title="Our features"
                // style={{ backgroundColor: showMegaMenu == 'features' ? 'white' : '', color: showMegaMenu == 'features' ? 'black' : '' }}
                onClick={(e) => {
                  e.preventDefault();
                  setShowMegaMenu('features');
                }}
              >
                Features
              </a>
              {showMegaMenu == 'features' && <MegaMenu data={products} />}
            </div>
            <div className="flex relative h-full">
              <a
                href="#"
                className="flex items-center text-gray-300 hover:text-white transition duration-200 h-full px-6"
                aria-label="Product pricing"
                // style={{ backgroundColor: showMegaMenu == 'pricing' ? 'white' : '', color: showMegaMenu == 'pricing' ? 'black' : '' }}
                title="Product pricing"
                onClick={(e) => {
                  e.preventDefault();
                  setShowMegaMenu('pricing');
                }}
              >
                Pricing
              </a>
              {showMegaMenu == 'pricing' && <MegaMenu data={products} />}
            </div>
            <div className="flex relative h-full">
              <a
                href="/about"
                className="flex items-center text-gray-300 hover:text-white transition duration-200 h-full px-6"
                aria-label="About us"
                title="About us"
              >
                About us
              </a>
            </div>
            <div className="flex relative h-full">
              <a
                href="/about"
                className="flex items-center text-gray-300 hover:text-white transition duration-200 h-full px-6"
                aria-label="About us"
                title="About us"
              >
                Team
              </a>
            </div>
            <div className="flex relative h-full">
              <a
                href="/about"
                className="flex items-center text-gray-300 hover:text-white transition duration-200 h-full px-6"
                aria-label="About us"
                title="About us"
              >
                Contact us
              </a>
            </div>

          </nav>

          {/* Desktop Language Selector & Signup Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="/signup"
              className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-200"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign up
            </a>
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13zM23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6zM23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-10 bg-gray-800 bg-opacity-95">
              <div className="flex justify-between items-center p-4">
                <a
                  href="/"
                  className="text-white text-xl font-bold"
                  aria-label="Company"
                  title="Company"
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
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col items-center mt-4">
                <a
                  href="/features"
                  className="text-gray-300 text-lg hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="/pricing"
                  className="text-gray-300 text-lg hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="/about"
                  className="text-gray-300 text-lg hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About us
                </a>
                <a
                  href="/signup"
                  className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign up
                </a>
                {/* <div className="mt-4"> */}
                {/* <a
                    href="#"
                    className="text-gray-300 hover:text-white transition duration-200"
                    aria-label="Our product"
                    title="Our product"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowMegaMenu(!showMegaMenu);
                    }}
                  >
                    Product
                  </a> */}
                {/* {showMegaMenu && (
                  
                )} */}
                {/* </div> */}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Nav;
