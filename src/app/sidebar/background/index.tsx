// App imports
import './styles.scss';

export const Background = () => {
	return (
		<div className="background-image-wrapper">
			<img 
				src={`${process.env.PUBLIC_URL}/static/site/background.svg`} 
				alt="background-logo" 
				width="100%"
				className="background-image"
			/>
		</div>
	)
}

Background.displayName="Background";