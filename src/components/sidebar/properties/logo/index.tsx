// App imports
import './styles.scss';

export const Logo = ({ setCurrentId }: any) => {
	const jeddahIcon = `${process.env.PUBLIC_URL}/static/site/icon.svg`;
	
	return (
		<div className="jeddah-icon-wrapper" onClick={() => setCurrentId(null)}>
			<img 
				src={jeddahIcon} 
				alt="jeddah-icon" 
				className="jeddah-icon-image"
				width="45px"
				height="45px"
			/>
		</div>
	)
}

Logo.displayName="Logo";