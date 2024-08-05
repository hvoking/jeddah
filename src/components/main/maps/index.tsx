// React imports
import { useCallback } from 'react';

// App imports
import { Points } from './points';
import { CustomMarker } from './marker';
import { Dropdown } from './dropdown';
import './styles.scss';

// Context imports
import { useMapbox } from '../../context/mapbox';
import { useGeo } from '../../context/filters/geo';
import { usePropertyApi } from '../../context/api/property';
import { useLandmarkApi } from '../../context/api/landmark';
import { useTooltip } from '../../context/tooltip';

// Third-party imports
import { Map } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

export const MapContainer = () => {
	const { propertyInfo, setPropertyInfo } = useTooltip();
	const { mapRef, currentBasemap } = useMapbox();
	const { viewport, setPlaceCoordinates } = useGeo();
	const { propertyData, currentId, setCurrentId } = usePropertyApi();
	const { landmarkData } = useLandmarkApi();

	const onDblClick = useCallback((e: any) => {
		const lng = e.lngLat.lng;
		const lat = e.lngLat.lat;
		const coordinates = { longitude: lng, latitude: lat };
		setPlaceCoordinates(coordinates);
	}, []);

	const onClick = (event: any) => {
		const feature = event.features && event.features[0];
		if (feature) {
			setCurrentId(feature.property_id);
			propertyInfo && setPropertyInfo(feature); 
		}
	}

	return (
		<div className="map-wrapper">
			<Dropdown/>
			<Map
				ref={mapRef}
				initialViewState={viewport}
				mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN} 
				mapStyle={currentBasemap}
				onDblClick={onDblClick}
				doubleClickZoom={false}
				antialias={true}
				preserveDrawingBuffer={true}
				onClick={onClick}
				interactiveLayerIds={['unclustered-point']}
			>
				<Points landmarkData={landmarkData}/>
		        <CustomMarker 
		        	filterProperties={propertyData}
		        	propertyInfo={propertyInfo}
		        	currentId={currentId}
		        	setCurrentId={setCurrentId}
		        	setPropertyInfo={setPropertyInfo}
		        />
			</Map>
		</div>
	)
}

MapContainer.displayName="MapContainer";