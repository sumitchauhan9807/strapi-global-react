import React, { useEffect, useState } from 'react';
import useAxios from 'src/Hooks/UseAxios'
import { constructQueryString } from 'src/helpers'


let qs = constructQueryString([
  "HomeSection3",
  "HomeSection3.Lists",
]);

export const SectionThree = () => {
  const [data, setData] = useState([]);
  const { response, loading, error } = useAxios({
    method: "get",
    url: `home?${qs}`,
  });
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
  console.log(data, "HomeSection3");
  if(!data.data) return

  let { Heading, SubText ,Lists } = data.data.HomeSection3
    return (
    <div className="bg-gradient-to-r from-white-50 to-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-16 bg-gradient-to-r ">
        <div className="max-w-xl mb-12 md:mx-auto sm:text-center lg:max-w-2xl md:mb-16">
          <div>
            <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full  shadow-none">
              New Feature
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-4xl font-sans leading-tight tracking-tight text-gray-900 sm:text-5xl md:mx-auto">
          {Heading}
             
          </h2>
          <p className="text-lg text-gray-700 md:text-xl">
          {SubText}

          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mb-10 md:row-gap-10 lg:grid-cols-4 sm:grid-cols-2">
          {Lists.map((item, index) => (
            <div
              key={index}
              className="duration-500 transform bg-white border-l-4 border-gray-500 hover:-translate-y-3 hover:shadow-2xl transition-all ease-in-out"
            >
              <div className="h-full p-6 border border-l-0 rounded-r-lg shadow-sm">
                <h6 className="mb-3 font-bold leading-6 text-lg text-gray-900">
                  {item.Heading}
                </h6>
                <p className="text-base text-gray-600">{item.SubHeading}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center justify-center w-full h-12 px-8 font-semibold tracking-wide text-white transition duration-300 rounded-lg shadow-md md:w-auto bg-gradient-to-r from-gray-500 to-gray-500 hover:from-gray-600 hover:to-gray-600 focus:shadow-outline focus:outline-none"
          >
            Learn More
          </a>
        </div>
      </div></div>
    );
  };
  
  export default SectionThree;
  