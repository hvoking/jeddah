// App imports
import { MapContainer } from './maps';
import './styles.scss';

export const Main = () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);

	window.addEventListener('resize', () => {
	  let vh = window.innerHeight * 0.01;
	  document.documentElement.style.setProperty('--vh', `${vh}px`);
	});


	return (
		<div className="wrapper">
			<MapContainer/>
		</div>
	)
}

Main.displayName="Main";