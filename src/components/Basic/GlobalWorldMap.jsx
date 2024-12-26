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
						color: current.Color,
					});
				}
				return acc;
			}, []);
			setCountries(mapData);
		}
	}, [countriesData.response]);

	if (loading || countriesData.loading) return <PageSkeleton />;
	if (!data.data) return null;

	let mapData = data.data.Map;

	const mapSize = width < 768 ? "sm" : width < 1024 ? "md" : width < 1280 ? "lg" : "xxl";

	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
				<p className="inline-block px-3 py-px mb-4 text-xl font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">{mapData.Heading}</p>
				<p className="text-base text-gray-700 md:text-lg">{mapData.SubHeading}</p>
			</div>
			<div className="flex justify-center">
				<Animate
					config={{
						animateIn: "bounceInUp",
					}}
				>
					<WorldMap color={mapData.Color} valueSuffix="Call Centers" size={mapSize} data={countries} style="marker" styleFunction={getStyleFunction(countries)} richInteraction />
				</Animate>
			</div>
		</div>
	);
}

const getStyleFunction = (countries) => {
	const getFillColor = (countryCode) => {
		let country = countries.find((c) => c.country.toUpperCase() === countryCode.toUpperCase());
		return country ? country.color : false;
	};

	const getStyle = (data) => {
		let fillColor = getFillColor(data.countryCode);
		return {
			fill: fillColor || data.color,
			fillOpacity: data.countryValue ? 1 : 0.2,
			stroke: "grey",
			strokeWidth: 1,
			strokeOpacity: 0.9,
			cursor: "pointer",
		};
	};
	return getStyle;
};

export default GlobalWorldMap;
