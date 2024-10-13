import React from 'react';
import bgimage from '../assets/home/suport.gif';

const SectionTwo = () => {
  return (
    <div className="bg-gradient-to-r bg-gray-50">
      {/* Section with Heading and Image */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="lg:pr-10 py-4">
            <h2 className="mb-6 text-4xl md:text-5xl font-sans leading-tight tracking-wide text-gray-900">
              A Modern Heading for the New Era
            </h2>
            <p className="mb-6 text-gray-700 text-lg font-medium leading-relaxed">
              Explore cutting-edge solutions that streamline workflows, enhance user experiences, and drive success for your business in this fast-paced digital world. Let us guide you to innovation.
            </p>
            <button className="px-6 py-3 text-lg font-semibold bg-gray-600 text-white rounded-md shadow-md hover:bg-gray-500 hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
              Get Started
            </button>
          </div>
          <div className="flex justify-center lg:justify-end bg-transparent">
            <img 
              src={bgimage} 
              alt="Modern illustration" 
              loading="lazy"
              className="object-contain w-full h-full rounded-lg shadow-none transition-transform transform hover:scale-105 duration-500 ease-in-out  rounded  transition duration-300 transform hover:scale-105 hover:grayscale-0 grayscale"
            />
          </div>
        </div>
      </div>

      {/* Feature Section with Numbers */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4 mb-16">
        <div className="grid gap-8 row-gap-8 lg:grid-cols-4 text-center lg:text-left">
          {[
            { number: '1', title: 'Innovate Constantly', description: 'Embrace change and drive innovation in every process for sustainable growth.' },
            { number: '2', title: 'Empower Your Team', description: 'Unlock your team’s potential with the right tools and a strong vision.' },
            { number: '3', title: 'Lead by Example', description: 'Effective leadership is about integrity, empathy, and leading from the front.' },
            { number: '4', title: 'Achieve Excellence', description: 'Focus on quality, deliver exceptional value, and exceed expectations.' },
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
              <div className="flex items-center justify-center w-20 h-20 mb-4 mx-auto text-4xl font-extrabold text-gray-600 bg-gray-100 rounded-full">
                {item.number}
              </div>
              <h6 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h6>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
