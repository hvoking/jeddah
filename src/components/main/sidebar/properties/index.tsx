// React imports
import { useEffect, useRef } from 'react';

// App imports
import { Footer } from '../presentation/footer'
import { Logo } from './logo'
import { Info } from './info'
import './styles.scss';

// Third-party imports
import * as d3 from 'd3';

export const Properties = ({ currentId, data }: any) => {
	const zoomRef = useRef<any>(null);

	const jeddahPropertyPath = `${process.env.PUBLIC_URL}/static/jeddah/${currentId}.jpg`;
	const currentProperty = data.find((p: any) => p.property_id === currentId);

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
		<div className="second-page-wrapper">
			<div ref={zoomRef} style={{overflow: "hidden"}}>
				<img 
					src={jeddahPropertyPath} 
					alt="jeddah-property" 
					className="jeddah-property-image"
				/>
			</div>
			<Info currentId={currentId} currentProperty={currentProperty}/>
			<div></div>
			<Logo/>
			<Footer/>
		</div>
	)
}

Properties.displayName="Properties";