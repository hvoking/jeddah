// App imports
import { PropertyImage } from './image'
import { Footer } from '../presentation/footer'
import { Logo } from './logo'
import { Info } from './info'
import './styles.scss';

export const Properties = ({ currentId, setCurrentId, data }: any) => {
	const currentProperty = data.find((p: any) => p.property_id === currentId);

	return (
		<div className="second-page-wrapper">
			<PropertyImage currentId={currentId}/>
			<Info currentId={currentId} currentProperty={currentProperty}/>
			<div></div>
			<Logo setCurrentId={setCurrentId}/>
			<Footer/>
		</div>
	)
}

Properties.displayName="Properties";