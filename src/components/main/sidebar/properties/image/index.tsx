// React imports
import { useEffect, useRef } from 'react';

// App imports
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

export const PropertyImage = ({ currentId}: any) => {
	const zoomRef = useRef<any>(null);
	const jeddahPropertyPath = `${process.env.PUBLIC_URL}/static/jeddah/${currentId}.jpg`;

	useEffect(() => {
	    const currentSelection = d3.select(zoomRef.current);
	    const currentItem = currentSelection.select("img");
	    const zoomed = (e: any) => {
	      currentItem.style("transform", `translate(${e.transform.x}px, ${e.transform.y}px) scale(${e.transform.k})`);
	    };

	    currentSelection.call(d3.zoom()
	      .scaleExtent([1, 100000])
	      .on("zoom", zoomed));
	}, [currentId]);

	return (
		<div ref={zoomRef} className="jeddah-property-image-wrapper">
			<img 
				src={jeddahPropertyPath} 
				alt="jeddah-property" 
				className="jeddah-property-image"
			/>
		</div>
	)
}

PropertyImage.displayName="PropertyImage";