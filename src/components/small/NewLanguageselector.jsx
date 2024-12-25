import { useState } from "react";
import { setLang } from "src/redux/language";
import { useDispatch, useSelector } from "react-redux";

import USA from "src/assets/flags/usa.png";
import arabic from "src/assets/flags/arabic.png";
import france from "src/assets/flags/france.png";
import germany from "src/assets/flags/germany.png";
import hungary from "src/assets/flags/hungary.png";
import italy from "src/assets/flags/italy.png";
import romania from "src/assets/flags/romania.png";
import russia from "src/assets/flags/russia.png";
import serbia from "src/assets/flags/serbia.png";


import {getLanguagesArray,Languages} from 'src/helpers'
function LanguageSelector() {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const language = useSelector((state) => state.language);
	const setLanguage = (lang) => {
		dispatch(setLang(lang));
	};
  let allLangs = getLanguagesArray(5)
  let activeLanguage = Languages.find(l => l.code == language.language)
	// return  null
	return (
    <>
		<a className="relative inline-block text-left ml-2 h-full">
			<div>
				<button onClick={() => setIsOpen((prev) => !prev)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white p-2 px-4 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
				<img src={activeLanguage.flag} style={{  height: "25px" }} /> {activeLanguage.name}
					<svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
						<path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
					</svg>
				</button>
			</div>
		</a>
    {isOpen && <Language allLangs={allLangs} setLanguage={setLanguage}/>}
    </>
	);
}
// spanish
// netherland
// turkish
// bosnia
// slovania --> slovakai
// poland
// albania
// greece
// india
export default LanguageSelector;


function Language({allLangs,setLanguage}) {
  return (
    <div id="full-width-megamenu" aria-labelledby="full-width-megamenu" className="dropdown-menu animate-fade z-10  absolute lg:top-full  right-0 m-auto bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-4 xl:px-4 md:px-5 p-4 max-w-screen-2xl xl:py-4 lg:py-4 md:py-2l  ">
			<div className="grid grid-cols-1 lg:grid-cols-1  justify-between ">
				{allLangs.map((langArray,index)=>{
					return (
						<ul key={index} className="text-sm text-gray-700  " aria-labelledby="dropdownLargeButton">
							{langArray.map((language,index)=>{
								return (
							<li key={index}>
								<a onClick={(e)=> {e.preventDefault() ; setLanguage(language.code)}} href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
									<div className="bg-orange-50 rounded-lg  flex items-center justify-center">
									<img src={language.flag} style={{ float: "left", height: "20px", marginRight: "7px" }} />
									</div>
									<div className="ml-4 w-4/5">
									<p className="text-xs font-medium text-gray-900"> {language.name}</p>
									</div>
								</a>
							</li>
								)
							})}
						</ul>
					)
				})}
			</div>
		</div>
  )
}

function NavBar2() {
	return (
		<div id="full-width-megamenu" aria-labelledby="full-width-megamenu" className="dropdown-menu animate-fade z-10  lg:absolute top-full left-0 right-0 m-auto bg-white rounded-lg shadow-[0px_15px_30px_0px_rgba(16,24,40,0.1)] lg:px-10 xl:px-8 md:px-5 p-4 max-w-screen-2xl xl:py-8 lg:py-4 md:py-2l  ">
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 justify-between ">
				<ul className="text-sm text-gray-700  " aria-labelledby="dropdownLargeButton">
					<h6 className="font-medium text-sm text-gray-500 mb-2"> Features</h6>
					<li className>
						<a href="javascript:;" className="px-3 py-5 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
							<div className="bg-orange-50 rounded-lg w-12 h-12 flex items-center justify-center">
								<svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.3" d="M23.75 16.625C23.75 15.3133 22.6867 14.25 21.375 14.25H7.125C5.81332 14.25 4.75 15.3133 4.75 16.625V30.875C4.75 32.1867 5.81332 33.25 7.125 33.25H21.375C22.6867 33.25 23.75 32.1867 23.75 30.875V16.625Z" fill="#F59E0B" />
									<path d="M12.6665 15.0417C12.6665 20.7256 17.2742 25.3333 22.9582 25.3333C28.6421 25.3333 33.2498 20.7256 33.2498 15.0417C33.2498 9.35774 28.6421 4.75 22.9582 4.75C17.2742 4.75 12.6665 9.35774 12.6665 15.0417Z" fill="#F59E0B" />
								</svg>
							</div>
							<div className="ml-4 w-4/5">
								<h5 className="text-gray-900 text-base mb-1.5 font-semibold"> Notification</h5>
								<p className="text-xs font-medium text-gray-400"> Real time notification always keep you up to date in realtime</p>
							</div>
						</a>
					</li>
					<li className>
						<a href="javascript:;" className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
							<div className="bg-emerald-50 rounded-lg w-12 h-12 flex items-center justify-center">
								<svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.3" d="M25.3333 6.84527C25.3333 5.62971 24.3452 4.6322 23.1365 4.76127C21.1735 4.97089 19.2468 5.46081 17.416 6.21916C14.9059 7.25888 12.6251 8.78283 10.704 10.704C8.78283 12.6251 7.25888 14.9059 6.21916 17.416C5.46081 19.2468 4.97089 21.1735 4.76127 23.1365C4.6322 24.3452 5.62971 25.3333 6.84526 25.3333H23.1324C24.3479 25.3333 25.3333 24.3479 25.3333 23.1324L25.3333 6.84527Z" fill="#10B981" />
									<path d="M31.6668 13.1788C31.6668 11.9632 30.6787 10.9657 29.47 11.0948C27.507 11.3044 25.5803 11.7943 23.7495 12.5527C21.2394 13.5924 18.9586 15.1163 17.0375 17.0375C15.1163 18.9586 13.5924 21.2394 12.5527 23.7495C11.7943 25.5803 11.3044 27.507 11.0948 29.47C10.9657 30.6787 11.9632 31.6668 13.1788 31.6668H29.4659C30.6814 31.6668 31.6668 30.6814 31.6668 29.4659V13.1788Z" fill="#10B981" />
								</svg>
							</div>
							<div className="ml-4 w-4/5">
								<h5 className="text-gray-900 text-base mb-1.5 font-semibold">
									{" "}
									Analytics <span className="bg-indigo-50 text-indigo-500 text-xs font-medium mr-2 px-2.5 py-1 rounded-full h-5 ml-4">New</span>
								</h5>
								<p className="text-xs font-medium text-gray-400"> Analyze data to make more informed and accurate business decision</p>
							</div>
						</a>
					</li>
					<li className>
						<a href="javascript:;" className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
							<div className="bg-blue-50 rounded-lg w-12 h-12 flex items-center justify-center">
								<svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.3" d="M4.75 22.1667C4.75 26.5389 8.29441 30.0833 12.6667 30.0833H22.0227C22.9767 30.0833 23.75 29.31 23.75 28.3561V15.9773C23.75 15.0233 22.9767 14.25 22.0227 14.25H12.6667C8.29441 14.25 4.75 17.7944 4.75 22.1667Z" fill="#3B82F6" />
									<path d="M33.25 14.2502C33.25 18.6224 29.7056 22.1668 25.3333 22.1668H15.9773C15.0233 22.1668 14.25 21.3935 14.25 20.4396V8.06077C14.25 7.10682 15.0233 6.3335 15.9773 6.3335H25.3333C29.7056 6.3335 33.25 9.87791 33.25 14.2502Z" fill="#3B82F6" />
								</svg>
							</div>
							<div className="ml-4 w-4/5">
								<h5 className="text-gray-900 text-base mb-1.5 font-semibold"> Integrations</h5>
								<p className="text-xs font-medium text-gray-400"> Get started by taking advantage of integration with other services</p>
							</div>
						</a>
					</li>
					{/* <li aria-labelledby="dropdownNavbarLink"><button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button><div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"><ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton"><li><a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a></li><li><a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                downloads</a></li><li><a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a></li><li><a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a></li></ul></div></li> */}
				</ul>
				<ul className="text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
					<h6 className="font-medium text-sm text-gray-500 mb-2"> Services</h6>
					<li className>
						<a href="javascript:;" className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
							<div className="bg-rose-50 rounded-lg w-12 h-12 flex items-center justify-center">
								<svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.3" d="M15.092 11.4813C16.0377 10.9509 17.2126 10.9509 18.1583 11.4813L25.4363 15.5637C26.3539 16.0783 26.9168 17.0148 26.9168 18.0265V26.3072C26.9168 27.3189 26.3539 28.2553 25.4363 28.77L18.1583 32.8523C17.2126 33.3828 16.0377 33.3828 15.092 32.8523L7.81401 28.77C6.89644 28.2553 6.3335 27.3189 6.3335 26.3072V18.0265C6.3335 17.0148 6.89644 16.0783 7.81401 15.5637L15.092 11.4813Z" fill="#F43F5E" />
									<path d="M20.2043 4.82947C21.0987 4.30099 22.2098 4.30099 23.1041 4.82946L29.9869 8.8966C30.8547 9.40936 31.3871 10.3423 31.3871 11.3502V19.6001C31.3871 20.608 30.8547 21.541 29.9869 22.0537L23.1041 26.1209C22.2098 26.6494 21.0987 26.6494 20.2044 26.1209L13.3215 22.0537C12.4538 21.541 11.9214 20.608 11.9214 19.6001V11.3502C11.9214 10.3423 12.4538 9.40936 13.3215 8.8966L20.2043 4.82947Z" fill="#F43F5E" />
								</svg>
							</div>
							<div className="ml-4 w-4/5">
								<h5 className="text-gray-900 text-base mb-1.5 font-semibold"> Security</h5>
								<p className="text-xs font-medium text-gray-400"> To ensure your privacy all information are highly encrypted </p>
							</div>
						</a>
					</li>
					<li className>
						<a href="javascript:;" className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
							<div className="bg-indigo-50 rounded-lg w-12 h-12 flex items-center justify-center">
								<svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.3" d="M11.1086 7.89499C11.4505 6.95739 12.342 6.3335 13.34 6.3335H23.5237C25.1727 6.3335 26.3199 7.97275 25.755 9.522L20.5597 23.772C20.2179 24.7096 19.3264 25.3335 18.3284 25.3335H8.14465C6.49564 25.3335 5.34848 23.6942 5.91332 22.145L11.1086 7.89499Z" fill="#4F46E5" />
									<path d="M17.4416 14.228C17.7835 13.2904 18.675 12.6665 19.673 12.6665H29.8567C31.5057 12.6665 32.6529 14.3058 32.088 15.855L26.8927 30.105C26.5509 31.0426 25.6594 31.6665 24.6614 31.6665H14.4777C12.8286 31.6665 11.6815 30.0273 12.2463 28.478L17.4416 14.228Z" fill="#4F46E5" />
								</svg>
							</div>
							<div className="ml-4 w-4/5">
								<h5 className="text-gray-900 text-base mb-1.5 font-semibold"> Documentation</h5>
								<p className="text-xs font-medium text-gray-400"> Organized documentation will help you save tone of your time </p>
							</div>
						</a>
					</li>
					<li className>
						<a href="javascript:;" className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
							<div className="bg-cyan-50 rounded-lg w-12 h-12 flex items-center justify-center">
								<svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										opacity="0.3"
										d="M24.5114 33.2423C26.9097 33.0921 29.1569 32.0322 30.7847 30.2836C32.4125 28.535 33.2952 26.2325 33.249 23.856C33.2028 21.4795 32.2312 19.2123 30.5366 17.5269C28.842 15.8415 26.5553 14.868 24.1529 14.8091H16.5879C15.6055 14.8091 14.8096 15.5892 14.8096 16.568V24.0221C14.8075 25.2655 15.06 26.4965 15.5517 27.6408C16.0433 28.7851 16.7641 29.8192 17.6706 30.6806C18.5771 31.5421 19.6505 32.2132 20.8261 32.6534C22.0018 33.0937 23.2554 33.294 24.5114 33.2423Z"
										fill="#06B6D4"
									/>
									<path
										d="M13.4894 4.75796C11.091 4.90819 8.84381 5.96805 7.21604 7.71666C5.58826 9.46527 4.7055 11.7677 4.75173 14.1442C4.79795 16.5207 5.76959 18.7879 7.46415 20.4733C9.15872 22.1587 11.4455 23.1323 13.8479 23.1912H21.4129C21.8845 23.1912 22.3368 23.0059 22.6703 22.676C23.0038 22.3461 23.1912 21.8988 23.1912 21.4323V13.9781C23.1932 12.7347 22.9408 11.5038 22.4491 10.3595C21.9574 9.21514 21.2366 8.18109 20.3301 7.31962C19.4236 6.45815 18.3503 5.78708 17.1746 5.34683C15.9989 4.90659 14.7454 4.70628 13.4894 4.75796Z"
										fill="#06B6D4"
									/>
								</svg>
							</div>
							<div className="ml-4 w-4/5">
								<h5 className="text-gray-900 text-base mb-1.5 font-semibold"> Support</h5>
								<p className="text-xs font-medium text-gray-400"> Need help? our customer support is here to help you anytime</p>
							</div>
						</a>
					</li>
					{/* <li aria-labelledby="dropdownNavbarLink"><button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dropdown<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></button><div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"><ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton"><li><a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Overview</a></li><li><a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">My
                                 downloads</a></li><li><a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Billing</a></li><li><a href="javascript:;" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Rewards</a></li></ul></div></li> */}
				</ul>
				<ul className="text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
					<h6 className="font-medium text-sm text-gray-500 mb-2"> Products</h6>
					<li className>
						<a href="javascript:;" className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
							<div className="bg-lime-50 rounded-lg w-12 h-12 flex items-center justify-center">
								<svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.3" d="M6.3335 8.70801C6.3335 7.39633 7.39682 6.33301 8.7085 6.33301H21.3752C22.6868 6.33301 23.7502 7.39633 23.7502 8.70801V21.3747C23.7502 22.6863 22.6868 23.7497 21.3752 23.7497H8.7085C7.39682 23.7497 6.3335 22.6863 6.3335 21.3747V8.70801Z" fill="#84CC16" />
									<path d="M14.25 16.625C14.25 15.3133 15.3133 14.25 16.625 14.25H29.2917C30.6033 14.25 31.6667 15.3133 31.6667 16.625V29.2917C31.6667 30.6033 30.6033 31.6667 29.2917 31.6667H16.625C15.3133 31.6667 14.25 30.6033 14.25 29.2917V16.625Z" fill="#84CC16" />
								</svg>
							</div>
							<div className="ml-4 w-4/5">
								<h5 className="text-gray-900 text-base mb-1.5 font-semibold"> Collectibles</h5>
								<p className="text-xs font-medium text-gray-400"> To ensure your privacy all information are highly encrypted </p>
							</div>
						</a>
					</li>
					<li className>
						<a href="javascript:;" className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
							<div className="bg-purple-50 rounded-lg w-12 h-12 flex items-center justify-center">
								<svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										opacity="0.3"
										d="M23.7502 6.30769C23.7502 5.44653 23.0133 4.75 22.0956 4.75H7.98809C7.55042 4.75 7.13058 4.91391 6.82048 5.20585C6.51038 5.49779 6.33527 5.89399 6.3335 6.30769V25.3546C6.33273 25.6151 6.4011 25.8717 6.53236 26.1008C6.66362 26.3299 6.85358 26.5242 7.08484 26.666C7.31611 26.8077 7.58129 26.8924 7.85612 26.9122C8.13094 26.932 8.40663 26.8863 8.65796 26.7793L15.4906 23.9109L22.7655 20.8525C23.3683 20.5992 23.7502 20.0483 23.7502 19.4278V6.30769Z"
										fill="#A855F7"
									/>
									<path d="M22.1665 31.667C24.6861 31.667 27.1024 30.6661 28.884 28.8845C30.6656 27.1029 31.6665 24.6865 31.6665 22.167C31.6665 19.6474 30.6656 17.2311 28.884 15.4495C27.1024 13.6679 24.6861 12.667 22.1665 12.667C19.6469 12.667 17.2306 13.6679 15.449 15.4495C13.6674 17.2311 12.6665 19.6474 12.6665 22.167C12.6665 24.6865 13.6674 27.1029 15.449 28.8845C17.2306 30.6661 19.6469 31.667 22.1665 31.667V31.667Z" fill="#A855F7" />
								</svg>
							</div>
							<div className="ml-4 w-4/5">
								<h5 className="text-gray-900 text-base mb-1.5 font-semibold"> Subscriptions</h5>
								<p className="text-xs font-medium text-gray-400"> Premium livestreams &amp; source files with the premium subscription</p>
							</div>
						</a>
					</li>
					<li className>
						<a href="javascript:;" className="px-3 py-5 hover:bg-gray-50 hover:rounded-xl flex items-center transition-all duration-500">
							<div className="bg-fuchsia-50 rounded-lg w-12 h-12 flex items-center justify-center">
								<svg width={38} height={38} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path opacity="0.3" d="M18.9266 9.58359C18.6168 8.59209 17.6985 7.91699 16.6597 7.91699H6.39668C4.7944 7.91699 3.65187 9.47106 4.12979 11.0004L9.57249 28.4171C9.88234 29.4086 10.8006 30.0837 11.8394 30.0837H22.1024C23.7047 30.0837 24.8472 28.5296 24.3693 27.0003L18.9266 9.58359Z" fill="#D946EF" />
									<path d="M19.0725 9.58359C19.3823 8.59209 20.3006 7.91699 21.3394 7.91699H31.6024C33.2047 7.91699 34.3472 9.47106 33.8693 11.0004L28.4266 28.4171C28.1168 29.4086 27.1985 30.0837 26.1597 30.0837H15.8967C14.2944 30.0837 13.1519 28.5296 13.6298 27.0003L19.0725 9.58359Z" fill="#D946EF" />
								</svg>
							</div>
							<div className="ml-4 w-4/5">
								<h5 className="text-gray-900 text-base mb-1.5 font-semibold"> Creative Feeds</h5>
								<p className="text-xs font-medium text-gray-400"> Never ending engaging, infinite &amp; interesting and content for you </p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
