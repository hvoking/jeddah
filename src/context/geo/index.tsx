// React imports
import { useState, useEffect, useRef, useContext, createContext } from 'react';

// App imports
import * as Locations from './locations';

const GeoContext: React.Context<any> = createContext(null)

export const useGeo = () => {
	return (
		useContext(GeoContext)
	)
}

export const GeoProvider = ({children}: any) => {
	const mapRef = useRef<any>(null);

	const [ cityName, setCityName ] = useState("jeddah");
	const [ viewport, setViewport ] = useState(Locations.jeddah);
	const [ placeCoordinates, setPlaceCoordinates ] = useState<any>(null);
	const [ placeId, setPlaceId ] = useState<any>(null);
	const [ mapStyle, setMapStyle ] = useState("mapbox://styles/hvoking/cm6k7wwbu00cw01ryeqdb9fik");

	useEffect(() => {
	  const lng = viewport.longitude;
	  const lat = viewport.latitude;
	  const zoom = viewport.zoom; 

	  mapRef.current?.flyTo({
	    center: [ lng, lat ],
	    zoom: zoom,
	    duration: 3000, 
	    essential: true,
	  });

	}, [ viewport ]);

	useEffect(() => {
		setViewport({...viewport, ...placeCoordinates});
	}, [ placeCoordinates ])

	return (
		<GeoContext.Provider value={{
			cityName, setCityName, 
			placeCoordinates, setPlaceCoordinates,
			viewport, setViewport,
			Locations,
			placeId, setPlaceId,
			mapRef, mapStyle, setMapStyle
		}}>
			{children}
		</GeoContext.Provider>
	)
}

GeoContext.displayName = "GeoContext";