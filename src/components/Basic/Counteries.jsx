import React, { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import Animate from "src/components/Basic/Animate";
import { baseUrl } from "src/helpers";


let qs = constructQueryString(["flag"]);

function Countries() {
	const language = useSelector((state) => state.language);

	const [data, setData] = useState([]);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `countries?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data?.data) return;
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
				{data.data.map((item, index) => {
					return (
						<Animate
							config={{
								animateIn: "bounceInUp",
                delay: index / 10,
							}}
						>
							<div className="transition-transform transform hover:scale-105">
								<img className="h-auto max-w-full rounded-lg" src={baseUrl() + item.flag.url} alt="" />
								<center className="p-2">{item.name}</center>
							</div>
						</Animate>
					);
				})}
			</div>
		</div>
	);
}

export default Countries;
