
import WorldMap from "react-svg-worldmap";
import React, { useEffect, useState } from "react";
import { PageSkeleton } from "src/components/small/Skeletons";
import useAxios from "src/Hooks/UseAxios";
import { useSelector } from "react-redux";
import { constructQueryString } from "src/helpers";
import { baseUrl } from "src/helpers";
import Animate from "src/components/Basic/Animate";
let qs = constructQueryString(["Map"]);

function GlobalWorldMap() {
	const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `global-world-map?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data.data) return;
	let mapData = data.data.Map
	const data2 = [
		{ country: "cn", value: 1389618778 },
		{ country: "in", value: 1311559204 },
		{ country: "us", value: 331883986 },
		{ country: "id", value: 264935824 },
		{ country: "pk", value: 210797836 },
		{ country: "br", value: 210301591 },
		{ country: "ng", value: 208679114 },
		{ country: "bd", value: 161062905 },
		{ country: "ru", value: 141944641 },
		{ country: "mx", value: 127318112 },
	];

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
							value-suffix="people"
							size="xxl"
							data={mapData.MapData}
							style="marker"
						/>
					</Animate>
				</div>
			</div>
		</>
	);
}

export default GlobalWorldMap;
