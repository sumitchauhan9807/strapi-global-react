import React, { useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF } from "@react-google-maps/api";

function Map({ markers }) {
	const [activeMarker, setActiveMarker] = useState(null);

	const handleActiveMarker = (marker) => {
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	const handleOnLoad = (map) => {
		const bounds = new window.google.maps.LatLngBounds();
		markers.forEach(({ position }) => bounds.extend(position));
		map.fitBounds(bounds);
		setTimeout(()=>{
			map.setZoom(13)
		},1000)
	};

	return (
		<GoogleMap onLoad={handleOnLoad} onClick={() => setActiveMarker(null)} mapContainerStyle={{ width: "100%", height: "500px" }} zoom={12}>
			{markers.map(({ id, name, position }) => (
				<MarkerF key={id} position={position} onClick={() => handleActiveMarker(id)}>
					{activeMarker === id ? (
						<InfoWindowF onCloseClick={() => setActiveMarker(null)}>
							<>{name}</>
						</InfoWindowF>
					) : null}
				</MarkerF>
			))}
		</GoogleMap>
	);
}

export default Map;
