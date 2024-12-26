import { useState, useEffect, useRef } from "react";
import { useProductMenuItems, useSolutionsMenuItems } from "../menuItems";
import LanguageSelect from "src/components/small/LanguageSelector";
import { useProductMenuItems ,useSolutionsMenuItems } from "../menuItems";
import LanguageSelect from "src/components/small/NewLanguageselector";
import { Link } from "react-router-dom";
import { GrAnalytics } from "react-icons/gr";
import { LuMousePointerClick } from "react-icons/lu";
import { GrShieldSecurity } from "react-icons/gr";
import { GrIntegration } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";
import Logo from "src/assets/logo.png";
import { useLocation } from "react-router-dom";
import { GlobalData } from "src/context";
import { useContext } from "react";
import { baseUrl } from "src/helpers";
import { useTranslation } from "react-i18next";
import { PageSkeleton } from "src/components/small/Skeletons";
import useAxios from "src/Hooks/UseAxios";
import { useSelector } from "react-redux";
import { constructQueryString } from "src/helpers";
const splitArray = (arr, indexToSplit) => {
	let first = arr.slice(0, indexToSplit);
	let second = arr.slice(indexToSplit + 1);
	return { first, second };
};
let qs = constructQueryString(["Navigation.MenuItem.SubMenu"]);

const GetRandomIcon = ({ index }) => {
	if (index > 5) {
		index = 1;
	}
	return (
		<figure className="flex justify-center items-center w-16 h-16 bg-[#141b24] text-white rounded-md" style={{ minWidth: "4rem", minHeight: "4rem", flexShrink: 0 }}>
			{index == 1 && <GrAnalytics />}
			{index == 2 && <LuMousePointerClick />}
			{index == 3 && <GrShieldSecurity />}
			{index == 4 && <TbSettingsAutomation />}
			{index == 5 && <GrIntegration />}
		</figure>
	);
};

const DropdownItems = ({ menuDiv, items }) => {
	let solutionItems = splitArray(items, menuDiv);
	// return <ProductMenuList2 />
	return (
		<div id="mega-menu-full-dropdown" className=" absolute left-[-10rem] top-[90%] bg-[#24282e] w-[700px] overflow-hidden z-20 p-8 rounded-2xl ">
			<div className="grid max-w-screen-2xl px-2 py-2 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-2">
				<ul>
					{solutionItems.first.map((item, index) => {
						return (
							<li key={index}>
								<Link to={item.Link} className="flex items-center p-1 rounded-lg hover:bg-gray-100 gap-2 dark:hover:bg-gray-700">
									<GetRandomIcon index={index + 1} />
									<div className="flex-1">
										<p className="font-semibold text-sm">{item.Name}</p>
										<span className="text-sm text-gray-500 dark:text-gray-400">{item.Text}</span>
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
								<Link to={item.Link} className="flex items-center p-1 rounded-lg hover:bg-gray-100 gap-2 dark:hover:bg-gray-700">
									<GetRandomIcon index={index + 3} />
									<div>
										<p className="font-semibold text-sm">{item.Name}</p>
										<span className="text-sm text-gray-500 dark:text-gray-400">{item.Text}</span>
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

const DropdownMenu = ({ menuData, setActiveMenu, activeMenu }) => {
	return (
		<div
			style={{ fontSize: "15px" }}
			className="relative p-4 cursor-pointer"
			onMouseLeave={() => {
				setActiveMenu("");
			}}
			onMouseEnter={() => {
				setActiveMenu(menuData.Name);
			}}
		>
			<span className={`uppercase font-semibold rounded-t-md p-4 px-6 ${activeMenu === menuData.Name ? "bg-[#24282e] text-white" : "text-[#3b516d]"}`}> {menuData.Name} </span>
			{activeMenu === menuData.Name && <DropdownItems menuDiv={menuData.SubDivision} items={menuData.SubMenu} />}
		</div>
	);
};

export default function TopMen2() {
	const globalData = useContext(GlobalData);
	const { t } = useTranslation();
	const ref = useRef(null);
	const [activeMenu, setActiveMenu] = useState("");
	const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `translation?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	let location = useLocation();
	useEffect(() => {
		setActiveMenu("");
	}, [location]);
	if (loading) return <PageSkeleton />;
	if (!data.data) return;

	return (
		<menu className="flex items-center justify-between p-2 px-8 h-24">
			<Link to="/">
				<img src={baseUrl() + globalData.LightLogo.url} style={{ height: "98px" }} />
			</Link>
			<div className="flex text-[#3b516d] relative items-center right-16">
				{data.data.Navigation?.MenuItem.map((menu) => {
					if (menu.Type == "dropdown") {
						return <DropdownMenu menuData={menu} setActiveMenu={setActiveMenu} activeMenu={activeMenu} />;
					}
					if (menu.Type == "single") {
						return (
							<Link style={{ fontSize: "15px" }} to={menu.Link} className="relative p-4 cursor-pointer">
								<span className="uppercase font-semibold px-6">{menu.Name}</span>
							</Link>
						);
					}
				})}
				<LanguageSelect />
			</div>
		</menu>
	);
}
