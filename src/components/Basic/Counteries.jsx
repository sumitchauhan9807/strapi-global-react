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
	// let allCountries = explodeArray(data?.data, 11);
	let allCountries = data?.data;
	return <CountriesTable allCountries={allCountries} />;
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
													<p className="text-xs font-medium text-gray-900">
														{" "}
														{country.CountryCode} {country.name}
													</p>
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

const CountriesTable = ({ allCountries }) => {
	console.log(allCountries, "allCountries");
	return (
		<div id="full-width-megamenu" aria-labelledby="full-width-megamenu" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
				<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3">
								Flag
							</th>
							<th scope="col" className="px-6 py-3">
								Country
							</th>
							<th scope="col" className="px-6 py-3">
								ISO Code
							</th>
						</tr>
					</thead>
					<tbody>
						{allCountries.map((country, index) => {
							return (
								<tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
									<th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
										<img className="w-10 h-10 rounded-full" src={baseUrl() + country.flag.url} alt="Jese image" />
										{/* <div className="ps-3">
											<div className="text-base font-semibold">Neil Sims</div>
											<div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
										</div> */}
									</th>
									<td className="px-6 py-4">{country.CountryCode} {country.name}</td>
									<td className="px-6 py-4">
									{country?.IsoCode?.split(":")[0]}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Countries;
