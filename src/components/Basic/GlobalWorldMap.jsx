import WorldMap from "react-svg-worldmap";
import React, { useEffect, useState } from "react";
import { PageSkeleton } from "src/components/small/Skeletons";
import useAxios from "src/Hooks/UseAxios";
import { useSelector } from "react-redux";
import { constructQueryString } from "src/helpers";
import { baseUrl } from "src/helpers";
import { useWindowDimensions } from "src/Hooks/HelperHooks";

import Animate from "src/components/Basic/Animate";
let qs = constructQueryString(["Map"]);
let qsc = constructQueryString([""]);

function GlobalWorldMap() {
	const [data, setData] = useState([]);
	const [countries, setCountries] = useState([]);
	const { height, width } = useWindowDimensions();
	
	// const [mapData, setMapData] = useState([]);

	const language = useSelector((state) => state.language);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `global-world-map?${qs}locale=${language.language}`,
	});
	const countriesData = useAxios({
		method: "get",
		url: `countries?${qsc}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	useEffect(() => {
		if (countriesData.response !== null) {
			let allCountries = countriesData.response.data;
			let mapData = allCountries.reduce((acc, current) => {
				if (current.IsoCode) {
					acc.push({
						country: current.IsoCode.split(":")[0],
						value: current.CallCenters ? current.CallCenters : 0,
						name: current.name,
						color:current.Color
					});
				}
				return acc;
			}, []);
			setCountries(mapData);
		}
	}, [countriesData.response]);
	if (loading) return <PageSkeleton />;
	if (countriesData.loading) return <PageSkeleton />;

	if (!data.data) return;
	let mapData = data.data.Map;
	const data2 = [
		{ country: "AT", value: 24, color: "red" },
		{ country: "US", value: 50, color: "green" },
		{ country: "CN", value: 20, color: "blue" },
		// { country: "id", value: 264935824 },
		// { country: "pk", value: 210797836 },
		// { country: "br", value: 210301591 },
		// { country: "ng", value: 208679114 },
		// { country: "bd", value: 161062905 },
		// { country: "ru", value: 141944641 },
		// { country: "mx", value: 127318112 },
	];
	console.log(countries, "countries");
	let size = width < 1064 ? 'responsive' : "xxl"
	return (
		<>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
					<p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">{mapData.Heading}</p>
					<p className="text-base text-gray-700 md:text-lg">{mapData.SubHeading}</p>
				</div>
				<div className="">
					<Animate
						config={{
							animateIn: "bounceInUp",
						}}
					>
						<WorldMap
							color={mapData.Color}
							// title="Top 10 Populous Countries"
							valueSuffix="Call Centers"
							size="xxl"
							data={countries}
							style="marker"
							styleFunction={getStyleFunction(countries)}
							richInteraction
							// frame
						/>
					</Animate>
				</div>
			</div>
		</>
	);
}


const getStyleFunction = (countries) => {

	const getFillColor = (countryCode) => {
		let country = countries.find(c => c.country.toUpperCase() == countryCode.toUpperCase())
		if(country) {
			return country.color
		}
		return false
	}
	const getStyle = (data) => {
		// allC.push(countryCode)
		// console.log(allC)
		
		let fillColor = getFillColor(data.countryCode)
		// if(data.countryValue){ 
		// 	console.log(fillColor,"fillColor")
		// }
		return {
			fill: fillColor ? fillColor : data.color,
			fillOpacity: data.countryValue ? 1 : .2,
			// fillOpacity: data.countryValue ? 0.6 + (1.5 * (data.countryValue - data.minValue)) / (data.maxValue - data.minValue) : .2,

			stroke: "grey",
			strokeWidth: 1,
			strokeOpacity: 9,
			cursor: "pointer",
		};
	};
	return getStyle
}

export default GlobalWorldMap;
