export const Description = () => {
	return (
		<div className="client-description">
			<div>
				Find your next property in Saudi Arabia <br/>
				through the most trusted and reliable <br/>
				real estate advisors.
			</div>
			<div style={{display: "grid", gridTemplateColumns: "auto 40px auto"}}>
				<div></div>
					<svg viewBox="0 0 20 20">
						<line
							x1="0" y1="10" x2="4" y2="10" stroke="rgba(245, 221, 214, 1)"
						/>
						<line
							x1="6" y1="10" x2="10" y2="10" stroke="rgba(245, 221, 214, 1)"
						/>
						<line
							x1="11" y1="7" x2="15" y2="10" stroke="rgba(245, 221, 214, 1)"
						/>
						<line
							x1="11" y1="13" x2="15" y2="10" stroke="rgba(245, 221, 214, 1)"
						/>
					</svg>
				<div></div>
			</div>
		</div>
	)
}

Description.displayName="Description";