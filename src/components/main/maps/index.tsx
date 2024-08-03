// React imports
import { useCallback } from 'react';

// App imports
import { Points } from './points';
import { CustomPopup } from './popup';
import { CustomMarker } from './marker';
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
	const { propertyInfo, setPropertyInfo, propertyHoverInfo, setPropertyHoverInfo } = useTooltip();
	const { mapRef, currentBasemap } = useMapbox();
	const { viewport, setPlaceCoordinates } = useGeo();
	const { propertyData, setCurrentId } = usePropertyApi();
	const { landmarkData } = useLandmarkApi();

	const onDblClick = useCallback((e: any) => {
		const lng = e.lngLat.lng;
		const lat = e.lngLat.lat;
		const coordinates = { longitude: lng, latitude: lat };
		setPlaceCoordinates(coordinates);
	}, []);

	const onClick = (event: any) => {
		setPropertyHoverInfo(null);
		const feature = event.features && event.features[0];
		if (feature) {
			setCurrentId(feature.property_id);
			setPropertyHoverInfo(feature);
			propertyInfo && setPropertyInfo(feature); 
		}
	}

	return (
		<div className="map-wrapper">
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
		        	setCurrentId={setCurrentId}
		        	setPropertyInfo={setPropertyInfo}
					setPropertyHoverInfo={setPropertyHoverInfo}
		        />
				{/*{propertyHoverInfo && 
					<CustomPopup 
						marker={propertyHoverInfo} 
						setPropertyInfo={setPropertyInfo}
						setPropertyHoverInfo={setPropertyHoverInfo}
					/>
				}*/}
			</Map>
		</div>
	)
}

MapContainer.displayName="MapContainer";