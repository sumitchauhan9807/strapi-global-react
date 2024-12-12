import React, { useEffect, useState } from "react";
import useAxios from "src/Hooks/UseAxios";
import { constructQueryString } from "src/helpers";
import { useSelector } from "react-redux";
import { PageSkeleton } from "src/components/small/Skeletons";
import Animate from "src/components/Basic/Animate";
import { baseUrl } from "src/helpers";
// line for flags section
import france from "src/assets/flags/france.png";
import { explodeArray } from "src/helpers";
// available traffic for this country
import ContactForm from "src/components/Basic/ContactForm";
import Features from "src/components/Basic/Features";
import GoogleMapComponent from "src/components/Basic/GoogleMapComponent";
import ContactForm1 from "src/components/NewForm";
import { useLoadScript } from "@react-google-maps/api";
// import Animate from "src/components/Basic/Animate";
//AIzaSyDOkFPJ7laX0Tsy0QehCHQaN2UBrRvr_gI
let qs = constructQueryString(["Lists", "Form.info", "Form.Purpose", "Form.info.icon", "Form.FormFields", "ContactLists.Lists", "ContactLists.Lists.Image"]);

export const ContactUs = () => {
	const language = useSelector((state) => state.language);
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyDOkFPJ7laX0Tsy0QehCHQaN2UBrRvr_gI", // Add your API key
	});

	const [data, setData] = useState([]);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `contact-us?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data?.data) return;
	console.log(data);
	return (
		<div className="min-h-screen bg-gray-50 text-gray-900 py-10">
			<div className="max-w-xl sm:mx-auto lg:max-w-2xl">
				<div className="flex flex-col mb-10 text-center">
					<h2 className="text-5xl font-bold text-gray-800 mb-6">{data.data.Heading}</h2>
					<p className="text-base text-gray-600 md:text-lg mb-8">{data.data.SubHeading}</p>
				</div>
			</div>

			{/* Contact Options */}
			<div className="bg-gray-800 py-16 text-white">
				<div className="max-w-screen-xl px-4 mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-4 text-center">
					{data.data.Lists.map((text, index) => (
						<Animate
							config={{
								animateIn: "bounceInUp",
								delay: index / 10,
							}}
						>
							<div key={index} className="p-8 bg-gray-900 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
								<p className="font-medium text-gray-200">{text.text}</p>
							</div>
						</Animate>
					))}
				</div>
			</div>

			{/* <ContactForm data={data.data.Form}/>  */}
			<ContactForm1 data={data.data.Form} />
			<Features data={data.data.ContactLists} />
			<div id="main" className="p-6 w-full grid grid-cols-1 xl:grid-cols-4 ">
				{isLoaded && (
					<>
						<div className=" rounded-lg m-4">
							<GoogleMapComponent
								markers={[
									{ 
										id: 1,
										name: "Königsallee 19, 40212 Düsseldorf, Germany",
										position: { lat: 51.22516813394989, lng: 6.77821508465824 },
										zoom:7
									},
								]}
							/>
						</div> 
						<div className=" rounded-lg m-4">
							<GoogleMapComponent
								markers={[
									{
										id: 6,
										name: "Seitenstettengasse 5, 1010 Wien, Austria",
										position: { lat: 48.21198723854351, lng:16.374860186506325 },
									},
								]}
							/>
							 
						</div>
						<div className=" rounded-lg m-4">
							<GoogleMapComponent
								markers={[
									{
										id: 6,
										name: "Danila Ilića 10, Beograd, Serbia",
										position: { lat: 44.816557256681, lng: 20.49975017116456 },
									},
								]}
							/>
						</div> 
						<div className=" rounded-lg m-4">
							<GoogleMapComponent
								markers={[
									{
										id: 6,
										name: "128 City Rd, London EC1V 2NX, UK",
										position: { lat: 51.52746847051588, lng: -0.08884435767087923 },
									},
								]}
							/>
						</div>
					</>
				)}
			</div>
		</div>
	);
};
// firstname
// lastname
// email
// purpose
// message
export default ContactUs;
