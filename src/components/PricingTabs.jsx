import React, { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import Animate from "src/components/Basic/Animate";
import { baseUrl } from "src/helpers";

let qs = constructQueryString(["Pricing", "Pricing.Plans", "Pricing.Plans.Features", "Pricing.Plans.MissingFeatures","TopImage"]);
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
//https://cdn.sanity.io/images/yk5gp8um/prod/2bfdb6e79211d931344d574cf773b94dd4690b20-3600x2160.jpg?w=1280&h=720&auto=format
	return (
		<>
			<div>
				<div className="min-h-full bg-gray-50 pb-12">
					<div style={{backgroundImage:`url(${
                baseUrl() + data?.data.TopImage.url
            })`,backgroundPosition:"center"}} className="w-full bg-blue-900 pt-16 pb-24 text-center">
						<h4 className="text-2xl text-gray-100"> {pricingData.Heading}</h4>
						<p className="text-sm text-gray-100 mt-2">{pricingData.SubText}</p>
					</div>
					<Animate
						config={{
							animateIn: "bounceInUp",
						}}
					>
						<div className="w-full 2xl:w-3/4 flex items-center justify-center px-8 md:px-32 lg:px-16 2xl:px-0 mx-auto -mt-8">
							<div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
								{pricingData.Plans.map((pricing, index) => {
									// index = index +1
									return (
										<div key={index}>
											<PricingTab pricing={pricing} />
										</div>
									);
								})}
							</div>
						</div>
					</Animate>
				</div>
			</div>
		</>
	);
};

let PricingTab = ({ pricing }) => {
	return (
		<div className="bg-white shadow-2xl rounded-lg py-4">
			<p className="text-xl text-center font-bold ">{pricing.Name}</p>
			<p className="text-center py-8">
				<span className="text-4xl font-bold text-gray-700">
					{pricing.Currency}
					<span x-text="basicPrice">{pricing.Price}</span>
				</span>
				<span className="text-xs uppercase text-gray-500">
					/ <span x-text="billingType">month</span>
				</span>
			</p>
			<ul className="border-t border-gray-300 py-8 space-y-6">
				{pricing.Features.map((feature, index) => {
					return (
						<li key={index} className="flex items-center space-x-2 px-8">
							<span className="bg-blue-600 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
							</span>
							<span className="text-gray-600 capitalize">{feature.text}</span>
						</li>
					);
				})}
				{pricing.MissingFeatures.map((feature, index) => {
					return (
						<li key={index} className="flex items-center space-x-2 px-8">
							<span className="bg-gray-300 rounded-full p-1">
								<svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
								</svg>
							</span>
							<span className="text-gray-400 capitalize">{feature.text}</span>
						</li>
					);
				})}
			</ul>
			<div className="flex items-center justify-center mt-6">
				<a href="#" className="bg-gray-600 hover:bg-gray-500 px-8 py-2 text-sm text-gray-200 uppercase rounded font-bold transition duration-150" title="Purchase">
					Purchase
				</a>
			</div>
		</div>
	);
};

export default PricingPage;
