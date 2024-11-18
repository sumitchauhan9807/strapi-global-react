import React, { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";

let qs = constructQueryString(["Pricing", "Pricing.Plans", "Pricing.Plans.Features"]);
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
	if (loading) return <PageSkeleton />;
	if (!data?.data?.Pricing) return;
	let pricingData = data?.data?.Pricing;
	console.log(pricingData);
	return <PricingTabs pricingData={pricingData} />;
	return (
		<div class="relative w-full h-full">
			<div class="absolute hidden w-full bg-gray-50 lg:block h-96" />
			<div class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 py-10">
						<h2 className="max-w-lg mb-6 font-sans text-2xl font-semi-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">{pricingData.Heading}</h2>
						<p className="text-base text-gray-700 md:text-lg">T{pricingData.SubText}</p>
					</div>
				</div>
				<div class="grid max-w-screen-md gap-10 md:grid-cols-2 sm:mx-auto">
					{pricingData.Plans.map((pricing, index) => {
						return (
							<div>
								<div class="p-8 bg-gray-900 rounded">
									<div class="mb-4 text-center">
										<p class="text-xl font-medium tracking-wide text-white">{pricing.Name}</p>
										<div class="flex items-center justify-center">
											<p class="mr-2 text-5xl font-semibold text-white lg:text-6xl">
												{pricing.Currency} {pricing.Price}
											</p>
											{/* <p class="text-lg text-gray-500">/ month</p> */}
										</div>
									</div>
									<ul class="mb-8 space-y-2">
										{pricing.Features.map((feature, index) => {
											return (
												<li class="flex items-center">
													<div class="mr-3">
														<svg class="w-4 h-4 text-teal-accent-400" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2">
															<polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
															<circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
														</svg>
													</div>
													<p class="font-medium text-gray-300">{feature.text}</p>
												</li>
											);
										})}
									</ul>
									<button type="submit" class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
										Get Now
									</button>
								</div>
								<div class="w-11/12 h-2 mx-auto bg-gray-900 rounded-b opacity-75" />
								<div class="w-10/12 h-2 mx-auto bg-gray-900 rounded-b opacity-50" />
								<div class="w-9/12 h-2 mx-auto bg-gray-900 rounded-b opacity-25" />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

const PricingTabs = ({ pricingData }) => {
	return (
		<>
			<div>
				<div className="min-h-full bg-gray-200 pb-12">
					<div className="w-full bg-blue-900 pt-16 pb-24 text-center">
						<h4 className="text-2xl text-gray-100"> {pricingData.Heading}</h4>
						<p className="text-sm text-gray-100 mt-2">{pricingData.SubText}</p>
					</div>
					<div className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
						<div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
							{pricingData.Plans.map((pricing, index) => {
								return (
									<div className="bg-white shadow-2xl rounded-lg py-4">
										<p className="text-xl text-center font-bold ">{pricing.Name}</p>
										<p className="text-center py-8">
											<span className="text-4xl font-bold text-gray-700">
                      {pricing.Currency}<span x-text="basicPrice">19</span>
											</span>
											<span className="text-xs uppercase text-gray-500">
												/ <span x-text="billingType">month</span>
											</span>
										</p>
										<ul className="border-t border-gray-300 py-8 space-y-6">
											<li className="flex items-center space-x-2 px-8">
												<span className="bg-blue-600 rounded-full p-1">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
												</span>
												<span className="text-gray-600 capitalize">Free Setup Guidance</span>
											</li>
											<li className="flex items-center space-x-2 px-8">
												<span className="bg-blue-600 rounded-full p-1">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
												</span>
												<span className="text-gray-600 capitalize">Email Support</span>
											</li>
											<li className="flex items-center space-x-2 px-8">
												<span className="bg-blue-600 rounded-full p-1">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
												</span>
												<span className="text-gray-600 capitalize">User Management</span>
											</li>
											<li className="flex items-center space-x-2 px-8">
												<span className="bg-blue-600 rounded-full p-1">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
												</span>
												<span className="text-gray-600 capitalize">Reports</span>
											</li>
											<li className="flex items-center space-x-2 px-8">
												<span className="bg-gray-300 rounded-full p-1">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
												</span>
												<span className="text-gray-400 capitalize">Unlimited Users</span>
											</li>
											<li className="flex items-center space-x-2 px-8">
												<span className="bg-gray-300 rounded-full p-1">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
												</span>
												<span className="text-gray-400 capitalize">Data Export</span>
											</li>
											<li className="flex items-center space-x-2 px-8">
												<span className="bg-gray-300 rounded-full p-1">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
												</span>
												<span className="text-gray-400 capitalize">Automated Workflows</span>
											</li>
											<li className="flex items-center space-x-2 px-8">
												<span className="bg-gray-300 rounded-full p-1">
													<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
														<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
													</svg>
												</span>
												<span className="text-gray-400 capitalize">API Access</span>
											</li>
										</ul>
										<div className="flex items-center justify-center mt-6">
											<a href="#" className="bg-gray-600 hover:bg-gray-500 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Purchase">
												Purchase
											</a>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default PricingPage;
