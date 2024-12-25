import { useState, useEffect, useRef } from "react";
import { productMenuItems, solutionsMenuItems, pricingMenuItems ,useProductMenuItems ,useSolutionsMenuItems } from "../menuItems";
import LanguageSelect from "src/components/small/LanguageSelector";
import { Link } from "react-router-dom";
import Logo from "src/assets/logo.png";
import { useLocation } from "react-router-dom";
import { TbSettingsAutomation } from "react-icons/tb";
import { GlobalData } from "src/context";
import { useContext } from "react";
import { baseUrl } from "src/helpers";
import { useTranslation } from 'react-i18next';
const splitArray = (arr, indexToSplit) => {
	let first = arr.slice(0, indexToSplit);
	let second = arr.slice(indexToSplit + 1);
	return { first, second };
};



export const ProductMenuList2 = () => {
	let meunItems = useProductMenuItems()
	let solutionItems = splitArray(meunItems, 3);
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
	let meunItems = useSolutionsMenuItems()
	let solutionItems = splitArray(meunItems, 5);
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
  const { t } = useTranslation();
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
					<span className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === "products" ? "bg-[#24282e] text-white" : "text-[#3b516d]"}`}> {t('Products')} </span>
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
					<span className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === "features" ? "bg-[#24282e] text-white" : "text-[#3b516d]"}`}>{t('Solutions')}</span>
					{activeMenu === "features" && <SolutionMenuList2 />}
				</div>
				<Link style={{ fontSize: "15px" }} to="/pricing" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">{t('Pricing')}</span>
				</Link>
				<Link style={{ fontSize: "15px" }} to="/partners" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">{t('Partners')}</span>
				</Link>
				<Link style={{ fontSize: "15px" }} to="/countries" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">{t('Countries')}</span>
				</Link>
				{/* <div style={{ fontSize: "15px" }} className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">About</span>
				</div> */}
				<Link style={{ fontSize: "15px" }} to="/team" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">{t('Team')}</span>
				</Link>
				<Link style={{ fontSize: "15px" }} to="/contactus" className="relative p-4 cursor-pointer">
					<span className="uppercase font-semibold px-6">{t('Contact Us')}</span>
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
