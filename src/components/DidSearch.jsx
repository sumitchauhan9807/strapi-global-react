import { useState, useContext, useEffect } from "react";
import { GlobalData } from "src/context";
import { servicesAxios } from "src/axios";
import Loader from "src/components/small/Loader";
import "src/assets/css/diddrop.css";
import { useDebouncedValue } from "src/Hooks/HelperHooks";

function DidSearch() {
	const [searchText, setSearchText] = useState("");
  const [loading,setLoading] = useState(false)
	const [searchData, setSearchData] = useState({});
	const globalData = useContext(GlobalData);
	const debouncedSearchTerm = useDebouncedValue(searchText, 300);
	const getSearchResults = async () => {
		if (searchText.length) {
      setLoading(true)
			let { data } = await servicesAxios.get(`searchdid/${searchText}`);
			setSearchData(data.did);
      setLoading(false)
			// if(data.did = )
		} else {
			setSearchData({});
		}
	};

	useEffect(() => {
		getSearchResults();
	}, [debouncedSearchTerm]);
	console.log(loading, "loading");
	return (
		<div className="relative">
			<input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" className=" mb-4  w-full lg:w-1/2 block  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={globalData.translations.CountriesSearchPlaceholder} />
			{/* Dropdown menu */}
			{!!searchText.length && <SearchedCountries searchData={searchData} loading={loading} />}
		</div>
	);
}

const SearchedCountries = ({ searchData ,loading }) => {
	return (
		<div role="dropdown" className="styles_dropdown__XK_pY styles_open__4wLYo styles_dropdownClassName___NVwF" data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-start" style={{ minHeight: "400px", position: "absolute", background: "white", zIndex: "9999999", borderRadius: "10px" }}>
			{loading && <Loader />}
			<div className="styles_content__fG57h" style={{ minWidth: "277px" }}>
				<ul className="styles_options__xZTcl styles_optionsClassName__qNM3x">
					<div className="styles_optionsWrapper__Vp93F">
						{!loading && <CountriesList searchData={searchData} />}
            {(!Object.keys(searchData).length && !loading) && <center><p className="text-base text-gray-700 md:text-lg mt-8">No data found</p></center>}
					</div>
				</ul>
			</div>
		</div>
	);
};

const CountriesList = ({ searchData }) => {
	let countries = Object.keys(searchData);
	return (
		<>
			{countries.map((country, index) => {
				return (
					<>
						<li className="styles_option__57D02" data-value="/phone-numbers/all-phone-numbers/Germany/Local/">
							<div className="styles_countryInfo__BZ0ud">
								<img data-testid="circle-country-flag" width={18} height={18} title="de" src="https://hatscripts.github.io/circle-flags/flags/de.svg" /> <span className="styles_customLabel__Mln90">{country}</span>
							</div>
						</li>
						{searchData[country].map((area, index) => {
							return (
								<li className="styles_option__57D02" data-value="/phone-numbers/all-phone-numbers/Germany/Local/Frankfurt/49-6109">
									<div className="styles_prefixLabel__9P8BQ">
										<div>
											{area.countryCode}-{area.areaCode}
										</div>
										<div>{area.localArea}</div>
									</div>
								</li>
							);
						})}
					</>
				);
			})}
		</>
	);
};

export default DidSearch;
