import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import {useLanguageInQuery} from 'src/Hooks/HelperHooks'



import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { GlobalData } from "src/context";
import { useContext } from "react";

import { Link } from "react-router-dom";
let qs = constructQueryString([
	
]);

const Impressum = () => {
	useLanguageInQuery()
  const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const globalData = useContext(GlobalData);


	console.log(globalData, "globalData");
	const { response, loading, error } = useAxios({
		method: "get",
		url: `impressum?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data.data) return;
	return (
		<div className=" min-h-screen p-6">
			<div className="max-w-5xl mx-auto  shadow-2xl rounded-xl border-0 border-gray-600 p-8" dangerouslySetInnerHTML={{__html: data.data.description}}></div>
		</div>
	);
};

export default Impressum;
