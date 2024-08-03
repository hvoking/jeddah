// Third party imports
import { Source, Layer, LayerProps } from 'react-map-gl';

export const Points = ({ propertyData }: any) => {
	const unclusteredPointLayer: LayerProps = {
	  id: 'unclustered-point',
	  type: 'circle',
	  source: 'property-point',
	  paint: {
	    'circle-color': "rgba(122, 122, 222, 1)",
	    'circle-radius': 10,
	  }
	};
	
	const geojsonPoints: any = propertyData && propertyData.reduce((total: any, item: any) => {
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

	console.log(geojsonWrapper)

	return (
		<Source
		  id="property-point"
		  type="geojson"
		  data={geojsonWrapper}
		>
		  <Layer {...unclusteredPointLayer}/>
		</Source>
	)
}

Points.displayName="Points";