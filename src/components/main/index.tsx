// App imports
import { MapContainer } from './maps';
import './styles.scss';

// Context imports
import { usePropertyApi } from '../context/api/property';

export const Main = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	const { propertyData, currentId } = usePropertyApi();

	const jeddahPropertyPath = `${process.env.PUBLIC_URL}/static/jeddah/${currentId}.jpg`;



	return (
		<div className="wrapper">
			<div className="sidebar-wrapper">
				{!currentId ? 
				<div className="sidebar-title">Jeddah Properties</div> :
				<img src={jeddahPropertyPath} alt="jeddah-property" width="100%"/>
				}
			</div>
			<MapContainer/>
		</div>
	)
}

Main.displayName="Main";