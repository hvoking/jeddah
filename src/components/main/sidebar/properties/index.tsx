// App imports
import './styles.scss';

export const Properties = ({ currentId }: any) => {
	const jeddahPropertyPath = `${process.env.PUBLIC_URL}/static/jeddah/${currentId}.jpg`;
	return (
		<div className="second-page-wrapper">
			<img 
				src={jeddahPropertyPath} 
				alt="jeddah-property" 
				className="jeddah-property-image"
			/>
			<div className="sidebar-description-wrapper">
				<div>
					<div>Property ID #</div>
					<div>8</div>
				</div>
				<div>
					<div>Area (m²)</div>
					<div>478.81</div>
				</div>
				<div>
					<div>Landmarks</div>
					<div>Jeddah University, Aziz Mall, Shobra Center</div>
				</div>
			</div>
		</div>
	)
}

Properties.displayName="Properties";