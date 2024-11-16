import React, { useEffect, useState } from "react";
import { PageSkeleton } from "src/components/small/Skeletons";
import useAxios from "src/Hooks/UseAxios";
import { useSelector } from "react-redux";
import { constructQueryString } from "src/helpers";
import { baseUrl } from "src/helpers";
import Animate from "src/components/Basic/Animate";

let qs = constructQueryString(["image"]);

function DialerProducts() {
	const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `products?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data.data) return;
	return (
		<>
			{data.data.map((list, index) => {
				if (index % 2 == 0) {
					return <RightImageSection data={list} />;
				}
				if (index % 2 != 0) {
					return <LeftImageSection data={list} />;
				}
			})}
		</>
	);
}

const RightImageSection = ({ data }) => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid gap-10 lg:grid-cols-2 items-center">
				<Animate
					config={{
						animateIn: "bounceInLeft",
					}}
				>
					<div className="lg:py-24">
						<h2 className="text-3xl font-bold sm:text-4xl">{data.name}</h2>
						<p className="mt-4 text-gray-600">{data.description}</p>
						<a href="#" className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
							Get Started Today
						</a>
					</div>
				</Animate>
				<Animate
					config={{
						animateIn: "bounceInRight",
					}}
				>
					<div className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
						<img alt="" src={baseUrl() + data.image.url} className=" inset-0  object-cover  shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300" />
					</div>
				</Animate>
			</div>
		</div>
	);
};

const LeftImageSection = ({ data }) => {
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid gap-10 lg:grid-cols-2 items-center">
				<Animate
					config={{
						animateIn: "bounceInLeft",
					}}
				>
					<div className="relative h-64 overflow-hidden rounded-lg sm:h-80  lg:h-full">
						<img alt="" src={baseUrl() + data.image.url} className=" inset-0  object-cover shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300" />
					</div>
				</Animate>
				<Animate
					config={{
						animateIn: "bounceInRight",
					}}
				>
					<div className="lg:py-24">
						<h2 className="text-3xl font-bold sm:text-4xl">{data.name}</h2>
						<p className="mt-4 text-gray-600">{data.description}</p>
						<a href="#" className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
							Get Started Today
						</a>
					</div>
				</Animate>
			</div>
		</div>
	);
};

export default DialerProducts;
