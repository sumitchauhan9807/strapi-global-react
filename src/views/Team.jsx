import Team from 'src/components/Team'
import React, { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import { baseUrl } from "src/helpers";
import {useLanguageInQuery} from 'src/Hooks/HelperHooks'

let qs = constructQueryString(["TopImage"]);


function OurTeam() {
	useLanguageInQuery()
	const language = useSelector((state) => state.language);

	const [data, setData] = useState([]);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `team-page?${qs}locale=${language.language}`,
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
			<Team pageData={data.data}/>
		</>
	);
}
export default OurTeam;
