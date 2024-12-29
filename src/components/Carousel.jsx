import React, { useEffect, useState ,useContext } from "react";
import Slider from "react-slick";
import { GlobalData } from "src/context";

import { explodeArray, baseUrl } from "src/helpers";
import { useWindowDimensions } from "src/Hooks/HelperHooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'src/assets/css/slick-custom.css'
// const ItemsPerRow = 2;
// const Columns = 4;

export default function SimpleSlider({ countries }) {
	const [searchText, setSearchText] = useState("");
	const globalData = useContext(GlobalData);

	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// customPaging:(i)=><Pagination i={i}/>
		// customPaging: (i) => (
		// 	<div
		// 		style={{
		// 			width: "30px",
		// 			color: "blue",
		// 			border: "1px blue solid",
		// 		}}
		// 	>
		// 		{i + 1}
		// 	</div>
		// ),
		customPaging: function(i) {
      return (
        <a className=" mt-4 flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          {i+1}
        </a>
      );
    },
	};

	const wd = useWindowDimensions();
	// console.log(wd);
	//1024
	useEffect(() => {
		if (wd.width < 1024) {
			setCarouselDimensions({
				ItemsPerRow: 5,
				Columns: 2,
			});
		} else {
			setCarouselDimensions({
				ItemsPerRow: 5,
				Columns: 4,
			});
		}
	}, [wd.width]);
	const [carouselDimensions, setCarouselDimensions] = useState({
		ItemsPerRow: 4,
		Columns: 4,
	});
	let noOfSlides = Math.ceil(countries.length / (carouselDimensions.ItemsPerRow * carouselDimensions.Columns));
	let countriesPerSlide = carouselDimensions.ItemsPerRow * carouselDimensions.Columns;
	let coutriesArr = explodeArray(countries, countriesPerSlide);
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" id="search" className=" mb-4  w-full lg:w-1/2 block  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={globalData.translations.CountriesSearchPlaceholder} required />
			<Slider {...settings}>
				{coutriesArr.map((countries, index) => {
					return <CarouselItem key={index} countries={countries} carouselDimensions={carouselDimensions} />;
				})}
			</Slider>
		</div>
	);
}

const Pagination = () => {
	return (
		<div className="flex space-x-1">
			<button className="rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">Prev</button>
			<button className="min-w-9 rounded-md bg-slate-800 py-2 px-3 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">1</button>
			<button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">2</button>
			<button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">3</button>
			<button className="min-w-9 rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2">Next</button>
		</div>
	);
};

const Count = ({ country }) => {
	return (
		<a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
			<div className="bg-orange-50 rounded-lg  flex items-center justify-center">
				<img src={baseUrl() + country.flag.url} style={{ float: "left", height: "40px", borderRadius: "100%", width: "40px" }} />
			</div>
			<div className="ml-4 w-4/5">
				<p className="text-xs font-medium text-gray-900">
					{country.CountryCode} {country.name}
				</p>
			</div>
		</a>
	);
};

const CarouselItem = ({ countries, carouselDimensions }) => {
	let countriesArr = explodeArray(countries, carouselDimensions.ItemsPerRow);
	return (
		<div className="px-2">
			<div className="flex">
				{countriesArr.map((countArr, index) => {
					return (
						<div key={index} className={`w-1/${carouselDimensions.Columns} px-2`} key={index}>
							{countArr.map((count, index) => {
								return <Count country={count} />;
							})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
