import { Nav as Navbar } from "../components/Navbar.jsx"; // Named import
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import HeroBanner from "../components/HeroBanner.jsx";

import SectionTwo from "src/components/SectionTwo.jsx";
import SectionThree from "src/components/SectionThree.jsx";
import SectionFour from "src/components/SectionFour.jsx";
import GlobalWorldMap from "src/components/Basic/GlobalWorldMap";
import Pricing from "src/components/PricingTable.jsx";
import SectionFive from "src/components/SectionFive.jsx";
import { PageSkeleton } from "src/components/small/Skeletons";

import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
let qs = constructQueryString(["Hero", "Hero.HeroText", "Hero.Image", "HomeSection1", "HomeSection1.Images", "HomeSection1.Lists","Map"]);

function Home() {
	const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `home?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data.data) return;
	return (
		<>
			<div>
				<div className="">
					{/* header section starts here */}
					<HeroBanner data={data.data.Hero} />
          <GlobalWorldMap data ={data.data.Map}/>

					{/* header section ends here */}
					{/* SectionFour */}
					<SectionFour data={data?.data?.HomeSection1} />
					{/* SectionFour */}
					{/* other section  */}
					<SectionTwo />
					{/* other section  */}

					<SectionFive />
					<Pricing />
					{/* Sectionthree */}
					<SectionThree />
				</div>
			</div>
		</>
	);
}

export default Home;
