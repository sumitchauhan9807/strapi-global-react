import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";

import { useWindowDimensions } from "src/Hooks/HelperHooks";
import { useTranslation } from 'react-i18next';

import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { GlobalData } from "src/context";
import { useContext } from "react";
import { SocialMedia } from "src/components/Header/SocialMedia.jsx";
import  Link  from "src/components/Basic/Link";
let qs = constructQueryString([
	"WorkingHours",
	//  "ContactUs",
	"MobileNumbers",
	"MobileNumbers.Number",
	// "Location1",
	// "Location2",
]);

export const Footer = () => {
	const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const globalData = useContext(GlobalData);
	const { height, width } = useWindowDimensions();
	// const { t } = useTranslation();
	// console.log(globalData, "globalData");
	const { response, loading, error } = useAxios({
		method: "get",
		// url: `footer?${qs}locale=${language.language}`,
		url: `footer?${qs}locale=${language.language}`,

	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data.data) return;

	let location1 = data.data.Location1?.replaceAll("\n", "<br/>");
	let location2 = data.data.Location2?.replaceAll("\n", "<br/>");
	let location3 = data.data.Location3?.replaceAll("\n", "<br/>");
	let location4 = data.data.Location4?.replaceAll("\n", "<br/>");
	let location5 = data.data.Location5?.replaceAll("\n", "<br/>");
	let location6 = data.data.Location6?.replaceAll("\n", "<br/>");
	let location7 = data.data.Location7?.replaceAll("\n", "<br/>");


	if (width < 1064) {
		location1 = location1?.replaceAll("<br/><br/>", "<br/>")
		location2 = location2?.replaceAll("<br/><br/>", "<br/>")
		location3 = location3?.replaceAll("<br/><br/>", "<br/>")
		location4 = location4?.replaceAll("<br/><br/>", "<br/>")
		location5 = location5?.replaceAll("<br/><br/>", "<br/>")
		location6 = location6?.replaceAll("<br/><br/>", "<br/>")
		location7 = location7?.replaceAll("<br/><br/>", "<br/>")

	}
	// console.log(location3)
	// let location1 = data.data.Location1
	// let location2 = data.data.Location2
	// let location3 = data.data.Location3
	// let location4 = data.data.Location4
	// let location5 = data.data.Location5

	//1064
	//<b class="font-medium tracking-wide text-gray-300">Headquarters</b>
	return (
		<div className="bg-gray-900 flex justify-center ite">
			<div className="pt-16 mx-auto max-w-screen-lg sm:max-w-xl md:max-w-full ">
				<div className="grid row-gap-10 mb-8 lg:grid-cols-3 lg:px-6 px-0">
					<div className="grid lg:grid-cols-5 grid-cols-1  lg:gap-20  row-gap-8 lg:col-span-3 md:grid-cols-4 px-4">
						<div className="">
							<p className="font-medium tracking-wide text-gray-300">{globalData.translations.WorkingHours}</p>
							<ul className="mt-2 space-y-2">
								{data.data.WorkingHours.map((item) => {
									return (
										<>
											<li>
												<a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
													{item.Heading}
												</a>
											</li>
											<li>
												<a className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-200">
													{item.SubHeading}
												</a>
											</li>
										</>
									);
								})}
							</ul>
						</div>
						{width < 1064 && <br />}
						{/* <div>
							<p className="font-medium tracking-wide text-gray-300">{globalData.translations.ContactUs}</p>
							<ul className="mt-2 space-y-2">
								{data.data.MobileNumbers?.Number.map((item) => {
									let spacing = item.LeftSpacing.split("s")[1];
									return (
										<li>
											<a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200">
												{item.Place}:
												{Array(Number(spacing))
													.fill("x")
													.map(() => {
														return <>&nbsp;</>;
													})}
												{item.Number}
											</a>
										</li>
									);
								})}
							</ul>
						</div> */}
						{width < 1064 && <br />}

						<div>
							<p className="font-medium tracking-wide text-gray-300">{globalData.translations.Headquaters}</p>
							<ul className="mt-2 space-y-2">
								<li>
									<a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200" dangerouslySetInnerHTML={{ __html: location1 }}></a>
								</li>
								<li>
									<a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200" dangerouslySetInnerHTML={{ __html: location2 }}></a>
								</li>
							</ul>
						</div>
						<div>
							{/* <p className="font-medium tracking-wide text-gray-300">Location</p> */}
							<ul className="mt-2 space-y-2">
								<li>
									<a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200" dangerouslySetInnerHTML={{ __html: location3 }}></a>
								</li>
								<li>
									<a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200" dangerouslySetInnerHTML={{ __html: location4 }}></a>
								</li>
							</ul>
						</div>
						<div>
							{/* <p className="font-medium tracking-wide text-gray-300">Location</p> */}
							<ul className="mt-2 space-y-2">
								<li>
									<a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200" dangerouslySetInnerHTML={{ __html: location5 }}></a>
								</li>
								<li>
									<a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200" dangerouslySetInnerHTML={{ __html: location6 }}></a>
								</li>
							</ul>
						</div>
						<div>
							{/* <p className="font-medium tracking-wide text-gray-300">Location</p> */}
							<ul className="mt-2 space-y-2">
								<li>
									<a className="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-200" dangerouslySetInnerHTML={{ __html: location7 }}></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<center>

				</center>
				<center>
					<div className="flex flex-col lg:justify-between justify-center items-center pt-5 pb-10 border-t border-gray-800 sm:flex-row py-3">
						<div className="flex flex-col lg:justify-between justify-center items-center pt-5 pb-10 yborder-gray-800 sm:flex-row">
							<p className="text-sm text-gray-500">
							<Link className="" to="/terms">{globalData.translations.Terms}</Link> |
								<Link className="ml-2 " to="/privacy">{globalData.translations.PrivacyPolicy}</Link> |
								{/* <Link className="ml-2" to="/imprint">Imprint</Link> | */}
								<Link className="ml-2" to="/impressum">{globalData.translations.LegalNotice}</Link> |
								<Link className="ml-2" to="/datenschutz">{globalData.translations.DataProtection}</Link>
							</p>
						</div>
						<div><p className="text-sm text-gray-500">
						{globalData.translations.CopyRight}
						</p></div> 
						<SocialMedia />
					</div>
				</center>
			</div>
		</div>
	);
};
export default Footer;
