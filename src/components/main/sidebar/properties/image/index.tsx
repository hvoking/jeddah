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
	    const currentItem: any = currentSelection.select("img");

	    const zoomed = (e: any) => {
	      const { width, height } = currentItem.node().getBoundingClientRect();
	      const { clientWidth, clientHeight } = zoomRef.current;

	      // Calculate the maximum translation values
	      const maxX = (width * e.transform.k - clientWidth) / 2;
	      const maxY = (height * e.transform.k - clientHeight) / 2;

	      // Constrain the translation values
	      const translateX = Math.max(Math.min(e.transform.x, maxX), -maxX);
	      const translateY = Math.max(Math.min(e.transform.y, maxY), -maxY);

	      currentItem.style("transform", `translate(${translateX}px, ${translateY}px) scale(${e.transform.k})`);
	    };

	    currentSelection.call(d3.zoom()
	      .scaleExtent([1, 100])
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