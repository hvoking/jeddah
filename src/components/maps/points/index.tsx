// Third party imports
import { Source, Layer, LayerProps } from 'react-map-gl';

export const Points = ({ landmarkData }: any) => {
	const unclusteredPointLayer: LayerProps = {
	  id: 'unclustered-point',
	  type: 'circle',
	  source: 'landmark-point',
	  paint: {
	    'circle-color': "rgba(122, 122, 222, 1)",
	    'circle-radius': 5,
	  }
	};
	
	const geojsonPoints: any = landmarkData && landmarkData.reduce((total: any, item: any) => {
		const coord = item.coordinates.split(",");
		total.push({
			type: "Feature",
		    geometry: { 
		    	type: "Point", 
		    	coordinates: [ 
		    		coord[1], 
		    		coord[0] 
		    	] 
		    },
			properties: {...item,}
		});
		return total
	}, []);

	const geojsonWrapper: any = geojsonPoints && {
		"type": "FeatureCollection",
		"features": geojsonPoints
	}

	return (
		<Source
		  id="landmark-point"
		  type="geojson"
		  data={geojsonWrapper}
		>
		  <Layer {...unclusteredPointLayer}/>
		</Source>
	)
}

Points.displayName="Points";