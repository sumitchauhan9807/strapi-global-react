import React, { useEffect, useState } from "react";
import { PageSkeleton } from "src/components/small/Skeletons";
import useAxios from "src/Hooks/UseAxios";
import { useSelector } from "react-redux";
import { constructQueryString } from "src/helpers";
import { baseUrl } from "src/helpers";
import Animate from "src/components/Basic/Animate";

let qs = constructQueryString(["logo"]);
function Partners({Heading}) {
	const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `partners?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data.data) return;
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
			<div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4  font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            {Heading}
          </p>
        </div>
				<div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
					{data.data.map((partner, index) => {
						return (
							<Animate
								config={{
									animateIn: "bounceInUp",
									delay: index / 10,
								}}
							>
								<a href={partner.link} target="_blank" style={{height:"120px"}} key={index}  className="flex justify-center items-center shadow-md hover:shadow-lg transition-transform transform hover:scale-105 duration-300">
									<img src={baseUrl() + partner.logo.url} />
								</a>
							</Animate>
						);
					})}
				</div>
			</div>
		</section>
	);
}

export default Partners;
