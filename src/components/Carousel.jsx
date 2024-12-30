import React, { useEffect, useState, useContext, useRef } from "react";
import Slider from "react-slick";
import { GlobalData } from "src/context";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { explodeArray, baseUrl } from "src/helpers";
import { useWindowDimensions } from "src/Hooks/HelperHooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "src/assets/css/slick-custom.css";
// const ItemsPerRow = 2;
// const Columns = 4;

export default function SimpleSlider({ countries }) {
	const [searchText, setSearchText] = useState("");
	const [currentIndex,setCurrentIndex] = useState(0)
	const globalData = useContext(GlobalData);
	const slider = useRef(null);
	console.log(slider, "sliderslider");
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		afterChange:(newIndex) => {
			setCurrentIndex(newIndex)
		}
	};

	const wd = useWindowDimensions();
	useEffect(() => {
		if (wd.width < 1024) {
			setCarouselDimensions({
				ItemsPerRow: 5,
				Columns: 2,
				navigationLeft:"33%",
				navigationTop:"88%"
			});
		} else {
			setCarouselDimensions({
				ItemsPerRow: 5,
				Columns: 4,
				navigationLeft:"47%",
				navigationTop:"88%"
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
		<>
			<div className="relative">
				<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
					<input value={searchText} onChange={(e) => setSearchText(e.target.value)} type="search" id="search" className=" mb-4  w-full lg:w-1/2 block  p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={globalData.translations.CountriesSearchPlaceholder} required />
					<Slider {...settings} ref={slider}>
						{coutriesArr.map((countries, index) => {
							return <CarouselItem key={index} countries={countries} carouselDimensions={carouselDimensions} />;
						})}
					</Slider>
				</div>
				<div className="absolute" style={{left:carouselDimensions.navigationLeft,top:carouselDimensions.navigationTop}}>
				<Navigation noOfSlides={noOfSlides} slider={slider} currentIndex={currentIndex}  />
				</div>
			</div>

			{/* <button onClick={() => slider?.current?.slickGoTo(0)}>Prev</button>
				<button onClick={() => slider?.current?.slickNext()}>Next</button> */}
		</>
	);
}

const Navigation = ({noOfSlides ,slider ,currentIndex}) => {
	let slides = Array.apply(null, Array(noOfSlides)).map(function (y, i) { return i; });
	return (
		<div className="flex space-x-1">
			<a href="#" onClick={(e)=>{e.preventDefault(); slider.current.slickPrev()}}><GoChevronLeft style={{ fontSize: "24px" }} /></a>
			{slides.map((slide,index)=>{
				return <a className={ currentIndex === slide ? `font-bold text-violet-700` : ''} key={index} href="#" onClick={(e)=>{e.preventDefault(); slider.current.slickGoTo(slide)}}>{slide + 1}</a>	
			})}
			<a href="#" onClick={(e)=>{e.preventDefault(); slider.current.slickNext()}}><GoChevronRight  style={{ fontSize: "24px" }} /></a>
		</div>
	);
};

const Count = ({ country }) => {
	return (
		<a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
			<div className="bg-orange-50 rounded-lg  flex items-center justify-center">
				<img src={baseUrl() + country.flag.url} style={{ float: "left", height: "40px" }} />
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
						<div key={index} className={`w-1/${carouselDimensions.Columns} px-12`} key={index}>
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
