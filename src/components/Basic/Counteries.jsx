import React, { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import Animate from "src/components/Basic/Animate";
import { baseUrl } from "src/helpers";
// line for flags section
import france from "src/assets/flags/france.png";
import { explodeArray } from "src/helpers";
// available traffic for this country

let qs = constructQueryString(["flag"]);

function Countries() {
	const language = useSelector((state) => state.language);

	const [data, setData] = useState([]);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `countries?${qs}locale=${language.language}&sort[0]=name:asc`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data?.data) return;
	let allCountries = explodeArray(data?.data, 11);

	return (
		<div id="full-width-megamenu" aria-labelledby="full-width-megamenu" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid grid-cols-2  lg:grid-cols-6 justify-between ">
				{allCountries.map((countries, index) => {
					return (
						<Animate
								config={{
									animateIn: "bounceInUp",
									delay: index / 10,
								}}
							>
						<ul key={index} className="text-sm text-gray-700  " aria-labelledby="dropdownLargeButton">
							{countries.map((country, index) => {
								return (
									<li className=" ">
										<a href="" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
											<div className="bg-orange-50 rounded-lg  flex items-center justify-center">
												<img src={baseUrl() + country.flag.url} style={{ float: "left", height: "20px", marginRight: "7px" }} />
											</div>
											<div className="ml-4 w-4/5">
												<p className="text-xs font-medium text-gray-900"> {country.CountryCode} {country.name}</p>
											</div>
										</a>
									</li>
								);
							})}
						</ul>
						</Animate>
					);
				})}
			</div>
		</div>
	);
}

export default Countries;
