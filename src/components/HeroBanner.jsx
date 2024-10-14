import React, { useEffect, useState } from 'react';
import { baseUrl } from 'src/helpers'
import { PageSkeleton } from 'src/components/small/Skeletons'

const HeroBanner = ({data}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  

  useEffect(() => {
    if(data?.HeroText) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroText.length);
      }, 4000); // Change text every 4 seconds
  
      return () => clearInterval(interval);
    }
  }, []);
  if(!data?.HeroText) return 

  console.log(data,"datadatadatadatadatadata")
  const { HeroText , Image, SubText ,ButtonText } = data

  // return <PageSkeleton/>
  return (
    <div className="relative bg-gradient-to-r from-gray-800 to-gray-600">
      <img
        src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
        loading="lazy"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
        alt="Background"
      />
      <div className="relative bg-gray-900 bg-opacity-60 backdrop-blur-md">
        <div className="px-6 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 text-center xl:text-left">
              <h2 className="relative max-w-lg mb-6 py-10 font-sans text-5xl md:text-6xl font-extrabold tracking-tight text-white sm:leading-none">
                {HeroText.map((text, index) => (
                  <span
                    key={index}
                    className={`absolute transition-opacity duration-1000 ease-in-out ${
                      currentIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: currentIndex === index ? 'translate(-50%, -50%)' : 'translate(-50%, -60%)', // Adjust vertical position for current text
                      width: '100%',
                      textAlign: 'left',
                      height: '100px', // Fixed height to prevent overlap
                    }}
                  >
                    {text.text}
                  </span>
                ))}
              </h2>
              <p className="max-w-xl mb-6 text-lg text-gray-300 md:text-xl mt-28">
                {SubText}
              </p>
              <a
                href="/"
                className="inline-flex items-center px-8 py-4 font-semibold tracking-wider text-black uppercase bg-white rounded-lg shadow-lg hover:bg-teal-600 hover:text-white hover:shadow-xl transition-transform duration-300 transform hover:scale-105 active:scale-95"
              >
                {ButtonText}
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="flex justify-center lg:justify-end">
                <img
                  src={baseUrl() + Image[0].url}
                  loading="lazy"
                  alt="Modern illustration"
                  className="object-contain w-full h-full rounded-lg shadow-none transition-transform transform hover:scale-105 duration-500 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
