import Partners from "src/components/Partners";
import React, { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import Animate from "src/components/Basic/Animate";
import { baseUrl } from "src/helpers";
import GlobalWorldMap from "src/components/Basic/GlobalWorldMap";
import Countries from 'src/components/Basic/Counteries'
import Carousel from 'src/components/Carousel'
let qs = constructQueryString(["TopImage"]);


function CountriesPage() {
	const language = useSelector((state) => state.language);

	const [data, setData] = useState([]);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `countries-page?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data?.data) return;
	return (
		<>
    <section className="flex relative items-center w-full h-[400px] overflow-hidden border">
				<img className="absolute w-full" src={baseUrl()+data.data.TopImage.url} alt="" />
			</section>
      <GlobalWorldMap/>
			<Countries />
      {/* <Team/> */}
		</>
	);
}
export default CountriesPage;
