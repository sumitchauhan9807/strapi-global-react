import React, { useEffect, useState } from "react";
import { PageSkeleton } from "src/components/small/Skeletons";
import useAxios from "src/Hooks/UseAxios";
import { useSelector } from "react-redux";
import { constructQueryString } from "src/helpers";
import { baseUrl } from "src/helpers";
import Animate from "src/components/Basic/Animate";
import Facebook from "src/assets/icons/Facebook.gif";
import Linkedin from "src/assets/icons/linkedin.gif";
import Xing from "src/assets/icons/xing.gif";
import Skype from "src/assets/icons/Skype.gif";
import Instagram from "src/assets/icons/Instagram.gif";
import Whatsapp from "src/assets/icons/whatsapp.png";
import Signal from "src/assets/icons/Signal.png";

let qs = constructQueryString(["image"]);

function Team({pageData}) {
	const [data, setData] = useState([]);
	const language = useSelector((state) => state.language);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `teams?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data.data) return;

	return (
		<div className="w-full bg-gray-800">
		<section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
			<div className="text-center pb-12">
			<p style={{color:"white"}} className="inline-block px-3 py-px mb-4  font-semibold tracking-wider  uppercase rounded-full ">{pageData.Heading}</p>
			<p style={{color:"white"}} className="text-base text-gray-700 md:text-lg ">{pageData.SubHeading}</p>
			</div>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{data.data.map((item, index) => {
					return (
						<Animate
								config={{
									animateIn: "bounceInUp",
									delay: index / 10,
								}}
							>
						<div className="w-full bg-gray-900 rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
							<div className="w-full md:w-2/5 h-80">
								<img className="object-center lg:object-cover lg:mt-0 mt-3  object-contain lg:rounded-none rounded-lg w-full h-full" src={baseUrl() + item.image.url} alt="photo" />
							</div>
							<div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
								<p className="text-xl text-white font-bold">{item.name}</p>
								<p className="text-base text-gray-400 font-normal">{item.designation}</p>
								<p className="text-base leading-relaxed text-gray-500 font-normal">{item.description}</p>
								<div className="flex justify-start space-x-2">
									{item.facebook && 
									<a target="_blank" href={item.facebook} className="text-gray-500 hover:text-gray-600">
										<img className="h-6" src={Facebook}/>
									</a>}
									{item.instagram && 
									<a target="_blank" href={item.instagram} className="text-gray-500 hover:text-gray-600">
										<img className="h-6" src={Instagram}/>
									</a>}

									{item.skype && 
									<a target="_blank" href={item.skype} className="text-gray-500 hover:text-gray-600">
										<img className="h-6" src={Skype}/>
									</a>}
									{item.xing && 
									<a target="_blank" href={item.xing} className="text-gray-500 hover:text-gray-600">
										<img className="h-6" src={Xing}/>
									</a>}
									{item.linkedin && 
									<a target="_blank" href={item.linkedin} className="text-gray-500 hover:text-gray-600">
										<img className="h-6" src={Linkedin}/>
									</a>}
									{item.whatsapp && 
									<a target="_blank" href={item.whatsapp} className="text-gray-500 hover:text-gray-600">
										<img className="h-6" src={Whatsapp}/>
									</a>}
									{item.signal && 
									<a target="_blank" href={item.signal} className="text-gray-500 hover:text-gray-600">
										<img className="h-6" src={Signal}/>
									</a>}
									
								</div>
							</div>
						</div>
						</Animate>
					);
				})}
			</div>
		</section>
	</div>
	);
}


export default Team;