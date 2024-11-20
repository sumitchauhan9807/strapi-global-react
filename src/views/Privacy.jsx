import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";

import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { GlobalData } from "src/context";
import { useContext } from "react";

import { Link } from "react-router-dom";
let qs = constructQueryString([]);

function Privacy() {
	const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const globalData = useContext(GlobalData);

	console.log(globalData, "globalData");
	const { response, loading, error } = useAxios({
		method: "get",
		url: `privacy-policy?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data.data) return;
	return <div dangerouslySetInnerHTML={{ __html: data.data.description }}></div>;
}
export default Privacy;
