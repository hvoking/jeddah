export const Logo = () => {
	const jeddahIcon = `${process.env.PUBLIC_URL}/static/logos/icon.svg`;
	
	return (
		<div style={{
			justifySelf: "center", 
			alignSelf: "center", 
			height: "100px",
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
					filter:"drop-shadow(2px 2px 2px rgb(0 0 0 / 0.2))"

				}}


			/>
		</div>
	)
}

Logo.displayName="Logo";