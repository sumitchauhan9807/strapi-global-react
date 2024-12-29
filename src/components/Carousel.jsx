import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { explodeArray, baseUrl } from "src/helpers";
import { useWindowDimensions } from "src/Hooks/HelperHooks";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// const ItemsPerRow = 2;
// const Columns = 4;

export default function SimpleSlider({ countries }) {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		// customPaging:(i)=><Pagination i={i}/>
		customPaging: (i) => (
			<div
				style={{
					width: "30px",
					color: "blue",
					border: "1px blue solid",
				}}
			>
				{i + 1}
			</div>
		),
	};

	const wd = useWindowDimensions();
	console.log(wd);
	//1024
	useEffect(() => {
		if (wd.width < 1024) {
			setCarouselDimensions({
				ItemsPerRow: 2,
				Columns: 4,
			});
		} else {
			setCarouselDimensions({
				ItemsPerRow: 4,
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
			<Slider {...settings}>
				{coutriesArr.map((countArr, index) => {
					return <Countries key={index} countries={countArr} carouselDimensions={carouselDimensions} />;
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

const Countries = ({ countries, carouselDimensions }) => {
	let countriesArr = explodeArray(countries, carouselDimensions.ItemsPerRow);
	// console.log(countriesArr, "countriesArr");
	return (
		<>
			{countriesArr.map((countries, index) => {
				return <CaroItem key={index} countries={countries} carouselDimensions={carouselDimensions} />;
			})}
		</>
	);
};

const CaroItem = ({ countries, carouselDimensions }) => {
	return (
		<div class="px-2">
			<div class="flex">
				{countries.map((country, index) => {
					return (
						<div key={index} className={`w-1/${carouselDimensions.ItemsPerRow} px-2`}>
							<Count country={country} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

const Count = ({ country }) => {
	return (
		<a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
			<div className="bg-orange-50 rounded-lg  flex items-center justify-center">
				<img src={baseUrl() + country.flag.url} style={{ float: "left", height: "30px" }} />
			</div>
			<div className="ml-4 w-4/5">
				<p className="text-xs font-medium text-gray-900">
					{country.CountryCode} {country.name}
				</p>
			</div>
		</a>
	);
};


const Test = () =>{ 
	return (
		<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		<div className="px-2">
			 <div className="flex">
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_08_48_02_09dd217e73.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+353  Ireland</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_08_51_50_b8ca475af7.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+972  Israel</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_08_53_50_6509d87322.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+39  Italy</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_08_56_03_73d1bc7ae0.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+81  Japan</p>
								</div>
						 </a>
					</div>
			 </div>
		</div>
		<div className="px-2">
			 <div className="flex">
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_09_05_29_bc0a1a1e17.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+371  Latvia</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_09_07_36_1379ff9e8b.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+423  Liechtenstein</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_09_09_18_6a4ecb4325.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+370  Lithuania</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_09_10_32_df84961f50.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+352  Luxembourg</p>
								</div>
						 </a>
					</div>
			 </div>
		</div>
		<div className="px-2">
			 <div className="flex">
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_09_13_17_e679de5ca1.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+60  Malaysia</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_14_11_20_c6aca4148c.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+356  Malta</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_14_16_45_0a3403544c.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+52  Mexico</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_14_19_42_8e08f2f52f.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+377  Monaco</p>
								</div>
						 </a>
					</div>
			 </div>
		</div>
		<div className="px-2">
			 <div className="flex">
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_14_14_44_1851d029d9.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+212  Morocco</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_16_21_11_3f08578748.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+31  Netherlands</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_16_17_11_6655b9209b.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+64  New Zealand</p>
								</div>
						 </a>
					</div>
					<div className="w-1/4 px-2">
						 <a href="#" className="py-2 transition-all duration-500 hover:bg-gray-50 hover:rounded-xl flex items-center ">
								<div className="bg-orange-50 rounded-lg  flex items-center justify-center"><img src="https://backend.globalchat.us/uploads/Bildschirmfoto_2024_11_28_um_16_41_20_3e1deb377d.png" style={{float: 'left', height: '30px'}} /></div>
								<div className="ml-4 w-4/5">
									 <p className="text-xs font-medium text-gray-900">+47  Norway</p>
								</div>
						 </a>
					</div>
			 </div>
		</div>
 </div>
	)
}