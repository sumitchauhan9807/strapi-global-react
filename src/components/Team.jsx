import React, { useEffect, useState } from "react";
import { PageSkeleton } from "src/components/small/Skeletons";
import useAxios from "src/Hooks/UseAxios";
import { useSelector } from "react-redux";
import { constructQueryString } from "src/helpers";
import { baseUrl } from "src/helpers";
import Animate from "src/components/Basic/Animate";

let qs = constructQueryString(["image"]);

function Team() {
	const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `teams?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	console.log(data.data, "data.data");
	if (!data.data) return;
	return <NewTeam data={data.data}/>;
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
				<p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">Discover Our Team</p>
				<p className="text-base text-gray-700 md:text-lg">Global Dialer teams work hard for your goals</p>
			</div>
			<div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
				{data.data.map((item, index) => {
					return (
						<Animate
							config={{
								animateIn: "bounceInUp",
								delay: index / 10,
							}}
						>
							<div className="transition-transform transform hover:scale-105 duration-300">
								<div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
									<img className="absolute object-cover w-full h-full rounded" src={baseUrl() + item.image.url} alt="Person" />
								</div>
								<div className="flex flex-col sm:text-center">
									<p className="text-lg font-bold">{item.name}</p>
									<p className="mb-5 text-xs text-gray-800">{item.designation}</p>
									<div className="flex items-center space-x-3 sm:justify-center">
										<a href="#" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
											<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
												<path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
											</svg>
										</a>
										<a href="#" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
											<svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
												<path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
											</svg>
										</a>
									</div>
								</div>
							</div>
						</Animate>
					);
				})}
			</div>
		</div>
	);
}

function NewTeam(data) {
	return (
		<div className="w-full bg-gray-800">
			<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
				<div className="text-center pb-12">
				<p style={{color:"white"}} className="inline-block px-3 py-px mb-4  font-semibold tracking-wider  uppercase rounded-full ">Discover Our Team</p>
				<p style={{color:"white"}} className="text-base text-gray-700 md:text-lg ">Global Dialer teams work hard for your goals</p>
				</div>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
					{data.data.map((item, index) => {
						return (
							<div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
								<div className="w-full md:w-2/5 h-80">
									<img className="object-center object-cover w-full h-full" src={baseUrl() + item.image.url} alt="photo" />
								</div>
								<div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
									<p className="text-xl text-white font-bold">{item.name}</p>
									<p className="text-base text-gray-400 font-normal">{item.designation}</p>
									<p className="text-base leading-relaxed text-gray-500 font-normal">{item.description}</p>
									<div className="flex justify-start space-x-2">
										<a target="_blank" href={item.facebook} className="text-gray-500 hover:text-gray-600">
											<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
												<path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
											</svg>
										</a>
										<a target="_blank" href={item.instagram} className="text-gray-500 hover:text-gray-600">
											<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
												<path
													fillRule="evenodd"
													d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
													clipRule="evenodd"
												/>
											</svg>
										</a>
										<a target="_blank" href={item.twitter} className="text-gray-500 hover:text-gray-600">
											<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
												<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
											</svg>
										</a>
										<a target="_blank" href={item.github} className="text-gray-500 hover:text-gray-600">
											<svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
												<path
													fillRule="evenodd"
													d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
													clipRule="evenodd"
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}
export default Team;
