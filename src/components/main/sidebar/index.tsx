// App imports
import { Background } from './background';
import { Presentation } from './presentation';
import { Properties } from './properties';
import './styles.scss';

// Context imports
import { usePropertyApi } from '../../context/api/property';

export const Sidebar = () => {
	const { propertyData, currentId } = usePropertyApi();

	return (
		<div className="sidebar-wrapper">
			<Background/>
			{!currentId ? <Presentation/> : <Properties currentId={currentId} data={propertyData}/>}
		</div>
	)
}

Sidebar.displayName="Sidebar";