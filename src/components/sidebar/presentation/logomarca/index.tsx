// App imports
import './styles.scss';

export const Logomarca = () => {
	return (
		<div className="logomarca-wrapper">
			<div className="logo-wrapper">
				<img 
					src={`${process.env.PUBLIC_URL}/static/site/black.svg`} 
					alt="logo" 
					width="300px"
				/>
			</div>
			<div>
				Your vision, our mission.
			</div> 
		</div>
	)
}

Logomarca.displayName="Logomarca";