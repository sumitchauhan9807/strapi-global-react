import React, { useEffect, useState ,useContext } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import Animate from "src/components/Basic/Animate";
import { baseUrl } from "src/helpers";
// line for flags section
import france from "src/assets/flags/france.png";
import { explodeArray } from "src/helpers";
import { GlobalData } from "src/context";

let qs = constructQueryString(["flag"]);

const filterCountries = (countries, searchText) => {
	if (!searchText.length) return countries;
	let fiteredCountries = countries.map((country) => {
		if (country.name.includes(searchText)) {
			country.hidden = false;
		} else {
			country.hidden = true;
		}
		return country;
	});
	return fiteredCountries;
};

function Countries() {
	const language = useSelector((state) => state.language);
	const globalData = useContext(GlobalData);

	const [data, setData] = useState([]);
	const [searchText, setSearchText] = useState("");
	const { response, loading, error } = useAxios({
		method: "get",
		url: `countries?${qs}locale=${language.language}&sort[0]=name:asc`,
	});

	const clearFilter = () => {
		let fiteredCountries = data.map((country) => {
			country.hidden = false;
			return country;
		});
		setData(fiteredCountries);
		setSearchText("")
	}
	useEffect(() => {
		if (response !== null) {
			console.log(response.data);
			let toSetData = response.data.map((country) => {
				country.hidden = false;
				return country;
			});
			setData(toSetData);
		}
	}, [response]);
	useEffect(() => {
		console.log("effect ran");
		if (!searchText.length) {
			clearFilter()
			return;
		}
		let fiteredCountries = data.map((country) => {
			let trimmedText = searchText.trim().toLowerCase()
			let countryName = country.name.toLowerCase()
			let countryCode = country.CountryCode.trim()

			if (countryName.includes(trimmedText) || countryCode.includes(trimmedText) ) {
				country.hidden = false;
			} else {
				country.hidden = true;
			}
			return country;
		});
		setData(fiteredCountries);
	}, [searchText]);
	if (loading) return <PageSkeleton />;
	if (!data.length) return;
	let filteredCountries = data.filter((c) => !c.hidden);
	let allCountries = explodeArray(filteredCountries, 11);

	return (
		<div id="full-width-megamenu" aria-labelledby="full-width-megamenu" className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="relative mb-12">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
						<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
					</svg>
				</div>
				<input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for country" required />
				{/* <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Search
				</button> */}
			</div>
			{!allCountries.length && <NotFoundBox globalData={globalData} searchText={searchText} clearFilter={clearFilter}/> }

			<div style={{ minHeight: "500px" }} className="grid grid-cols-2  lg:grid-cols-6 justify-between ">
				{allCountries.map((countries, index) => {
					return (
						// <Animate
						// 	config={{
						// 		animateIn: "fadeIn",
						// 		delay: index / 10,
						// 	}}
						// >
						<ul key={index} className="text-sm text-gray-700 mb-8">
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
						//  </Animate>
					);
				})}
			</div>
		</div>
	);
}

const NotFoundBox = ({globalData,searchText,clearFilter}) => {
	return (
		<div className="flex justify-center items-center">
			<div className=" mx-auto">
				<div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
					<div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
						<img src={baseUrl() + globalData.LightLogo.url} alt="ui/ux review check" />
						<div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
						<button className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
							<span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
									<path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
								</svg>
							</span>
						</button>
					</div>
					<div className="p-6">
					
						<p className="block font-sans text-base antialiased font-light leading-relaxed text-gray-700">Sorry for the inconvenience but Global World does not provide its services in <b>{searchText}</b>.</p>
						
					</div>
					<div className="p-6 pt-3">
						<button onClick={clearFilter} className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
							Clear Filter
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

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
									<td className="px-6 py-4">
										{country.CountryCode} {country.name}
									</td>
									<td className="px-6 py-4">{country?.IsoCode?.split(":")[0]}</td>
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
