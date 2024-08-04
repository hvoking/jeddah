// App imports
import { Footer } from '../presentation/footer'
import './styles.scss';


export const Properties = ({ currentId, data }: any) => {
	const jeddahPropertyPath = `${process.env.PUBLIC_URL}/static/jeddah/${currentId}.jpg`;
	const jeddahIcon = `${process.env.PUBLIC_URL}/static/logos/icon.svg`;

	const currentProperty = data.find((p: any) => p.property_id === currentId);

	return (
		<div className="second-page-wrapper">
			<img 
				src={jeddahPropertyPath} 
				alt="jeddah-property" 
				className="jeddah-property-image"
			/>
			<div className="sidebar-description-wrapper">
				<div className="sidebar-description-item">
					<div>Property ID #</div>
					<div>{currentId}</div>
				</div>
				<div className="sidebar-description-item">
					<div>Area (m²)</div>
					<div>{currentProperty.area}</div>
				</div>
				<div className="sidebar-description-item">
					<div>Landmarks</div>
					<div>{currentProperty.landmarks}</div>
				</div>
			</div>
			<div></div>
			<div style={{
				justifySelf: "center", 
				alignSelf: "center", 
				height: "100px",
				width: "100px"
			}}>
				<img 
					src={jeddahIcon} 
					alt="jeddah-icon" 
					className="jeddah-icon"
					width="45px"
					height="45px"
					style={{
						backgroundColor: "rgba(255, 255, 255, 1)", 
						padding: "10px", 
						borderRadius: "50%",
						filter:"drop-shadow(2px 2px 2px rgba(0, 0, 0, 1))"

					}}


				/>
			</div>
			<Footer/>
		</div>
	)
}

Properties.displayName="Properties";