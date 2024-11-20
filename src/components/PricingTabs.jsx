import React, { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import Animate from "src/components/Basic/Animate";
import { baseUrl } from "src/helpers";

let qs = constructQueryString(["Pricing", "Pricing.Plans", "Pricing.Plans.Features", "Pricing.Plans.MissingFeatures", "TopImage"]);
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
					<div style={{
						backgroundImage: `url(${baseUrl() + data?.data.TopImage.url
							})`, backgroundPosition: "center"
					}} className="w-full bg-blue-900 pt-16 pb-24 text-center">
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
		<div className="bg-white text-gray-600 shadow-2xl rounded-lg py-4 transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700 hover:text-white hover:text-white">
			<p className="text-xl text-center font-bold">{pricing.Name}</p>
			<p className="text-center py-8">
				<span className="text-4xl font-bold">
					{pricing.Currency}
					<span>{pricing.Price}</span>
				</span>
				<span className="text-xs uppercase">/ month</span>
			</p>
			<ul className="border-t border-gray-300 py-8 space-y-6">
				{pricing.Features.map((feature, index) => (
					<li key={index} className="flex items-center space-x-2 px-8">
						<span className="rounded-full p-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
							</svg>

						</span>
						<span>{feature.text}</span>
					</li>
				))}
				{pricing.MissingFeatures.map((feature, index) => (
					<li key={index} className="flex items-center space-x-2 px-8 line-through gray-300">
						<span className="rounded-full p-1">
							<svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
								<path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
							</svg>

						</span>
						<span>{feature.text}</span>
					</li>
				))}
			</ul>

		</div>
	);
};



export default PricingPage;
