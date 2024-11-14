import React, { useEffect, useState } from 'react';
import useAxios from 'src/Hooks/UseAxios'
import { constructQueryString } from 'src/helpers'
import {useSelector} from 'react-redux'


let qs = constructQueryString([
  "Pricing",
  "Pricing.Plans",
  "Pricing.Plans.Features"
]);

export const Pricing = () => {
  const language = useSelector((state) => state.language);

  const [data, setData] = useState([]);
  const { response, loading, error } = useAxios({
    method: "get",
    url: `home?${qs}locale=${language.language}`,
  });
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
  
  if(!data?.data?.Pricing) return

  let { Heading, SubText ,Plans } = data.data.Pricing


  return (
    <div className="relative w-full h-full">
      <div className="absolute hidden w-full bg-gray-50 lg:block h-96" />
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern id="svg-pattern" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect fill="url(#svg-pattern)" width="52" height="24" />
              </svg>
              <span className="relative">{Heading}</span>
            </span>{' '}
            
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            {SubText}
          </p>
        </div>
        <div className="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
          {Plans.map((plan)=>{
            return <PircingTab key={plan.id} plan={plan}/>
          })}
         </div>
      </div>
    </div>
  );
};


const PircingTab = ({plan}) => {
  const { Features,Name,Price } = plan
  return (
    <div>
      <div className="p-8 bg-gray-900 rounded">
        <div className="mb-4 text-center">
          <p className="text-xl font-medium tracking-wide text-white">{Name}</p>
          <div className="flex items-center justify-center">
            <p className="mr-2 text-5xl font-semibold text-white lg:text-6xl">$ {Price}</p>
            <p className="text-lg text-gray-500">/ month</p>
          </div>
        </div>
        <ul className="mb-8 space-y-2">
          {Features.map((feature)=>{
            return (
              <li key={feature.id} className="flex items-center">
              <div className="mr-3">
                <svg
                  className="w-4 h-4 text-teal-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeWidth="2"
                >
                  <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
                  <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
                </svg>
              </div>
              <p className="font-medium text-gray-300">{feature.Feature}</p>
            </li>
            )
          })}
         
        </ul>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Get Now
        </button>
      </div>
      <div className="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
      <div className="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
      <div className="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
    </div>
  )
}

export default Pricing;