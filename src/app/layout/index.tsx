// React imports
import { useState, useCallback } from 'react';

// App imports
import { Points } from './points';
import { CustomMarker } from './marker';
import { Dropdown } from './dropdown';
import './styles.scss';

// Context imports
import { useGeo } from 'context/geo';
import { usePropertyApi } from 'context/api/property';
import { useLandmarkApi } from 'context/api/landmark';
import { useTooltip } from 'context/tooltip';

// Third-party imports
import { Map } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';

export const Layout = () => {
	const { propertyInfo, setPropertyInfo } = useTooltip();
	const { mapRef, viewport, mapStyle, setPlaceCoordinates } = useGeo();
	const { propertyData, currentId, setCurrentId } = usePropertyApi();
	const { landmarkData } = useLandmarkApi();

	const [ isMapLoaded, setIsMapLoaded ] = useState(false);

	const onDblClick = useCallback((e: any) => {
		const { lng, lat } = e.lngLat
		const coordinates = { longitude: lng, latitude: lat };
		setPlaceCoordinates(coordinates);
	}, []);

	const onClick = (event: any) => {
		const feature = event?.features[0];
		if (feature) {
			setCurrentId(feature.property_id);
			propertyInfo && setPropertyInfo(feature); 
		}
	}

	const onLoad = () => setIsMapLoaded(true);

	return (
		<div className="map-wrapper">
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={mapStyle}
				onDblClick={onDblClick}
				doubleClickZoom={false}
				antialias={true}
				onLoad={onLoad}
				onClick={onClick}
				interactiveLayerIds={['unclustered-point']}
			>
				{isMapLoaded && <>
					<Points landmarkData={landmarkData}/>
			        <CustomMarker 
			        	filterProperties={propertyData}
			        	propertyInfo={propertyInfo}
			        	currentId={currentId}
			        	setCurrentId={setCurrentId}
			        	setPropertyInfo={setPropertyInfo}
			        />
		        </>}
			</Map>
			<Dropdown/>
		</div>
	)
}

Layout.displayName="Layout";