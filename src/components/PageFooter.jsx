import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { PageSkeleton } from 'src/components/small/Skeletons'

import useAxios from 'src/Hooks/UseAxios'
import { constructQueryString } from 'src/helpers'
let qs = constructQueryString([
  "WorkingHours",
//  "ContactUs",
 "MobileNumbers",
 "MobileNumbers.Number"
  // "Location1",
  // "Location2",
]);

// Mobiles :     +94 1722772888
// Office:          +49 21188233700
// Fax:               +49 21188233700
// Office:          +43 720 111 313
// Fax (AT):       +15 055393445
// Office (AT): +43 720 111 313
export const Footer = () => {
  const [data, setData] = useState([]);
  const language = useSelector((state) => state.language);
  const { response, loading, error } = useAxios({
    method: "get",
    url: `footer?${qs}locale=${language.language}`,
  });
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
  if (loading) return <PageSkeleton />
  if (!data.data) return

  let location1 = data.data.Location1.replaceAll("\n","<br/>")
  let location2 = data.data.Location2.replaceAll("\n","<br/>")
  let location3 = data.data.Location3.replaceAll("\n","<br/>")
  let location4 = data.data.Location4.replaceAll("\n","<br/>")

 
  

  return (
    <div className="bg-gray-900 flex justify-center">
  <div className="px-4 pt-16 mx-auto max-w-screen-lg sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8">
    <div className="grid row-gap-10 mb-8 lg:grid-cols-4">
      <div className="grid grid-cols-4 gap-5 row-gap-8 lg:col-span-3 md:grid-cols-4">
        <div>
          <p className="font-medium tracking-wide text-gray-300">
            Working Hours
          </p>
          <ul className="mt-2 space-y-2">
            {data.data.WorkingHours.map((item)=>{
              return (<>
                <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                {item.Heading}
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-200">
                {item.SubHeading}

                </a>
              </li>
              </>)
            })}
            
          </ul>
        </div>

        <div>
          <p className="font-medium tracking-wide text-gray-300">Contact Us</p>
          <ul className="mt-2 space-y-2">
            {data.data.MobileNumbers.Number.map((item)=>{
              let spacing = item.LeftSpacing.split("s")[1]
             return (
              <li>
                <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
                {item.Place}:
                {Array(Number(spacing)).fill("x").map(()=>{
                  return <>&nbsp;</>
                })}
                {item.Number}
                </a>
              </li>
             )
            })}
          </ul>
        </div>

        <div>
          <p className="font-medium tracking-wide text-gray-300">Location</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
              dangerouslySetInnerHTML={{__html: location1}}
              >
              
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
              dangerouslySetInnerHTML={{__html: location2}}
              
              >
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-medium tracking-wide text-gray-300">Location</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
              dangerouslySetInnerHTML={{__html: location3}}
              >
              
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200"
              dangerouslySetInnerHTML={{__html: location4}}
              
              >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
      <p className="text-sm text-gray-500">
        © Copyright 2024 GLOBAL WORLD IK LLC. All rights reserved.
      </p>
      <div className="flex items-center mt-4 space-x-4 sm:mt-0">
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6C22.5,6.4,23.3,5.5,24,4.6z" />
          </svg>
        </a>
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
          <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
            <circle cx="15" cy="15" r="4" />
            <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
          </svg>
        </a>
        <a href="/" className="text-gray-500 transition-colors duration-300 hover:text-teal-accent-400">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

  );
};
export default Footer;