import { useLoadScript } from "@react-google-maps/api";
import GoogleMapComponent from "src/components/Basic/GoogleMapComponent";
import { constructQueryString } from "src/helpers";
import useAxios from "src/Hooks/UseAxios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { PageSkeleton } from "src/components/small/Skeletons";

let qs = constructQueryString(["GoogleMaps"]);
function GoogleMaps() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: "AIzaSyDOkFPJ7laX0Tsy0QehCHQaN2UBrRvr_gI", // Add your API key
	});
	const language = useSelector((state) => state.language);
	const [data, setData] = useState([]);
	const { response, loading, error } = useAxios({
		method: "get",
		url: `google-maps?${qs}locale=${language.language}`,
	});
	useEffect(() => {
		if (response !== null) {
			setData(response);
		}
	}, [response]);
	if (loading) return <PageSkeleton />;
	if (!data?.data) return;
	console.log(data.data);
	return (
		<div id="main" className="p-6 w-full grid grid-cols-1 xl:grid-cols-4 ">
			{isLoaded && (
				<>
					{data.data.map((mapData,index) => {
            let map = mapData.GoogleMaps
						return (
							<div key={index} className=" rounded-lg m-4">
								<GoogleMapComponent
									markers={[
										{
											id: index,
											name: map.Address,
											position: { lat: Number(map.Latitude), lng: Number(map.Longitude) },
											zoom: 7,
										},
									]}
								/>
                <center><h3 className="text-base font-semibold text-gray-800 mt-4" dangerouslySetInnerHTML={{__html: map.Description}}></h3></center>
							</div>
						);
					})}

					{/* <div className=" rounded-lg m-4">
						<GoogleMapComponent
							markers={[
								{
									id: 6,
									name: "Seitenstettengasse 5, 1010 Wien, Austria",
									position: { lat: 48.21198723854351, lng: 16.374860186506325 },
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
					</div> */}
				</>
			)}
		</div>
	);
}
export default GoogleMaps;
