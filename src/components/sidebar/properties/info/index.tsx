export const Info = ({ currentId, currentProperty }: any) => {
	return (
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
	)
}

Info.displayName="Info";