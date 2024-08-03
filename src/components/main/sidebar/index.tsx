// App imports
import './styles.scss';

// Context imports
import { usePropertyApi } from '../../context/api/property';

export const Sidebar = () => {
	const { propertyData, currentId } = usePropertyApi();
	const jeddahPropertyPath = `${process.env.PUBLIC_URL}/static/jeddah/${currentId}.jpg`;

	return (
		<div className="sidebar-wrapper">
			{!currentId ? 
				<div className="client-presentation">
					<div></div>
					<div style={{display: "grid", justifyContent: "center", gridGap: "10px"}}>
						<div className="logo-wrapper">
							<img 
								src={`${process.env.PUBLIC_URL}/static/logos/black.svg`} 
								alt="logo" 
								width="300px"
							/>
						</div>
						<div>
							Your vision, our mission.
						</div> 
					</div>
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
					<div className="sidebar-footer">
						<div>
							To carry out real estate auctions, we are licensed by the Ministry of Justice, license number 38020015.
						</div>
						<div>
							Licensed by the federal Real Estate Authority, FAL Auctions 4200000203, FAL Real Estate Brokerage 120000150045.
						</div>
					</div>
				</div>
				:
				<img src={jeddahPropertyPath} alt="jeddah-property" width="100%"/>
			}
		</div>
	)
}

Sidebar.displayName="Sidebar";