import { useState, useEffect, useRef } from "react";
import { productMenuItems, solutionsMenuItems, pricingMenuItems } from "../menuItems";
import LanguageSelect from "src/components/small/LanguageSelector";
import { Link } from "react-router-dom";
import Logo from "src/assets/logo.png";
import { useLocation } from "react-router-dom";
import { TbSettingsAutomation } from "react-icons/tb";
import { GlobalData } from "src/context";
import { useContext } from "react";
import { baseUrl } from "src/helpers";

const splitArray = (arr, indexToSplit) => {
	let first = arr.slice(0, indexToSplit);
	let second = arr.slice(indexToSplit + 1);
	return { first, second };
};

export const ProductMenuList = () => {
	return (
		<div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[690px] overflow-hidden z-20 p-8 rounded-2xl">
			{productMenuItems.map((item, index) => (
				<Link key={index} to={item.link} className="flex gap-4 text-white">
					<figure className="flex justify-center items-center p-3 bg-[#141b24] text-white rounded-md">{item.icon}</figure>
					<div className="flex flex-col text-[#e3e0e0]">
						<strong className="text-base">{item.title}</strong>
						<small className="text-sm">{item.description}</small>
					</div>
				</Link>
			))}
		</div>
	);
};

export const PricingMenuList = () => {
	return (
		<div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[700px] overflow-hidden z-20 p-8 rounded-2xl">
			{pricingMenuItems.map((item) => (
				<div className="flex gap-4 text-white">
					<figure className="flex justify-center items-center p-3 bg-[#141b24] text-white rounded-md">{item.icon}</figure>
					<div className="flex flex-col text-[#e3e0e0]">
						<strong className="text-base">{item.title}</strong>
						<small className="text-sm">{item.description}</small>
					</div>
				</div>
			))}
		</div>
	);
};

export const SolutionMenuList = () => {
	return (
		<div className="flex flex-col gap-8 absolute left-[-10rem] top-[90%] bg-[#24282e] w-[500px] h-[990px] overflow-hidden z-20 p-8 rounded-2xl">
			{solutionsMenuItems.map((item, index) => (
				<Link key={index} to={item.link} className="flex gap-4 text-white">
					<figure className="flex justify-center items-center p-3 bg-[#141b24] text-white rounded-md">{item.icon}</figure>
					<div className="flex flex-col text-[#e3e0e0]">
						<strong className="text-base">{item.title}</strong>
						<small className="text-sm">{item.description}</small>
					</div>
				</Link>
			))}
		</div>
	);
};

export const ProductMenuList2 = () => {
	let solutionItems = splitArray(productMenuItems, 3);
	return (
		<div id="mega-menu-full-dropdown" className=" absolute left-[-10rem] top-[90%] bg-[#24282e] w-[700px] overflow-hidden z-20 p-8 rounded-2xl ">
			<div className="grid max-w-screen-2xl px-2 py-2 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-2">
				<ul>
					{solutionItems.first.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.link} className="flex items-center p-1 rounded-lg hover:bg-gray-100 gap-2 dark:hover:bg-gray-700">
									<figure className="flex justify-center items-center w-16 h-16 bg-[#141b24] text-white rounded-md" style={{ minWidth: "4rem", minHeight: "4rem", flexShrink: 0 }}>
										{item.icon}
									</figure>
									<div className="flex-1">
										<p className="font-semibold text-sm">{item.title}</p>
										<span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
				<ul>
					{solutionItems.second.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.link} className="flex items-center p-1 rounded-lg hover:bg-gray-100 gap-2 dark:hover:bg-gray-700">
									<figure className="flex justify-center items-center w-16 h-16 bg-[#141b24] text-white rounded-md" style={{ minWidth: "4rem", minHeight: "4rem", flexShrink: 0 }}>
										{item.icon}
									</figure>
									<div>
										<p className="font-semibold text-sm">{item.title}</p>
										<span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export const SolutionMenuList2 = () => {
	let solutionItems = splitArray(solutionsMenuItems, 5);
	return (
		<div id="mega-menu-full-dropdown" className=" absolute left-[-10rem] top-[90%] bg-[#24282e] w-[700px] overflow-hidden z-20 p-8 rounded-2xl ">
			<div className="grid max-w-screen-2xl px-2 py-2 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-2">
				<ul>
					{solutionItems.first.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.link} className="flex items-center p-1 rounded-lg hover:bg-gray-100 gap-2 dark:hover:bg-gray-700">
									<figure className="flex justify-center items-center w-12 h-12 bg-[#141b24] text-white rounded-md" style={{ minWidth: "4rem", minHeight: "4rem", flexShrink: 0 }}>
										{item.icon}
									</figure>
									<div>
										<p className="font-semibold text-sm">{item.title}</p>
										<span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
				<ul>
					{solutionItems.second.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.link} className="flex items-center p-1 rounded-lg hover:bg-gray-100 gap-2 dark:hover:bg-gray-700">
									<figure className="flex justify-center items-center w-12 h-12 bg-[#141b24] text-white rounded-md" style={{ minWidth: "4rem", minHeight: "4rem", flexShrink: 0 }}>
										{item.icon}
									</figure>
									<div>
										<p className="font-semibold text-sm">{item.title}</p>
										<span className="text-sm text-gray-500 dark:text-gray-400">{item.description}</span>
									</div>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default function TopMen2() {
	const globalData = useContext(GlobalData);

	const ref = useRef(null);
	const [activeMenu, setActiveMenu] = useState("");
	let location = useLocation();
	useEffect(() => {
		setActiveMenu("");
	}, [location]);
	return (
		<menu className="flex items-center justify-between p-2 px-8 h-24">
			<Link to="/">
				<img src={baseUrl() + globalData.LightLogo.url} style={{ height: "98px" }} />
			</Link>
			<div className="flex text-[#3b516d] relative items-center right-16">
				<div
					style={{ fontSize: "15px" }}
					className="relative p-4 cursor-pointer"
					onMouseLeave={() => {
						setActiveMenu("");
					}}
					onMouseEnter={() => {
						setActiveMenu("products");
					}}
				>
					<span className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === "products" ? "bg-[#24282e] text-white" : "text-[#3b516d]"}`}>Products</span>
					{activeMenu === "products" && <ProductMenuList2 />}
				</div>
				<div
					style={{ fontSize: "15px" }}
					className="relative p-4 cursor-pointer"
					onMouseLeave={() => {
						setActiveMenu("");
					}}
					onMouseEnter={() => {
						setActiveMenu("features");
					}}
				>
					<span className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === "features" ? "bg-[#24282e] text-white" : "text-[#3b516d]"}`}>Solutions</span>
					{activeMenu === "features" && <SolutionMenuList2 />}
				</div>
				<Link style={{ fontSize: "15px" }} to="/pricing" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">Pricing</span>
				</Link>
				<Link style={{ fontSize: "15px" }} to="/partners" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">Partners</span>
				</Link>
				<Link style={{ fontSize: "15px" }} to="/countries" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">Countries</span>
				</Link>
				{/* <div style={{ fontSize: "15px" }} className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">About</span>
				</div> */}
				<Link style={{ fontSize: "15px" }} to="/team" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">Team</span>
				</Link>
				<Link style={{ fontSize: "15px" }} to="/contactus" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">Contact Us</span>
				</Link>
				<LanguageSelect />
			</div>
		</menu>
	);
}

// add logo
// fotter things
// adding data to Backend
// adding data in all langs
