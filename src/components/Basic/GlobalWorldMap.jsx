import * as React from "react";
import WorldMap from "react-svg-worldmap";

function GlobalWorldMap({data}) {
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
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-gray-50">
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
					<div>
						{/* <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gray-800 uppercase rounded-full bg-gray-300">Brand New</p> */}
					</div>
					<h2 className="max-w-lg mb-6 font-sans text-5xl font-sans leading-tight tracking-tight text-gray-900 sm:text-4xl md:mx-auto">{data.Heading}</h2>
					<p className="text-lg text-gray-700">{data.SubHeading}</p>
				</div>
				<div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

				<WorldMap
					color={data.Color}
					// title="Top 10 Populous Countries"
					value-suffix="people"
					size="xl"
					data={data.MapData}
          style="marker"
				/>
        </div>
			</div>
		</>
	);
}

export default GlobalWorldMap;
