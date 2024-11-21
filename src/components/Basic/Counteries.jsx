import React, { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import Animate from "src/components/Basic/Animate";
import { baseUrl } from "src/helpers";
// line for flags section

// available traffic for this country

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
	return <Compo data={data?.data} />;

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
								<img style={{ height: "50px" }} className="h-auto max-w-full rounded-lg" src={baseUrl() + item.flag.url} alt="" />
								<center className="p-2">{item.name}</center>
							</div>
						</Animate>
					);
				})}
			</div>
		</div>
	);
}

const Compo = ({ data }) => {
	return (
		<div>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<table className="w-full text-left table-auto min-w-max">
					<thead>
						<tr className="border-b border-slate-300 bg-slate-50">
							<th className="p-4 text-xl font-normal leading-none text-slate-500">Flag</th>
							<th className="p-4 text-xl font-normal leading-none text-slate-500">Name</th>
							<th className="p-4 text-xl font-normal leading-none text-slate-500">Call Centers</th>
							{/* <th className="p-4 text-sm font-normal leading-none text-slate-500">Price per Item</th>
							<th className="p-4 text-sm font-normal leading-none text-slate-500">Total Price</th>
							<th className="p-4 text-sm font-normal leading-none text-slate-500" /> */}
						</tr>
					</thead>
					<tbody>
						{data.map((item) => {
							return (
								<tr className="hover:bg-slate-50">
									<td className="p-4 border-b border-slate-200 py-5">
										<img src={baseUrl() + item.flag.url} alt="Product 1" className="w-16 h-16 object-cover rounded" />
									</td>
									<td className="p-4 border-b border-slate-200 py-5">
										<p className="block font-semibold text-sm text-slate-800">{item.name}</p>
									</td>
									<td className="p-4 border-b border-slate-200 py-5">
										<p className="font-semibold text-sm text-slate-800">{item.CallCenters ? item.CallCenters : "-" }</p>
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
