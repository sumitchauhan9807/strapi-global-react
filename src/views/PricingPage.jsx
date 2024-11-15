import React, { useEffect, useState } from 'react';
import useAxios from 'src/Hooks/UseAxios'
import { constructQueryString } from 'src/helpers'
import {useSelector} from 'react-redux'
import { PageSkeleton } from 'src/components/small/Skeletons'

let qs = constructQueryString([
  "Pricing",
  "Pricing.Plans",
  "Pricing.Plans.Features"
]);
export const PricingPage = () => {
  const language = useSelector((state) => state.language);

  const [data, setData] = useState([]);
  const { response, loading, error } = useAxios({
    method: "get",
    url: `pricing-page?${qs}locale=${language.language}`,
  });
  useEffect(() => {
    if (response !== null) {
      setData(response);
    }
  }, [response]);
  if (loading) return <PageSkeleton />
  if(!data?.data?.Pricing) return
  let pricingData = data?.data?.Pricing
  return (
    <div class="relative w-full h-full">
      <div class="absolute hidden w-full bg-gray-50 lg:block h-96" />
      <div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-10">

            <h2 className="max-w-lg mb-6 font-sans text-2xl font-semi-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              {pricingData.Heading}
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              T{pricingData.SubText}

            </p>
          </div>
        </div>
        <div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
         {pricingData.Plans.map((pricing,index)=>{
            return (
              <div>
              <div class="p-8 bg-gray-900 rounded">
                <div class="mb-4 text-center">
                  <p class="text-xl font-medium tracking-wide text-white">
                    {pricing.Name}
                  </p>
                  <div class="flex items-center justify-center">
                    <p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
                      $ {pricing.Price}
                    </p>
                    <p class="text-lg text-gray-500">/ month</p>
                  </div>
                </div>
                <ul class="mb-8 space-y-2">
                  {pricing.Features.map((feature,index)=>{
                    return (
                      <li class="flex items-center">
                        <div class="mr-3">
                          <svg
                            class="w-4 h-4 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeWidth="2"
                          >
                            <polyline
                              fill="none"
                              stroke="currentColor"
                              points="6,12 10,16 18,8"
                            />
                            <circle
                              cx="12"
                              cy="12"
                              fill="none"
                              r="11"
                              stroke="currentColor"
                            />
                          </svg>
                        </div>
                        <p class="font-medium text-gray-300">{feature.Feature}</p>
                      </li>
                    )
                  })}
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-gray-300">10 GB of storage</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-gray-300">3 domains</p>
                  </li>
                  <li class="flex items-center">
                    <div class="mr-3">
                      <svg
                        class="w-4 h-4 text-teal-accent-400"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeWidth="2"
                      >
                        <polyline
                          fill="none"
                          stroke="currentColor"
                          points="6,12 10,16 18,8"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          fill="none"
                          r="11"
                          stroke="currentColor"
                        />
                      </svg>
                    </div>
                    <p class="font-medium text-gray-300">SSL Certificates</p>
                  </li>
                </ul>
                <button
                  type="submit"
                  class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Get Now
                </button>
              </div>
              <div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
              <div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
              <div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
            </div>
            )
         })}
        </div>
      </div>
    </div>
  );
};
export default PricingPage;